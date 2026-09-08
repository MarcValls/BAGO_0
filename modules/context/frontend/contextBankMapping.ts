import type {
  ContextBankItemKind,
  ContextNodeType,
  ContextSourceKind
} from '../contracts/contextBankMapping';

export type { ContextBankItemKind, ContextNodeType, ContextSourceKind };

export function contextNodeTypeForBankItem(kind: ContextBankItemKind): ContextNodeType {
  switch (kind) {
    case 'workspace_file': return 'file';
    case 'workspace_directory':
    case 'source_root': return 'source';
    case 'claim': return 'claim';
    case 'risk': return 'risk';
    case 'pending': return 'pending';
    case 'receipt': return 'evidence';
    case 'rule': return 'rule';
    case 'project_status': return 'risk';
    case 'memory':
    case 'history':
    case 'manual': return 'note';
  }
}

export function contextSourceKindForBankItem(kind: ContextBankItemKind): ContextSourceKind {
  switch (kind) {
    case 'workspace_file': return 'workspace_file';
    case 'workspace_directory': return 'workspace_directory';
    case 'claim':
    case 'receipt': return 'evidence';
    case 'memory': return 'memory';
    case 'history': return 'history';
    case 'rule': return 'interpret_rule';
    case 'project_status': return 'project_status';
    case 'source_root':
    case 'risk':
    case 'pending':
    case 'manual': return 'manual';
  }
}
