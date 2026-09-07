# Adapters

Status: **EXPERIMENTAL LAB**

Adapters translate between BAGO capability contracts and external systems. They
must not own product state.

| Adapter | External boundary |
|---|---|
| `codex` | Codex CLI/session compatibility |
| `copilot` | Copilot CLI/session compatibility |
| `github` | GitHub CLI/API, PRs, checks and releases |
| `ollama` | Local/cloud Ollama provider integration |

Adapter migration requires contract tests proving the capability surface remains
unchanged.
