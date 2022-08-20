import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../components/closeicon";
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
        <div className="attack">
            <section className="header">
                <sub>Alpha Strike Solo</sub>
                <h1>Attack</h1>
            </section>
            <nav>
                <Link className="back-link" data-testid="return-link" to="/">&lt; Dashboard</Link>
            </nav>
            <section className="content">
                {showDiceTypes && (
                    <div>
                        <div>
                            <p>Choose Dice Type</p>
                            <button className="button" onClick={() => updateStage('d12')}>D12</button>
                            <button className="button" onClick={() => updateStage('d6')}>2 D6</button>
                        </div>
                        <div>
                            <form>
                                <label htmlFor="variable-dice">
                                    <input 
                                        type="radio" 
                                        name="damageType"
                                        id="variable-dice"
                                        value="variable"
                                        onChange={e => handleDamageType(e)}
                                        defaultChecked
                                    />
                                    Variable Damage Dice
                                </label>
                                <label htmlFor="all">
                                    <input 
                                        type="radio"
                                        name="damageType"
                                        id="all"
                                        value="allornothing"
                                        onChange={e => handleDamageType(e)}
                                    />
                                    Single -all or nothing- Die
                                </label>
                            </form>
                        </div>
                    </div>
                )}
                {showDTwelve && (
                    <div className="overlay">
                        <span className="closeIcon" onClick={() => updateStage()}><CloseIcon/></span>
                        <DTwelveContainer damageDice={damageType} />
                    </div>
                )}
                {showTwoDSix && (
                    <div className="overlay">
                        <span className="closeIcon" onClick={() => updateStage()}><CloseIcon/></span>
                        <DSixContainer damageDice={damageType} />
                    </div>
                )}
            </section>
        </div>
    );
}

export default Attack;