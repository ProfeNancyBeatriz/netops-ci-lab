/**
 * Calcula el porcentaje de disponibilidad (uptime) de un servicio.
 */
export function calculateUptimePercent(upSeconds: number, totalSeconds: number): number {
  if (totalSeconds <= 0) {
    throw new Error('El tiempo total debe ser mayor que cero');
  }
  return (upSeconds / totalSeconds) * 100;
}

/**
 * Clasifica la disponibilidad: ok (>= 99.9), degraded (>= 99) o down.
 */
export function getUptimeStatus(percent: number): 'ok' | 'degraded' | 'down' {
  if (percent >= 99.9) {
    return 'ok';
  }
  if (percent >= 99) {
    return 'degraded';
  }
  return 'down';
}
