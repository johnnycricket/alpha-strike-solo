import { Unit } from "../types/Unit";

export class UnitService {
    private _units: Unit[];
    
    constructor(_units: Unit[]) {
        this._units = _units;
    }

    getUnits(userId: string) {
        return this._units;
    }

    editUnit(userId: string, unit: Unit) {
        return this._units;
    }

    createUnit(userId: string, unit: Unit) {
        return this._units;
    }
} 