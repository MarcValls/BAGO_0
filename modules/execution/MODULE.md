# Module: execution

Status: **BOUNDARY_PLACEHOLDER**

Purpose: own jobs, pipeline tasks, tool execution and command dispatch.

Current implementation candidates:

- backend command handlers;
- frontend pipeline and job panels;
- capability execution paths.

Allowed dependencies: `kernel`, `contracts`, `modules/permissions`,
`modules/evidence`, `modules/routing`.

Forbidden dependencies: unconfirmed destructive execution and silent tool
failure.

Required evidence before migration: job lifecycle tests, command dispatch tests
and receipt generation checks.
