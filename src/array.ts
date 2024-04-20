    // Función para verificar si un valor está contenido en un arreglo
    export function arrayContainsValue(arr: any[], value: any): boolean {
        return arr.includes(value);
    }
    // Función para verificar si un valor no está contenido en un arreglo
    export function arrayNotContainsValue(arr: any[], value: any): boolean {
        return !arr.includes(value);
    }