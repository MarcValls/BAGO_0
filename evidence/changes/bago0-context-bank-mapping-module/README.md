# Evidence: context bank mapping module migration

Status: **VERIFIED**

This change moves the pure context-bank kind mapping behind the
`modules/context/frontend/` boundary, centralizes its shared type vocabulary
under `modules/context/contracts/`, and keeps the historical frontend path as a
compatibility re-export. It does not move state, change API contracts or alter
persistence.

Required characterization:

- context regression mapping tests for node and source mappings;
- frontend typecheck;
- frontend test suite;
- frontend build;
- diff and module-boundary checks.

Independent review: `ARCHITECTURE_REVIEW.md`.
