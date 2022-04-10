import { useState } from "react";
import { roll } from "../../services/DtwelveService";
import OrderService from "../../services/OrderService";
import { TableInterface } from "../../types/TableInterface";

interface CT {
    moveType: TableInterface[];
    moveTitle: String;
}

const MovementComponent = (props: CT) => {
    const [currOrder, setOrder] = useState<TableInterface>({
        instruction: '',
        index: 0
    });

    const rollInstruction = () => {
        const result:number = roll();
        setOrder(OrderService.pickOrder(result, props.moveType));
    }

    const shiftOrder = () => {
        const currIndex = currOrder.index;
        setOrder(OrderService.shiftOrder(currIndex, props.moveType))
    }

    return (
        <div>
            <h2>{props.moveTitle}</h2>
            <button onClick={() => rollInstruction()}>Move</button>
            <section>
                {currOrder.instruction && 
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