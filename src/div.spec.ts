import { divide } from './div';

describe('Pruebas para div.ts', () => {
  test('Una división correcta', () => {
    // Arrange
    const dividend = 10;
    const divisor = 2;

    // Act
    const result = divide(dividend, divisor);

    // Assert
    expect(result).toBe(5);
  });

  test('Prueba controlada del error división por cero', () => {
    // Arrange
    const dividend = 10;
    const divisor = 0;

    // Act & Assert
    expect(() => {
      divide(dividend, divisor);
    }).toThrow();
  });
});
