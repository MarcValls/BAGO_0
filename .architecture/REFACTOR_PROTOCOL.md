# Safe physical reorganization protocol

Status: **EXPERIMENTAL LAB**

Every physical move follows this sequence:

1. Resolve baseline: repository, branch, HEAD, worktree and remote authority.
2. Freeze behavior: identify public API, UI flow, persisted state and tests.
3. Add or identify characterization tests before moving files.
4. Declare target module, allowed files, forbidden dependencies and rollback.
5. Move only one bounded capability slice.
6. Keep a compatibility adapter if existing consumers still use old paths.
7. Run before/after checks and dependency inspection.
8. Remove adapters only after all consumers migrate.

`FEATURE CHANGE != STRUCTURAL REFACTOR`. If a feature need reveals structural
pressure, finish or contain the feature first, then open a separate
`repo.modularize` operation.
