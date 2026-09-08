# Goal: BAGO_0 context bank mapping slice

## Summary
Migrar únicamente el helper puro que traduce tipos del Banco contextual a tipos
de nodo y fuente, conservando el entrypoint frontend histórico.

## Acceptance criteria
- [x] La implementación vive bajo `modules/context/frontend/`.
- [x] El path frontend existente reexporta sin duplicar lógica.
- [x] No cambia persistencia, API, estado ni contratos públicos.
- [x] Gates y revisión independiente pasan.

## Scope
### In scope
- `modules/context/frontend/contextBankMapping.ts`
- wrapper frontend y change unit
### Out of scope
- `contextTreeApi`, `contextTreeTypes`, persistencia, árbol y UI.
