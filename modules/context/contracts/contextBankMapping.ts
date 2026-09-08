export type ContextBankItemKind =
  | 'workspace_file'
  | 'workspace_directory'
  | 'source_root'
  | 'claim'
  | 'risk'
  | 'pending'
  | 'receipt'
  | 'memory'
  | 'history'
  | 'rule'
  | 'project_status'
  | 'manual';

export type ContextNodeType =
  | 'root'
  | 'intent'
  | 'source'
  | 'file'
  | 'decision'
  | 'rule'
  | 'claim'
  | 'risk'
  | 'pending'
  | 'evidence'
  | 'proposal'
  | 'pack'
  | 'note';

export type ContextSourceKind =
  | 'workspace_file'
  | 'workspace_directory'
  | 'chat_turn'
  | 'pipeline_step'
  | 'manual'
  | 'evidence'
  | 'memory'
  | 'history'
  | 'interpret_rule'
  | 'project_status';
