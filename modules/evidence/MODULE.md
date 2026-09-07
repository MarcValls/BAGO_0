# Module: evidence

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own receipts, claims, audit records and verification state.

Current implementation candidates:

- `.bago/audits/`
- `.gabo/copilot/state/`
- `backend/docs/CLAIMS.md`
- `backend/docs/TESTING.md`
- verification scripts and generated truth projections.

Allowed dependencies: `kernel`, `contracts`.

Forbidden dependencies: stale evidence promoted to current verification and
success-shaped fallbacks.

Required evidence before migration: receipt freshness checks, claims-doc sync
tests and verification fingerprint tests.
