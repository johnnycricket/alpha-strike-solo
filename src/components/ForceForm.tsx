import React from "react";
import { Force } from "../types/Force";
import { Unit } from "../types/Unit";

export function ForceForm(prop: Force) {
    return (
        <div>
            <form>
                <label htmlFor='forceName'>Force Name</label>
                <input id='forceName' type='text'/>
            </form>
        </div>
    )
}