# Module: agents

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own agent definitions, role manifests, cabinet composition and agent
CRUD behavior.

Current implementation candidates:

- `.agents/skills/`
- `backend/.bago/roles/`
- agent API handlers and frontend agent panels.

Allowed dependencies: `kernel`, `contracts`, `modules/routing`,
`modules/permissions`, `modules/evidence`.

Forbidden dependencies: generated plans that diverge from role authority and
project-local role catalogs used as framework authority.

Required evidence before migration: agent CRUD contract tests, package role
tests and cabinet policy regressions.
