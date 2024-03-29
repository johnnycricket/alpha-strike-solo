import React from 'react';
import { useState } from "react";
import { DTwelve } from "../../services/DiceService";
import DieResult from "../dieResult";

interface D12Props {
    damageDice: string
}

const DTwelveContainer = (props:D12Props) => {
    const [hasRolls, setHasRolls] = useState<boolean>(false);
    const [diceNumber, setDiceNumber] = useState<number>(1);
    const [rollElements, setRollElements] = useState<JSX.Element[]>([]);

    const resetRollElements = (): void => {
        setRollElements([]);
    }

    const updateNumberOfDice = (e: any): void => {
        setDiceNumber(e.target.value);
    }

    const getRolls = (): void => {
        setHasRolls(false);
        resetRollElements();
        let result = 0;
        const elementArray = [];

        if(props.damageDice === 'variable'){
            for(let i = diceNumber; i > 0; i--) {
                result = DTwelve();
                elementArray.push(<DieResult result={result} isD12={true} key={i}/>);
            }
        } else {
            result = DTwelve();
            elementArray.push(<DieResult result={result} isD12={true} key={0}/>);
        }

        setRollElements(elementArray);
        setHasRolls(true);
    }

    return (
        <div className="dTwelveContainer">
            <section>
                <div>
                    <h2>D12</h2>
                    {props.damageDice === "variable" && <form>
                        <input
                            className="button" 
                            type="number" 
                            name="numberofdice" 
                            id="numberofdice" 
                            data-testid={'test-numberofdice'} 
                            value={diceNumber} 
                            onChange={e => updateNumberOfDice(e)}
                            />
                        <label htmlFor="numberofdice">Number of Dice</label>
                    </form>}
                    <button className="button" onClick={() => getRolls()}>Roll</button>
                </div>
            </section>
            <section>
                {hasRolls && 
                    <div className="die-results">
                        {rollElements}
                    </div>
                }    
            </section>
        </div>
    )
};

export default DTwelveContainer;
