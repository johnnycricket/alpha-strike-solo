import React from "react";
import { UnitForm } from "../components/UnitForm";

interface addUnitProps = {
}

const AddUnits = () => {
    return (
        <div>
            <UnitForm />
            <button>Add Unit</button>
        </div>
    )
}