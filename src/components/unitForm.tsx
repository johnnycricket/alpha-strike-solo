import React from "react";
import { UnitRoles } from "../types/UnitRole";
import { UnitSizes } from "../types/UnitSize";
import { UnitTypes } from "../types/UnitType";

interface unitProps {
    unitName: String,
    pointValue: Number,
    unitType: String,
    unitSize: String,
    unitRole: String
}

export function UnitForm(prop: unitProps){
    const typeOptions = Object.values(UnitTypes);
    const roleOptions = Object.values(UnitRoles);
    const sizeOptions = Object.values(UnitSizes);

    return (
        <div>
            <form>
                <label for='unitName'>Unit Name</label>
                <input id='unitName' type='text'/>
                <label for='type'>Unit Type</label>
                <select id='type'>
                    {typeOptions.map((type) => {
                       return <option key={type}>{type}</option>
                    })}
                </select>    
                <label for='size'>Unit Size</label>
                <select id='size'>
                    {sizeOptions.map((size) => {
                        return <option key={size}>{size}</option>
                    })}
                </select>
                <label for='role'>Unit role</label>
                <select id='role'>
                    {roleOptions.map((role) => {
                        return <option key={role}>{role}</option>
                    })}
                </select>
            </form>
        </div>
    )
}
