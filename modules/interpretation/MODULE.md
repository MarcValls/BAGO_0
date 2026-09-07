# Module: interpretation

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own interpretation requests, results, status and panel behavior.

Current implementation candidates:

- `frontend/src/features/interpretation/`
- interpretation backend handlers;
- interpretation lifecycle tests.

Allowed dependencies: `kernel`, `contracts`, `modules/execution`,
`modules/evidence`, `modules/permissions`.

Forbidden dependencies: unsupported cancel aliases and UI claims of backend
capability without a real contract.

Required evidence before migration: interpretation API tests and UI lifecycle
regressions.
