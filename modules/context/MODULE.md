# Module: context

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own context tree, source selection, context patch lifecycle and
traceability between user intent, repository sources and evidence.

Current implementation candidates:

- `frontend/src/features/context-tree/`
- `frontend/CONTEXT_PRODUCT_CONTRACT.md`
- `backend/docs/TRACEABILITY.md`

Allowed dependencies: `kernel`, `contracts`, `modules/session`,
`modules/workspace`, `modules/evidence`.

Forbidden dependencies: hidden workspace mutations and unverified source claims.

Required evidence before migration: context patch tests, traceability checks and
workspace interaction characterization.
