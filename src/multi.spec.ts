import { n, number, notTrue, notFalse } from './multi';

describe('Pruebas para multi.ts', () => {
  test('Prueba que "n" es null', () => {
    // Assert
    expect(n).toBeNull();
  });

  test('Prueba que "n" está definido (no es undefined)', () => {
    // Assert
    expect(n).toBeDefined();
  });

  test('Prueba que "number" es igual a 0', () => {
    // Assert
    expect(number).toBe(0);
  });

  test('Prueba que "notTrue" es false', () => {
    // Assert
    expect(notTrue).toBe(false);
  });

  test('Prueba que "notFalse" es true', () => {
    // Assert
    expect(notFalse).toBe(true);
  });
});
