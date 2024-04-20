// div.ts

// Función para realizar una división correcta
export function divide(dividend: number, divisor: number): number {
    if (divisor === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return dividend / divisor;
}
