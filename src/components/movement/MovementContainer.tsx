import { useState } from "react";
import { roll } from "../../services/DtwelveService";
import OrderService from "../../services/OrderService";
import { TableInterface } from "../../types/TableInterface";

interface CT {
    moveType: TableInterface[];
}

const MovementComponent = (props: CT) => {
    const [currResult, setResult] = useState(0);
    const [currOrder, setOrder] = useState<TableInterface>({
        instruction: '',
        index: 0
    });

    const rollInstruction = () => {
        const result:number = roll();
        setResult(result);
        setOrder(OrderService.pickOrder(currResult, props.moveType));
    }

    const shiftOrder = () => {
        const currIndex = currOrder.index;
        setOrder(OrderService.shiftOrder(currIndex, props.moveType))
    }

    return (
        <div>
            <button onClick={() => rollInstruction()}>Move</button>
            <section>
                {currOrder.instruction.length > 0 && 
                    <div>
                        <h3>Instruction</h3>
                        <p data-testid="instruction-p">{currOrder.instruction}</p>
                    </div>}
                {currOrder.index > 0 && currOrder.shift !== 'o' &&
                    <button data-testid="shift-button" onClick={() => shiftOrder()}>This order doesn't work. Try another.</button>}
            </section>
        </div>
    )
}

export default MovementComponent;