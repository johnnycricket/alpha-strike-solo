import OrderContainer from '../components/orderContainer/OrderContainer';
import { TargetingRules } from '../types/TargetingRules';

const Targeting = () => {
    
    return (
        <div>
            <section>
                <h1>Targeting</h1>
            </section>
            <section>
                <div>
                    <OrderContainer orderType={TargetingRules} orderTitle={'Unit Targeting'} />
                </div>
            </section>
        </div>
    )
}

export default Targeting;