# Module: kernel

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own the minimal runtime primitives shared by all capabilities:
configuration, lifecycle, stable state transitions, atomic persistence and
cross-cutting invariants.

Current implementation candidates:

- `backend/bago_core/`
- selected `backend/.bago/core/` primitives;
- root package and runtime bootstrap contracts.

Allowed dependencies: `contracts` only.

Forbidden dependencies: app UI, provider implementations, tool-specific
adapters and feature-module internals.

Required evidence before migration: import inventory checks, kernel boundary
tests and end-to-end bootstrap characterization.
