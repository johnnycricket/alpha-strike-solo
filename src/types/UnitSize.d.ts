export enum UnitSizes { 
    LIGHT = 1,
    MEDIUM,
    HEAVY,
    ASSAULT
}

export interface UnitSize {
    id: number,
    unitSize: UnitSizes
}