# BAGO_0 physical architecture overlay

Status: **ARCHITECTURE _0 · EXPERIMENTAL LAB**

Architecture version: **0**

This is the first explicit BAGO_0 architecture baseline. It records physical
boundaries, dependency direction and the single migrated routing slice without
promoting the layout to canonical product architecture.

This repository is a physical-layout laboratory for BAGO. It starts from the
verified `MarcValls/BAGO` baseline `0ad5009565ad9f04533d7373a1fef45c6349dce5`
and must not be treated as the canonical product repository until a separate
governance decision adopts it.

## Objective

Organize BAGO primarily by product capability instead of by technical layer,
while preserving the existing backend, frontend, Electron, release and test
surfaces until characterization evidence proves that a move is safe.

## Current phase

Phase 0 materialized the target boundaries as documentation and directories.
Architecture _0 adds one characterized implementation slice:
`modules/routing/backend/agent_router.py`, retained behind the historical
`backend/.bago/tools/agent_router.py` compatibility entrypoint.

## Physical target

```text
BAGO_0/
├── kernel/
├── modules/
│   ├── session/
│   ├── context/
│   ├── permissions/
│   ├── providers/
│   ├── models/
│   ├── routing/
│   ├── execution/
│   ├── evidence/
│   ├── workspace/
│   ├── agents/
│   ├── simulation/
│   └── interpretation/
├── adapters/
│   ├── codex/
│   ├── copilot/
│   ├── github/
│   └── ollama/
├── apps/
│   ├── api/
│   ├── manager/
│   └── terminal/
├── contracts/
├── integration/
└── evidence/
```

## Non-negotiable constraints

- Feature change and structural refactor remain separate operations.
- Existing observable behavior must be characterized before any move.
- Existing technical roots (`backend/`, `frontend/`, `electron-viewer/`,
  `releases/`) remain operational until compatibility adapters and tests cover
  the replacement path.
- A module may not import another module's internal implementation.
- Backend-confirmed state remains authoritative over frontend presentation.
- Secrets, credentials and live state are not persisted in layout artifacts.

## Adoption gate

Architecture _0 can graduate from experimental to proposed implementation only
after a change unit proves:

1. characterization tests exist for the moved surface;
2. public contracts are unchanged or explicitly versioned;
3. before/after behavior comparison passes;
4. dependency direction improves or remains equivalent;
5. rollback path is documented and executable.

## _0 acceptance boundary

The _0 baseline is considered internally coherent when:

1. the state manifest names the candidate SHA and implementation slice;
2. every module boundary retains purpose, allowed dependencies and required
   evidence;
3. the migrated routing slice has a compatibility entrypoint;
4. no feature behavior or public contract change is claimed;
5. the repository gates and architecture change-unit checks pass.

The baseline does not authorize additional physical moves. Each next move
requires its own change unit and characterization evidence.
