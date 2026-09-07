# Module rules

Status: **EXPERIMENTAL LAB**

Each capability module owns one product responsibility and exposes only a
documented public surface. A module boundary is valid only when its `MODULE.md`
declares:

- purpose;
- responsibilities;
- public API or UI surface;
- allowed dependencies;
- forbidden dependencies;
- owned persistent state;
- emitted and consumed events;
- invariants;
- required tests and evidence.

## Rules

1. A capability owns state once. Other modules may request state through public
   contracts, not internal files.
2. Cross-module imports must target public contracts or adapters.
3. Moving implementation requires characterization tests before the move.
4. A module may contain backend, frontend, contracts and tests for the same
   capability once migration is explicitly approved.
5. Empty directories in this phase are boundary placeholders, not executable
   ownership transfers.
