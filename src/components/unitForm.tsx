import React from "react";
import { Unit } from "../types/Unit";
import { UnitRoles } from "../types/UnitRole";
import { UnitSizes } from "../types/UnitSize";
import { UnitTypes } from "../types/UnitType";

export function UnitForm(prop: Unit){
    const typeOptions = Object.values(UnitTypes);
    const roleOptions = Object.values(UnitRoles);
    const sizeOptions = Object.values(UnitSizes);

    return (
        <div>
            <form>
                <label htmlFor='unitName'>Unit Name</label>
                <input id='unitName' type='text'/>
                <label htmlFor='type'>Unit Type</label>
                <select id='type'>
                    {typeOptions.map((type) => {
                       return <option key={type}>{type}</option>
                    })}
                </select>    
                <label htmlFor='size'>Unit Size</label>
                <select id='size'>
                    {sizeOptions.map((size) => {
                        return <option key={size}>{size}</option>
                    })}
                </select>
                <label htmlFor='role'>Unit role</label>
                <select id='role'>
                    {roleOptions.map((role) => {
                        return <option key={role}>{role}</option>
                    })}
                </select>
            </form>
        </div>
    )
}
