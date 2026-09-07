# Public contracts

Status: **EXPERIMENTAL LAB**

This file maps current public contracts before physical reorganization. The
existing source locations remain authoritative until moved by an approved
change unit.

| Capability | Current public surfaces |
|---|---|
| Session | `backend/.bago/api/handlers_conversations.py`, `backend/.bago/core/context_store.py`, `frontend/src/api/client.ts` |
| Context | `frontend/CONTEXT_PRODUCT_CONTRACT.md`, `backend/docs/TRACEABILITY.md`, context-tree UI contracts |
| Permissions | Capability and permission responses exposed through backend API contracts |
| Providers | Provider status/model APIs and frontend provider state presentation |
| Models | Model identity, equivalence and routing policy contracts |
| Routing | Role router, action registry and canonical navigation destinations |
| Execution | Pipeline/job execution APIs and command dispatch |
| Evidence | Receipts, claims, testing documentation and audit records |
| Workspace | Workspace manifest, picker, file explorer and project inspection flow |
| Agents | Agent CRUD API, role manifests and cabinet routing |
| Simulation | Simulation-capable capability metadata and safe-run paths |
| Interpretation | Interpretation API, panel and lifecycle status |

Contract changes require explicit public-contract approval and versioned
evidence. This overlay does not approve any contract change.
