# Goal: BAGO_0 context compile pack slice

## Summary
Migrar únicamente el compilador puro de context packs, conservando el
entrypoint frontend histórico.

## Acceptance criteria
- [ ] La implementación vive bajo `modules/context/frontend/`.
- [ ] El path frontend existente reexporta sin duplicar lógica.
- [ ] Se conservan counters, jerarquía compacta, orden y notas.
- [ ] No cambia persistencia, API, estado ni contratos públicos.
- [ ] Gates y revisión independiente pasan.

## Scope
### In scope
- `modules/context/frontend/compileContextPack.ts`
- wrapper frontend y caracterización
### Out of scope
- `contextTreeApi`, persistencia, árbol, UI y backend runtime.
