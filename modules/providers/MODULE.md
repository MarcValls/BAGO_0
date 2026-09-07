# Module: providers

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own provider configuration, health, model listing and provider
lifecycle reporting.

Current implementation candidates:

- `backend/.bago/providers/`
- `backend/.bago/core/provider_adapter.py`
- `frontend/src/features/providers/`
- `frontend/src/shared/providerStates.ts`

Allowed dependencies: `kernel`, `contracts`, `modules/models`,
`modules/permissions`, `adapters/*`.

Forbidden dependencies: model identity decisions that bypass `modules/models`
and storage of provider secrets outside approved secret mechanisms.

Required evidence before migration: provider status tests, model listing tests
and secret non-persistence checks.
