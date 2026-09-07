# Evidence: routing agent router module migration

Status: **EXECUTED**

Baseline: `d7df474a0c6175b955be8f414dc27a3dc64f44a0`

This change migrates the agent/cabinet router implementation into the
`modules/routing/backend/` capability boundary and leaves the historical
`backend/.bago/tools/agent_router.py` path as a compatibility wrapper.

No routing behavior change is authorized by this operation.

Verification scope:

- cabinet router regression tests;
- packaging tests proving the module implementation is shipped;
- legacy script entrypoint execution;
- JSON and diff hygiene checks.
