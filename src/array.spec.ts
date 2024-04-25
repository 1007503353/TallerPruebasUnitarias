import { arrayContainsValue, arrayNotContainsValue } from './array';

describe('Pruebas para array.ts', () => {
  // Definimos el arreglo una vez para todas las pruebas
  const arr = ['value1', 'value2', 'value3'];

  test('El array contiene el valor "value1"', () => {
    // Act
    const contieneValue1 = arrayContainsValue(arr, 'value1');

    // Assert
    expect(contieneValue1).toBe(true);
  });

  test('El array contiene el valor "value3"', () => {
    // Act
    const contieneValue3 = arrayContainsValue(arr, 'value3');

    // Assert
    expect(contieneValue3).toBe(true);
  });

  test('El array NO contiene el valor "UNAC"', () => {
    // Act
    const noContieneUNAC = arrayNotContainsValue(arr, 'UNAC');

    // Assert
    expect(noContieneUNAC).toBe(true);
  });
});
