# Goal: Cierre autónomo del estado actual de BAGO

## Summary
Revisar el candidato actual de `main`, ejecutar los gates nativos del monorepo y
resolver el primer defecto reproducible que impida un estado sano sin ampliar
el alcance ni alterar autoridad externa.

## Acceptance criteria
- [x] El repositorio queda limpio y sincronizado con `origin/main` antes de la verificación final.
- [x] La versión canónica y sus proyecciones no presentan drift.
- [x] Los gates aplicables de backend y frontend se ejecutan con resultado documentado.
- [x] Todo defecto corregido queda cubierto por una verificación reproducible; no se detectó defecto de producto.
- [x] El cierre distingue EXECUTED, VERIFIED, VALIDATED y BLOCKED sin sobreafirmar.

## Scope
### In scope
- Estado Git y autoridad local del repositorio.
- Scripts de validación existentes, tests backend y gates frontend.
- Correcciones quirúrgicas directamente causadas por los resultados observados.
- Evidencia local del candidato final.
### Out of scope
- Cambios remotos, releases, tags, settings de GitHub o secretos.
- Reescritura de historial o limpieza de cambios ajenos.
- Cambios de producto no exigidos por un fallo reproducible.

## Quality gates
| Gate | Comando | Obligatorio |
|------|---------|-------------|
| repo status | `python .bago\bin\bago.py status` | Si |
| backend tests | `python -m pytest backend\tests -q` | Si |
| frontend typecheck | `npm run typecheck --workspace frontend` | Si |
| frontend tests | `npm run test:frontend` | Si |
| frontend build | `npm run build` | Si |

## Risks & unknowns
- El entorno puede carecer de dependencias Python o Node instaladas.
- La rama recién clonada puede contener sólo un scaffold y no los artefactos de
  cierre descritos por documentos históricos.
- La validación externa de GitHub no se considera sustituida por evidencia local.
