# Module: routing

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own command routing, navigation destinations, role/cabinet routing and
route alias compatibility.

Current implementation candidates:

- `backend/.bago/tools/agent_router.py`
- `backend/.bago/core/orchestrator/`
- `frontend/src/navigation/`
- `frontend/src/features/sections.tsx`

Allowed dependencies: `kernel`, `contracts`, `modules/agents`,
`modules/permissions`, `modules/evidence`.

Forbidden dependencies: hardcoded duplicate route authorities and internal role
catalog assumptions from linked projects.

Required evidence before migration: cabinet routing regressions, navigation
coherence tests and route alias contract tests.
