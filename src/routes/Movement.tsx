import { useState } from "react";
import { LightMediumMovement } from "../types/LightMediumMovment";
import { HeavyAssaultMovement as HeavyAssaultMovementType } from "../types/HeavyAssaultMovement";
import { MissileSniperMovement as MissileSniperMovementType } from "../types/MissileSniperMovement";
import { MeleeMovement as MeleeMovementType } from "../types/MeleeMovement";
import OrderContainer from "../components/orderContainer/OrderContainer";
import CloseIcon from "../components/closeicon";
import { Link } from "react-router-dom";

const Movement = () => {
    const [showMoveKinds, setShowMoveKinds] = useState(true);
    const [showSM, setShowSM] = useState(false);
    const [showHA, setShowHA] = useState(false);
    const [showMS, setShowMS] = useState(false);
    const [showMelee, setShowMelee] = useState(false);

    const updateStage = (type?: String): void => {
        switch (type) {
            case 'SM': 
                setShowMoveKinds(false);
                setShowSM(true);
                setShowHA(false);
                setShowMS(false);
                setShowMelee(false);
                break;
            case 'HA':
                setShowMoveKinds(false);
                setShowSM(false);
                setShowHA(true);
                setShowMS(false);
                setShowMelee(false);
                break;
            case 'MS':
                setShowMoveKinds(false);
                setShowSM(false);
                setShowHA(false);
                setShowMS(true);
                setShowMelee(false);
                break;
            case 'Melee':
                setShowMoveKinds(false);
                setShowSM(false);
                setShowHA(false);
                setShowMS(false);
                setShowMelee(true);
                break;  
            default:
                setShowMoveKinds(true);
                setShowSM(false);
                setShowHA(false);
                setShowMS(false);
                setShowMelee(false);
        }
    }

    return (
        <div className="movement">
            <section className="header">
                <sub>Alpha Strike Solo</sub>
                <h1>Movement</h1>
            </section>
            <nav>
                <Link className="back-link" data-testid="return-link" to="/">&lt; Dashboard</Link>
            </nav>
            <section className="content">
                {showMoveKinds && (
                    <div>
                        <p>What kind of unit is moving?</p>
                        <button className="button" onClick={() => updateStage('SM')}>Small - Medium Unit</button>
                        <button className="button" onClick={() => updateStage('HA')}>Heavy - Assault Unit</button>
                        <button className="button" onClick={() => updateStage('MS')}>Missile Boat - Sniper Unit</button>
                        <button className="button" onClick={() => updateStage('Melee')}>Melee Unit</button>
                    </div>
                )}

                {showSM && 
                    <div className="overlay">
                        <span className="closeIcon" onClick={() => updateStage()}><CloseIcon /></span>
                        <OrderContainer orderType={LightMediumMovement} orderTitle={"Small & Medium Unit Movement"}/>
                    </div>
                }
                {showHA && 
                    <div className="overlay">
                        <span className="closeIcon" onClick={() => updateStage()}><CloseIcon /></span>
                        <OrderContainer orderType={HeavyAssaultMovementType} orderTitle={"Heavy & Assault Unit Movement"}/>
                    </div>
                }
                {showMS && 
                    <div className="overlay">
                        <span className="closeIcon" onClick={() => updateStage()}><CloseIcon /></span>
                        <OrderContainer orderType={MissileSniperMovementType} orderTitle={"Missile & Sniper Unit Movement"}/>
                    </div>
                }
                {showMelee && 
                    <div className="overlay">
                        <span className="closeIcon" onClick={() => updateStage()}><CloseIcon /></span>
                        <OrderContainer orderType={MeleeMovementType} orderTitle={'Melee Unit Movement'}/>
                    </div>}
            </section>
        </div>
    )
}

export default Movement;
