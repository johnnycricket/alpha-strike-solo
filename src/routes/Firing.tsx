import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../components/closeicon";
import OrderContainer from "../components/orderContainer/OrderContainer";
import { FiringRules } from '../types/FiringRules';
import { MeleeRules } from "../types/MeleeRules";

const Firing = () => {
    const [showFiringKinds, setShowFiringKinds] = useState(true);
    const [showF, setShowF] = useState(false);
    const [showM, setShowM] = useState(false);
    
    const updateStage = (type?: string): void => {
        switch (type) {
            case 'F':
                setShowFiringKinds(false);
                setShowF(true);
                setShowM(false);
                break;
            case 'M':
                setShowFiringKinds(false);
                setShowF(false);
                setShowM(true);
                break;
            default:
                setShowFiringKinds(true);
                setShowF(false);
                setShowM(false);
        }
    }
    return (
        <div className="firing">
            <section className="header">
                <sub>Alpha Strike Solo</sub>
                <h1>Firing</h1>
            </section>
            <nav>
                <Link className="back-link" data-testid="return-link" to="/">&lt; Dashboard</Link>
            </nav>
            <section className="content">
                {showFiringKinds && (
                    <div>
                        <p>What kind of attack are you doing?</p>
                        <button className="button" onClick={() => updateStage('F')}>Ranged Attack</button>
                        <button className="button" onClick={() => updateStage('M')}>Melee Attack</button>
                    </div>
                )}

                {showF && 
                    <div className="overlay">
                        <span className="closeIcon" onClick={() => updateStage()}><CloseIcon /></span>
                        <OrderContainer orderType={FiringRules} orderTitle={'Unit Range Firing'} />
                    </div>
                }

                {showM &&
                    <div className="overlay">
                        <span className="closeIcon" onClick={() => updateStage()}><CloseIcon /></span>
                        <OrderContainer orderType={MeleeRules} orderTitle={'Unit Melee Strike'} />
                    </div>
                }
            </section>  
        </div>
    )
}

export default Firing;
