import { useState } from "react";
import { DTwelve } from "../../services/DiceService";
import OrderService from "../../services/OrderService";
import { TableInterface } from "../../types/TableInterface";

interface CT {
    orderType: TableInterface[];
    orderTitle: String;
}

const OrderContainer = (props: CT) => {
    const [currOrder, setOrder] = useState<TableInterface>({
        instruction: '',
        index: 0
    });

    const rollInstruction = () => {
        const result:number = DTwelve();
        setOrder(OrderService.pickOrder(result, props.orderType));
    }

    const shiftOrder = () => {
        const currIndex = currOrder.index;
        setOrder(OrderService.shiftOrder(currIndex, props.orderType))
    }

    return (
        <div className='ordercontainer'>
            <h2>{props.orderTitle}</h2>
            <button className="button" onClick={() => rollInstruction()}>Move</button>
            <section>
                {currOrder.instruction && 
                    <div>
                        <p data-testid="instruction-p">{currOrder.instruction}</p>
                    </div>}
                {currOrder.index > 0 && currOrder.shift !== 'o' &&
                   <div className="alternateoptions">
                        <sub>If that doesn’t work, there’s an:</sub>
                        <button data-testid="shift-button" className="button" onClick={() => shiftOrder()}>Alternate Option</button>
                   </div>}
            </section>
        </div>
    )
}

export default OrderContainer;