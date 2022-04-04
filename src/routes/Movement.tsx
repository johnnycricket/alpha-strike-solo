import { useState } from "react";
import { LightMediumMovement } from "../types/LightMediumMovment";
import { HeavyAssaultMovement as HeavyAssaultMovementType } from "../types/HeavyAssaultMovement";
import { MissileSniperMovement as MissileSniperMovementType } from "../types/MissileSniperMovement";
import { MeleeMovement as MeleeMovementType } from "../types/MeleeMovement";
import MovementContainer from "../components/movement/MovementContainer";

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
        <div>
            <section>
                <h1>Movement</h1>
            </section>
            <section>
                {showMoveKinds && (
                    <div>
                        <h2>What kind of unit is moving?</h2>
                        <button onClick={() => updateStage('SM')}>Small - Medium Unit</button>
                        <button onClick={() => updateStage('HA')}>Heavy - Assault Unit</button>
                        <button onClick={() => updateStage('MS')}>Missile Boat - Sniper Unit</button>
                        <button onClick={() => updateStage('Melee')}>Melee Unit</button>
                    </div>
                )}

                {showSM && 
                    <div>
                        <span className="closeIcon" onClick={() => updateStage()}>X</span>
                        <MovementContainer moveType={LightMediumMovement}/>
                    </div>
                }
                {showHA && 
                    <div>
                        <span className="closeIcon" onClick={() => updateStage()}>X</span>
                        <MovementContainer moveType={HeavyAssaultMovementType}/>
                    </div>
                }
                {showMS && 
                    <div>
                        <span className="closeIcon" onClick={() => updateStage()}>X</span>
                        <MovementContainer moveType={MissileSniperMovementType}/>
                    </div>
                }
                {showMelee && 
                    <div>
                        <span className="closeIcon" onClick={() => updateStage()}>X</span>
                        <MovementContainer moveType={MeleeMovementType}/>
                    </div>}
            </section>
        </div>
    )
}

export default Movement;
