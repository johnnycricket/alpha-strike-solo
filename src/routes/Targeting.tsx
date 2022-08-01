import { Link } from 'react-router-dom';
import OrderContainer from '../components/orderContainer/OrderContainer';
import { TargetingRules } from '../types/TargetingRules';

const Targeting = () => {
    
    return (
        <div className='targeting'>
            <section className='header'>
                <sub>Alpha Strike Solo</sub>
                <h1>Targeting</h1>
            </section>
            <nav>
                <Link data-testid="return-link" to="/">&lt; Dashboard</Link>
            </nav>
            <section className='content'>
                <div className="overlay">
                    <OrderContainer orderType={TargetingRules} orderTitle={'Unit Targeting'} />
                </div>
            </section>
        </div>
    )
}

export default Targeting;