import React, {useState} from "react";
import { Unit } from "../types/Unit";
import UnitForm from "../components/UnitForm";

const AddUnits = () => {
    const [unit, setUnit] = useState<Unit>({} as Unit);
    return (
        <div>
            <UnitForm unit={unit}/>
            <button>Add Unit</button>
        </div>
    )
}

export default AddUnits;