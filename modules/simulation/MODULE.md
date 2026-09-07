# Module: simulation

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own non-destructive previews, dry-runs and simulation capability
metadata.

Current implementation candidates:

- capability metadata;
- pipeline preview paths;
- tests that distinguish simulation from execution.

Allowed dependencies: `kernel`, `contracts`, `modules/execution`,
`modules/permissions`, `modules/evidence`.

Forbidden dependencies: simulated success recorded as executed external effect.

Required evidence before migration: dry-run tests and receipt state separation.
