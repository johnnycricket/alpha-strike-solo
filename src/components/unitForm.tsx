import React from "react";

interface unitProps {
    unitName: String,
    pointValue: Number,
    unitType: String,
    unitSize: String,
    unitRole: String
}

<div>
    <form>
        <label for='unitName'>Unit Name</label>
        <input id='unitName' type='text'></input>
        <label for='pointValue'>Unit Point Value</label>
        <input id='pointValue' type='number'></input>
        <label for='type'>Unit Type</label>
        <select id='type'></select>    
        <label for='size'>Unit Size</label>
        <select id='size'></select>
        <label for='role'>Unit role</label>
        <select id='role'></select>
    </form>
</div>