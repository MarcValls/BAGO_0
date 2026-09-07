# Module: workspace

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own workspace linking, project inspection, file exploration and
workspace UI state.

Current implementation candidates:

- `frontend/src/features/workspace/`
- workspace handlers in `backend/.bago/api/`
- workspace manifest and project inspection flows.

Allowed dependencies: `kernel`, `contracts`, `modules/context`,
`modules/session`, `modules/evidence`.

Forbidden dependencies: UI filters not backed by backend capability and hidden
persistent state ownership.

Required evidence before migration: workspace picker regressions, file explorer
tests and backend workspace API checks.
