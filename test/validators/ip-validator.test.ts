import { isValidIPv4, isPrivateIPv4 } from '../../src/validators/ip-validator';

describe('isValidIPv4', () => {
  it('acepta una direccion valida', () => {
    expect(isValidIPv4('192.168.1.10')).toBe(true);
  });

  it('rechaza una direccion con menos de cuatro numeros', () => {
    expect(isValidIPv4('192.168.1')).toBe(false);
  });

  it('rechaza texto que no es una direccion', () => {
    expect(isValidIPv4('servidor-01')).toBe(false);
  });

  it('rechaza un octeto mayor que 255', () => {
    // Cada numero de una IPv4 debe estar entre 0 y 255.
    expect(isValidIPv4('256.10.10.10')).toBe(false);
  });
});

describe('isPrivateIPv4', () => {
  it('reconoce el rango 10.0.0.0/8', () => {
    expect(isPrivateIPv4('10.20.30.40')).toBe(true);
  });

  it('reconoce el rango 172.16.0.0/12', () => {
    expect(isPrivateIPv4('172.20.5.5')).toBe(true);
  });

  it('reconoce el rango 192.168.0.0/16', () => {
    expect(isPrivateIPv4('192.168.0.1')).toBe(true);
  });

  it('no considera privada una IP publica', () => {
    expect(isPrivateIPv4('8.8.8.8')).toBe(false);
  });
});
