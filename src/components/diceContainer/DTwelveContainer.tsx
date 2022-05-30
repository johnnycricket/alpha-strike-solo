import { useState } from "react";
import { DTwelve } from "../../services/DiceService";

interface D12Props {
    damageDice: String
}

const DTwelveContainer = (props:D12Props) => {
    const [hasRolls, setHasRolls] = useState<Boolean>(false);
    const [rolls, setRolls] = useState<Number[]>([]);
    const [rollElements, setRollElements] = useState<HTMLElement[]>([]);

    const getRolls = (Number: toRoll): void => {
        
    }

    return (
        <div>
            <section>
                <div>
                    {props.damageDice === "variable" && <form>
                        <input type="number" name="numberofdice" id="numberofdice" />
                        <label htmlFor="numberofdice">Number of Dice</label>
                    </form>}
                    <button onClick={() => getRolls()}>Roll</button>
                </div>
            </section>
            <section>
                 {hasRolls && <div></div>}
            </section>
        </div>
    )
};

export default DTwelveContainer;
