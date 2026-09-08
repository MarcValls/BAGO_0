import type {
  ContextNodePriority,
  ContextNodeStatus,
  ContextPackStatus,
  ContextSourceKind
} from '../contracts/contextBankMapping';

type CompileNode = {
  id: string;
  parentId: string | null;
  type: string;
  status: ContextNodeStatus;
  title: string;
  summary: string;
  body?: string;
  priority: ContextNodePriority;
  weightTokens?: number;
  sourceRefs: Array<{ kind: ContextSourceKind; path?: string }>;
  conflictNodeIds: string[];
  tags: string[];
};

type CompileTree = {
  id: string;
  name: string;
  rootId: string;
  nodes: Record<string, CompileNode>;
};

type CompilePack = {
  id: string;
  name: string;
  status: ContextPackStatus;
  nodeIds: string[];
  notes?: string;
};

export type CompiledContextPack = {
  id: string;
  packId: string;
  markdown: string;
  nodeCount: number;
  weightTokens: number;
  conflicts: number;
  proposals: number;
  staleCount: number;
  generatedAt: string;
};

function indent(level: number): string {
  return '  '.repeat(level);
}

function statusBadge(status: ContextNodeStatus): string {
  switch (status) {
    case 'active': return 'ACTIVO';
    case 'proposed': return 'PROPUESTO';
    case 'excluded': return 'EXCLUIDO';
    case 'archived': return 'ARCHIVADO';
    case 'canon': return 'CANON';
    case 'conflict': return 'CONFLICTO';
    case 'stale': return 'STALE';
    default: return '';
  }
}

function priorityBadge(priority: ContextNodePriority): string {
  return `prio:${priority}`;
}

function buildTreeMarkdown(tree: CompileTree, rootId: string, level: number): string {
  const lines: string[] = [];
  const node = tree.nodes[rootId];
  if (!node) return '';
  const prefix = indent(level);
  const refs = node.sourceRefs.length
    ? ` refs:${node.sourceRefs.map((ref) => ref.kind + (ref.path ? `:${ref.path}` : '')).join(',')}`
    : '';
  const tags = node.tags.length ? ` tags:${node.tags.join(',')}` : '';
  lines.push(`${prefix}- [${statusBadge(node.status)} | ${priorityBadge(node.priority)}] **${node.title}**${tags}${refs}`);
  if (node.summary) lines.push(`${prefix}  ${node.summary}`);
  if (node.body) {
    for (const line of node.body.split(/\r?\n/)) lines.push(`${prefix}  ${line}`);
  }
  const children = Object.values(tree.nodes)
    .filter((candidate) => candidate.parentId === rootId)
    .sort((a, b) => a.title.localeCompare(b.title, 'es'));
  for (const child of children) lines.push(buildTreeMarkdown(tree, child.id, level + 1));
  return lines.filter(Boolean).join('\n');
}

export function compileContextPack(tree: CompileTree, pack: CompilePack): CompiledContextPack {
  const stamps = new Date().toISOString();
  const selectedNodes = pack.nodeIds.flatMap((id) => tree.nodes[id] ? [tree.nodes[id]] : []);
  const treeNodes = Object.values(tree.nodes);
  const conflicts = treeNodes.filter((node) => node.status === 'conflict' || node.conflictNodeIds.length > 0).length;
  const proposals = treeNodes.filter((node) => node.status === 'proposed').length;
  const staleCount = treeNodes.filter((node) => node.status === 'stale').length;
  const weightTokens = selectedNodes.reduce((total, node) => total + (node.weightTokens || 0), 0);
  const headings: string[] = [];
  headings.push(`# ${pack.name}`);
  headings.push('');
  headings.push(`tree: ${tree.name} (${tree.id})`);
  headings.push(`pack: ${pack.id}`);
  headings.push(`status: ${pack.status}`);
  headings.push(`generated_at: ${stamps}`);
  headings.push(`weight_tokens: ${weightTokens}`);
  headings.push(`nodes: ${pack.nodeIds.length}`);
  headings.push(`conflicts: ${conflicts}`);
  headings.push(`proposals: ${proposals}`);
  headings.push(`stale: ${staleCount}`);
  headings.push('');
  headings.push('## Contexto activo');
  headings.push('');
  const inPack = new Set(pack.nodeIds);
  const ancestorsOf = (id: string): Set<string> => {
    const set = new Set<string>();
    let current = tree.nodes[id];
    while (current && current.parentId) {
      set.add(current.parentId);
      current = tree.nodes[current.parentId];
    }
    return set;
  };
  const relevant = new Set<string>([tree.rootId]);
  for (const id of pack.nodeIds) {
    if (!tree.nodes[id]) continue;
    relevant.add(id);
    for (const aid of ancestorsOf(id)) relevant.add(aid);
  }
  const filteredTree: CompileTree = {
    ...tree,
    nodes: Object.fromEntries(
      Object.entries(tree.nodes).filter(([id]) => relevant.has(id) || inPack.has(id))
    )
  };
  const lines: string[] = [];
  const rootChildren = Object.values(filteredTree.nodes)
    .filter((node) => node.parentId === filteredTree.rootId || node.id === filteredTree.rootId)
    .sort((a, b) => {
      if (a.id === filteredTree.rootId) return -1;
      if (b.id === filteredTree.rootId) return 1;
      return a.title.localeCompare(b.title, 'es');
    });
  for (const child of rootChildren) lines.push(buildTreeMarkdown(filteredTree, child.id, 0));
  headings.push(lines.length ? lines.join('\n') : '(pack vacío)');
  if (pack.notes) {
    headings.push('');
    headings.push('## Notas');
    headings.push('');
    headings.push(pack.notes);
  }
  return {
    id: `cmp_${Math.random().toString(36).slice(2, 10)}`,
    packId: pack.id,
    markdown: headings.join('\n'),
    nodeCount: pack.nodeIds.length,
    weightTokens,
    conflicts,
    proposals,
    staleCount,
    generatedAt: stamps
  };
}
