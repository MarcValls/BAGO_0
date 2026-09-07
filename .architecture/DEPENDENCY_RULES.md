# Dependency rules

Status: **EXPERIMENTAL LAB**

Allowed high-level direction:

```text
apps -> modules -> kernel
apps -> adapters -> external systems
modules -> contracts
adapters -> contracts
integration -> apps/modules/adapters/contracts
```

Forbidden by default:

- module-to-module internal imports;
- frontend state redefining backend-confirmed authority;
- adapters owning domain state;
- tests depending on private implementation details when a public contract
  exists;
- structural moves that also change feature behavior.

Any required exception must be represented as `ARCHITECTURE_BOUNDARY_REQUIRED`
and handled by a separate Repository Engineering change unit.
