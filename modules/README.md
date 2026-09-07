# Capability modules

Status: **EXPERIMENTAL LAB**

These directories name the intended product-capability boundaries for BAGO_0.
They do not yet own implementation files. Current runtime code remains in the
original BAGO technical roots until a safe modularization change unit moves a
single capability slice with characterization evidence.

| Module | Purpose |
|---|---|
| `session` | Conversations, session identity, turn lifecycle and chat continuity |
| `context` | Context tree, patches, traces and source selection |
| `permissions` | Capability gates, user confirmations and fail-closed policy |
| `providers` | Provider configuration, health, status and lifecycle |
| `models` | Model identity, capability observations and routing metadata |
| `routing` | Navigation, command routing, cabinet selection and role routing |
| `execution` | Jobs, pipeline tasks, command dispatch and tool execution |
| `evidence` | Receipts, claims, audit records and verification state |
| `workspace` | Workspace linking, file exploration and project inspection |
| `agents` | Agent definitions, role manifests and agent CRUD |
| `simulation` | Dry-run, preview and non-destructive execution modes |
| `interpretation` | Interpretation requests, results and lifecycle UI/API |
