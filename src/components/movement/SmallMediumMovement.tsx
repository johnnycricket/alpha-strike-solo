import { useState } from "react";
import { roll } from "../../services/DtwelveService";
import OrderService from "../../services/OrderService";
import { LightMediumMovement } from "../../types/LightMediumMovment";

const SmallMediumMovement = () => {
    const [tableObj, setTableObj] = useState({});
    const [result, setResult] = useState(0);
    const [currOrder, setOrder] = useState({});

    const rollInstruction = () => {
        const result:number = roll();
        setResult(result);
        OrderService.pickOrder(result, LightMediumMovement);
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