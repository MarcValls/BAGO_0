# Module: context

Status: **PARTIALLY_MIGRATED**

Purpose: own context tree, source selection, context patch lifecycle and
traceability between user intent, repository sources and evidence.

Current implementation candidates:

- `frontend/src/features/context-tree/`
- `frontend/CONTEXT_PRODUCT_CONTRACT.md`
- `backend/docs/TRACEABILITY.md`

Migrated implementation:

- `modules/context/frontend/contextBankMapping.ts`
- `frontend/src/features/context-tree/contextBankMapping.ts` remains the
  compatibility entrypoint.

Allowed dependencies: `kernel`, `contracts`, `modules/session`,
`modules/workspace`, `modules/evidence`.

Forbidden dependencies: hidden workspace mutations and unverified source claims.

Required evidence before further migration: context patch tests, traceability
checks and workspace interaction characterization. The bank mapping slice is
pure and does not own state.
