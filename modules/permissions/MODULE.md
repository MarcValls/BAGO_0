# Module: permissions

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own capability gates, confirmations and fail-closed authorization
state.

Current implementation candidates:

- backend capability/security handlers;
- frontend bootstrap snapshot permission fields;
- tests covering blocked, missing and confirmed states.

Allowed dependencies: `kernel`, `contracts`, `modules/evidence`.

Forbidden dependencies: permissive fallbacks, silent success on missing authority
and credential persistence.

Required evidence before migration: fail-closed tests and API/UI blocked-state
contract tests.
