import { sum } from './sum';

describe('Pruebas para sum.ts', () => {
  test('Prueba que una suma de dos valores es mayor a 10', () => {
    // Arrange
    const a = 6;
    const b = 5;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBeGreaterThan(10);
  });

  test('Prueba que una suma de dos valores es mayor o igual a 20', () => {
    // Arrange
    const a = 15;
    const b = 5;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBeGreaterThanOrEqual(20);
  });

  test('Prueba que una suma de dos valores es menor o igual a 8', () => {
    // Arrange
    const a = 3;
    const b = 4;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBeLessThanOrEqual(8);
  });

  test('Prueba que una suma de dos valores es menor a 12', () => {
    // Arrange
    const a = 5;
    const b = 5;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBeLessThan(12);
  });

  test('Prueba que una suma de dos valores es igual a 9', () => {
    // Arrange
    const a = 4;
    const b = 5;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(9);
  });
});
