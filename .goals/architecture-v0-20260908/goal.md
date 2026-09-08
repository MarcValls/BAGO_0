# Goal: BAGO_0 — primera versión de arquitectura _0

## Summary
Formalizar la primera línea base de arquitectura capability-oriented de BAGO_0
sin alterar comportamiento, contratos públicos ni las raíces operativas actuales.

## Acceptance criteria
- [ ] La arquitectura _0 queda documentada y versionada.
- [ ] El estado de arquitectura enlaza al candidato y distingue slices ejecutados
      de boundaries aún experimentales.
- [ ] El slice de routing existente queda reconocido como migración compatible,
      no como autorización de migración masiva.
- [ ] La change unit limita explícitamente el alcance y los no-goals.
- [ ] Los manifiestos, gates y revisión independiente pasan.

## Scope
### In scope
- `.architecture/**`
- `evidence/changes/bago0-architecture-v0-baseline/**`
- `.goals/architecture-v0-20260908/**`
### Out of scope
- Movimientos de implementación adicionales.
- Cambios de producto, UI, API, contratos, releases o settings remotos.

## Quality gates
| Gate | Comando | Obligatorio |
|------|---------|-------------|
| JSON | `python -c ... json.load(...)` | Sí |
| hygiene | `git diff --check` | Sí |
| backend | `python -m pytest backend\tests -q` | Sí |
| frontend | `npm run typecheck --workspace frontend` | Sí |
| frontend tests | `npm run test:frontend` | Sí |
| build | `npm run build` | Sí |

## Risks & unknowns
- La arquitectura _0 sigue siendo experimental y no sustituye la autoridad de
  `backend/`, `frontend/` ni `electron-viewer/`.
- La siguiente migración requiere una change unit separada y caracterización.
