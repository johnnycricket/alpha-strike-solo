import { useState } from "react";
import { roll } from "../../services/DtwelveService";
import { LightMediumMovement } from "../../types/LightMediumMovment";

const SmallMediumMovement = () => {
    const [tableObj, setTableObj] = useState({})
    const [result, setResult] = useState(0)

    const rollInstruction = () => {
        const result:number = roll();
        setResult(result);
    }
    return (
        <div>
            <button onClick={() => rollInstruction()}>Move</button>
            <section>
                {}
            </section>
        </div>
    )
}

export default SmallMediumMovement;