import { calculateUptimePercent } from '../../src/metrics/uptime';

describe('calculateUptimePercent', () => {
  it('calcula el porcentaje de disponibilidad', () => {
    expect(calculateUptimePercent(900, 1000)).toBe(90);
  });

  it('lanza error si el tiempo total es cero', () => {
    expect(() => calculateUptimePercent(10, 0)).toThrow();
  });
});
