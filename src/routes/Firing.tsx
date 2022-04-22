import OrderContainer from "../components/orderContainer/OrderContainer";
import { FiringRules } from '../types/FiringRules';

const Firing = () => {
    return (
        <div>
            <section>
                <div>
                    <h1>Firing</h1>
                </div>
            </section>
            <section>
                <OrderContainer orderType={FiringRules} orderTitle={'Unit Firing'} />
            </section>  
        </div>
    )
}

export default Firing;
