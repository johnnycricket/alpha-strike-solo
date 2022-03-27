import { TableInterface } from "../types/TableInterface"

export default class OrderService {
    static checkRange(result: number, order: TableInterface):boolean {
        let returned: boolean = false;
        
        if(order.range) {
            order.range.map(value => {
                if(value === result){
                    returned = true;
                    return returned;
                }
                return returned;
            });
        }
        
        return returned;
    }

    static pickOrder(result: number, orders: TableInterface[]): Object {
        let picked = Object.assign({});
        let match: boolean;

        orders.forEach((value, id, array) => {
            if(value.range){
                match = this.checkRange(result, value);
            }
            if(match){
                picked = Object.assign({}, picked, array[id])
            }
        })    
        return picked;        
    }

    static shiftOrder(currentIndex: number, table: TableInterface[]): Object {
        let currOrder = table[currentIndex]
        if(currOrder.shift === 'o'){
            return currOrder;
        }
        if(currOrder.shift === '+'){
            const toShift: number = currentIndex + 1;
            return table[toShift];
        }
        if(currOrder.shift === '-'){
            const toShift: number = currentIndex - 1;
            return table[toShift]
        }
        return table[currentIndex];
    }
}
