# Goal: BAGO_0 context compile pack slice

## Summary
Migrar únicamente el compilador puro de context packs, conservando el
entrypoint frontend histórico.

## Acceptance criteria
- [x] La implementación vive bajo `modules/context/frontend/`.
- [x] El path frontend existente reexporta sin duplicar lógica.
- [x] Se conservan counters, jerarquía compacta, orden y notas.
- [x] No cambia persistencia, API, estado ni contratos públicos.
- [x] Gates y revisión independiente pasan.

## Scope
### In scope
- `modules/context/frontend/compileContextPack.ts`
- wrapper frontend y caracterización
### Out of scope
- `contextTreeApi`, persistencia, árbol, UI y backend runtime.
