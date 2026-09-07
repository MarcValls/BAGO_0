# Applications

Status: **EXPERIMENTAL LAB**

Applications compose capability modules for a user-facing surface. They do not
own module state.

| App | Current source candidates |
|---|---|
| `api` | local backend API entrypoints |
| `manager` | manager UI and orchestration shell |
| `terminal` | CLI and launcher surfaces |

Existing `backend/`, `frontend/`, `electron-viewer/` and `manager/` roots stay
operational until a compatibility-backed move is approved.
