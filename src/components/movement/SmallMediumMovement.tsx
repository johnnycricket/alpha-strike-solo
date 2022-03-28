import { useState } from "react";
import { roll } from "../../services/DtwelveService";
import OrderService from "../../services/OrderService";
import { LightMediumMovement } from "../../types/LightMediumMovment";
import { TableInterface } from "../../types/TableInterface";

const SmallMediumMovement = () => {
    const [tableObj, setTableObj] = useState({});
    const [result, setResult] = useState(0);
    const [currOrder, setOrder] = useState<TableInterface>({
        instruction: '',
        index: 0
    });

    const rollInstruction = () => {
        const result:number = roll();
        setResult(result);
        setOrder(OrderService.pickOrder(result, LightMediumMovement));
    }

    const shiftOrder = () => {
        const currIndex = currOrder.index;
        setOrder(OrderService.shiftOrder(currIndex, LightMediumMovement))
    }

    return (
        <div>
            <button onClick={() => rollInstruction()}>Move</button>
            <section>
                {currOrder.instruction.length > 0 && 
                    <div>
                        <h3>Instruction</h3>
                        <p>{currOrder.instruction}</p>
                    </div>}
                {currOrder.index > 0 && currOrder.shift !== 'o' &&
                    <button onClick={() => shiftOrder()}>This order doesn't work. Try another.</button>}
            </section>
        </div>
    )
}

export default SmallMediumMovement;