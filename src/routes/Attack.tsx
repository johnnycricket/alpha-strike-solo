import React, { useState } from "react";
import DTwelveContainer from "../components/diceContainer/DTwelveContainer";
import DSixContainer from "../components/diceContainer/TwoDSixContainer";

const Attack = () => {
    const [showDiceTypes, setShowDiceTypes] = useState(true);
    const [showDTwelve, setShowDTwelve] = useState(false);
    const [showTwoDSix, setShowTwoDSix] = useState(false);
    const [damageType, setDamageType] = useState('variable');

    const updateStage = (type?: String): void => {
        switch (type) {
            case 'd12': 
                setShowDiceTypes(false);
                setShowDTwelve(true);
                setShowTwoDSix(false);
                break;
            case 'd6':
                setShowDiceTypes(false);
                setShowDTwelve(false);
                setShowTwoDSix(true);
                break;
            default:
                setShowDiceTypes(true);
                setShowDTwelve(false);
                setShowTwoDSix(false);
        }
    }

    const handleDamageType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDamageType(event.target.value);
    }
    
    return (
        <div>
            <section>
                <div>
                    <h1>Attack</h1>
                </div>
            </section>
            <section>
                {showDiceTypes && (
                    <div>
                        <div>
                            <h2>Choose Dice Type</h2>
                            <button onClick={() => updateStage('d12')}>D12</button>
                            <button onClick={() => updateStage('d6')}>2 D6</button>
                        </div>
                        <div>
                            <form onChange={(e) => handleDamageType(e)}>
                                <input type="radio" name="damageType" id="variable-dice" value="variable" defaultChecked/>
                                <label htmlFor="variable-dice">Variable Damage Dice</label>
                                <input type="radio" name="damageType" id="all" value="allornothing" />
                                <label htmlFor="all">Single -all or nothing- Die</label>
                            </form>
                        </div>
                    </div>
                )}
                {showDTwelve && (
                    <div>
                        <span className="closeIcon" onClick={() => updateStage()}>X</span>
                        <DTwelveContainer damageDice={damageType} />
                    </div>
                )}
                {showTwoDSix && (
                    <div>
                        <span className="closeIcon" onClick={() => updateStage()}>X</span>
                        <DSixContainer damageDice={damageType} />
                    </div>
                )}
            </section>
        </div>
    );
}

export default Attack;