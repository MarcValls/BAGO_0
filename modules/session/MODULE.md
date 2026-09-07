# Module: session

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own conversations, session identity, turn lifecycle and chat
continuity.

Current implementation candidates:

- `backend/.bago/api/handlers_conversations.py`
- `backend/.bago/core/context_store.py`
- `frontend/src/layout/ChatPanel.tsx`
- `frontend/src/api/client.ts`

Allowed dependencies: `kernel`, `contracts`, `modules/context`,
`modules/evidence`.

Forbidden dependencies: provider internals, frontend-only state as authority,
and direct imports from another module's internal implementation.

Required evidence before migration: conversation API regression tests, chat UI
continuity tests, persistence tests and before/after history comparison.
