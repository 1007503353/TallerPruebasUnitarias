import { anything, anything1 } from './string';

describe('Pruebas para string.ts', () => {
  test('Prueba que "anything" contiene "UN"', () => {
    // Assert
    expect(anything).toContain('UN');
  });

  test('Prueba que "anything" no contiene "P"', () => {
    // Assert
    expect(anything).not.toContain('P');
  });

  test('Prueba que "anything1" contiene la letra "n"', () => {
    // Assert
    expect(anything1).toContain('n');
  });
});
