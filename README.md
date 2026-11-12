# NetOps CI Lab

Pequeñas utilidades TypeScript de red y disponibilidad para el equipo de
infraestructura de **CloudPulse Services**: validación de direcciones IPv4 y
cálculo del porcentaje de disponibilidad (uptime) de un servicio.

Es un repositorio de práctica para automatizar pruebas con GitHub Actions.

## Requisitos

- Node.js 18 o superior
- npm

## Uso

```bash
npm install          # instala dependencias
npm test             # ejecuta las pruebas unitarias
npm run test:coverage  # pruebas con cobertura y umbral mínimo (90%)
npm run build        # compila TypeScript
```

## Estructura

```
src/
  validators/ip-validator.ts
  metrics/uptime.ts
test/
  validators/ip-validator.test.ts
  metrics/uptime.test.ts
```
