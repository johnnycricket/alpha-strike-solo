import { useState } from "react";
import { TwoDSix } from "../../services/DiceService";
import DieResult from "../dieResult";

interface D6Props {
    damageDice: String
}

const DSixContainer = (props:D6Props) => {
    const [hasRolls, setHasRolls] = useState<Boolean>(false);
    const [diceNumber, setDiceNumber ] = useState<number>(1);
    const [rollElements, setRollElements] = useState<JSX.Element[]>([]);

    const resetRollElements = ():void => {
        setRollElements([]);
    }

    const updateNumberOfDice = (e: any): void => {
        setDiceNumber(e.target.value);
    }

    const getRolls = ():void => {
        setHasRolls(false);
        resetRollElements();
        let result: number = 0;
        const elementArray = [];

        if(props.damageDice === 'variable'){
            for(let i = diceNumber; i > 0; i--) {
                const tup = TwoDSix();
                result = tup[0] + tup[1];
                elementArray.push(<DieResult result={result} isD12={false} key={i}/>)
            }
        } else {
            const tup = TwoDSix()
            result = tup[0] + tup[1];
            elementArray.push(<DieResult result={result} isD12={false}/>);
        }

        setRollElements(elementArray);
        setHasRolls(true);
    }

    return (
        <div className="twoDSixContainer">
            <section>
                <div>
                    <h2>2 D6</h2>
                    {props.damageDice === "variable" && <form>
                        <label htmlFor="numberofdice">Number of Dice</label>
                        <input 
                            className="button"
                            type="number" 
                            name="numberofdice" 
                            id="numberofdice" 
                            data-testid={'test-numberofdice'} 
                            value={diceNumber} 
                            onChange={e => updateNumberOfDice(e)}
                            />
                        
                    </form>}
                    <button className="button" onClick={() => getRolls()}>Roll</button>
                </div>
            </section>
            <section>
                {hasRolls && 
                    <div>
                        {rollElements}
                    </div>
                }    
            </section>
        </div>
    )
};

export default DSixContainer;