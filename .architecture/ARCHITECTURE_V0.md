# BAGO_0 Architecture _0

Status: **PREPARED · EXPERIMENTAL**

Baseline candidate: `a2e90d26fbe8f83c1666068e54900c983ecf028a`  
Branch: `main`  
Remote: `https://github.com/MarcValls/BAGO_0.git`

## Intent

Architecture _0 prepares the first capability-oriented map for BAGO_0 while
keeping the existing runtime roots operational. It is a structural baseline,
not a product feature release and not a migration authorization for all
modules.

## Product boundary

BAGO remains a local-first AI control plane:

```text
operator
  -> app surface (CLI, API, manager)
  -> capability module
  -> kernel state/policy
  -> adapter or provider boundary
  -> evidence receipt
```

Backend-confirmed state is authoritative. Frontend, Electron and compatibility
wrappers are presentation or integration surfaces; they do not own domain
state.

## Physical boundaries

| Boundary | Current role | Authority |
|---|---|---|
| `kernel/` | Target for shared runtime primitives and invariants | Existing backend runtime until migration |
| `modules/` | Capability ownership declarations | Per-module `MODULE.md` |
| `adapters/` | External-system translation without domain state | Adapter contracts |
| `apps/` | Composition surfaces for API, manager and terminal | Existing app roots |
| `contracts/` | Cross-capability public contracts | Existing backend/frontend contracts |
| `integration/` | Cross-boundary verification and evidence | Existing test/evidence roots |
| `backend/` | Operational Python runtime and compatibility source | Current runtime authority |
| `frontend/` | React presentation surface | Backend API contracts |
| `electron-viewer/` | Desktop shell and lifecycle bridge | Backend/API boundary |

## Existing implemented slice

`modules/routing/backend/agent_router.py` is the first migrated capability
implementation. The legacy `backend/.bago/tools/agent_router.py` path remains
as a compatibility wrapper, preserving CLI, package and import consumers.

The slice is bounded by:

- characterization tests for cabinet routing;
- packaging coverage;
- legacy entrypoint execution;
- no frontend navigation move;
- no route alias authority duplication;
- no behavior or public contract change.

Evidence: `evidence/changes/bago0-routing-agent-router-module/`.

## Ownership and dependency rules

```text
apps -> modules -> kernel
apps -> adapters -> contracts
modules -> contracts
adapters -> contracts
integration -> apps/modules/adapters/contracts
```

Forbidden by default:

- module-to-module internal imports;
- adapters owning capability state;
- frontend redefining backend authority;
- structural moves coupled to feature changes;
- direct deletion of compatibility entrypoints.

## State ownership

| State | Owner in _0 | Other surfaces |
|---|---|---|
| Session identity and turns | Existing backend session runtime | UI consumes API |
| Context and workspace binding | Existing backend context/workspace runtime | UI presents projections |
| Provider/model policy | Existing backend provider/routing contracts | Adapters translate |
| Evidence and claims | Existing evidence/runtime receipts | Integration reads receipts |
| Routing slice | `modules/routing/backend/agent_router.py` | Legacy wrapper delegates |

## Explicit non-goals

- no bulk file moves;
- no replacement of `backend/`, `frontend/` or Electron roots;
- no public contract version bump;
- no provider or UI behavior change;
- no release or installation change;
- no remote mutation outside the authorized commit/push of this architecture
  baseline.

## Next operation

The next permitted operation is `repo.plan_modularization`. It must select one
bounded capability, name characterization tests, preserve compatibility and
define rollback before any additional move.
