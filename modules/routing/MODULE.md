# Module: routing

Status: **PARTIALLY_MIGRATED**

Purpose: own command routing, navigation destinations, role/cabinet routing and
route alias compatibility.

Current implementation candidates:

- `backend/.bago/tools/agent_router.py`
- `modules/routing/backend/agent_router.py`
- `backend/.bago/core/orchestrator/`
- `frontend/src/navigation/`
- `frontend/src/features/sections.tsx`

Allowed dependencies: `kernel`, `contracts`, `modules/agents`,
`modules/permissions`, `modules/evidence`.

Forbidden dependencies: hardcoded duplicate route authorities and internal role
catalog assumptions from linked projects.

Migration state:

- `modules/routing/backend/agent_router.py` owns the agent/cabinet router
  implementation.
- `backend/.bago/tools/agent_router.py` remains as the compatibility entrypoint
  for existing CLI, docs, package and import surfaces.
- Navigation and route alias implementation remain in their original locations.

Required evidence before further migration: cabinet routing regressions,
navigation coherence tests and route alias contract tests.
