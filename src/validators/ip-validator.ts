/**
 * Valida direcciones IPv4 en notacion decimal (por ejemplo 192.168.1.10).
 */
export function isValidIPv4(ip: string): boolean { 

  if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) { 

    return false; 

  } 

  return ip.split('.').every((octeto) => Number(octeto) <= 255); 

} 

/**
 * Indica si una IPv4 pertenece a un rango privado (RFC 1918):
 * 10.0.0.0/8, 172.16.0.0/12 o 192.168.0.0/16.
 */
export function isPrivateIPv4(ip: string): boolean {
  if (!isValidIPv4(ip)) {
    return false;
  }
  const [a, b] = ip.split('.').map(Number);
  return a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168);
}
