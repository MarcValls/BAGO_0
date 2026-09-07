# Module: models

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own model identity, observed capabilities, equivalence and routing
metadata.

Current implementation candidates:

- `backend/.bago/core/model_equivalence.py`
- model routing policy contracts;
- frontend model picker state and tests.

Allowed dependencies: `kernel`, `contracts`, `modules/providers`,
`modules/evidence`.

Forbidden dependencies: provider-specific secret material and UI-only model
authority.

Required evidence before migration: model equivalence tests, routing metadata
tests and frontend picker regressions.
