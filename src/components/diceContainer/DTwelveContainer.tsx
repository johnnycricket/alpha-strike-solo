import { useState } from "react";
import { DTwelve } from "../../services/DiceService";
import DieResult from "../dieResult";

interface D12Props {
    damageDice: String
}

const DTwelveContainer = (props:D12Props) => {
    const [hasRolls, setHasRolls] = useState<Boolean>(false);
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
        let result: number = 0;
        const elementArray = [];

        if(props.damageDice === 'variable'){
            for(let i = diceNumber; i > 0; i--) {
                result = DTwelve();
                elementArray.push(<DieResult result={result} isD12={true} key={i}/>);
            }
        } else {
            result = DTwelve();
            elementArray.push(<DieResult result={result} isD12={true}/>);
        }

        setHasRolls(true);
        setRollElements(elementArray);
    }

    return (
        <div>
            <section>
                <div>
                    {props.damageDice === "variable" && <form>
                        <input 
                            type="number" 
                            name="numberofdice" 
                            id="numberofdice" 
                            data-testid={'test-numberofdice'} 
                            value={diceNumber} 
                            onChange={e => updateNumberOfDice(e)}
                            />
                        <label htmlFor="numberofdice">Number of Dice</label>
                    </form>}
                    <button onClick={() => getRolls()}>Roll</button>
                </div>
            </section>
            <section>
                 {hasRolls && 
                    <div>
                        {rollElements}
                    </div>}
                    
            </section>
        </div>
    )
};

export default DTwelveContainer;
