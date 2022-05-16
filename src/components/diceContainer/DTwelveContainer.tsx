import { useState } from "react";

interface D12Props {
    damageDice: String
}

const DTwelveContainer = (props:D12Props) => {
    const [isDynamic, setIsDynamic] = useState<Boolean>(true);
    const [hasRolls, setHasRolls] = useState<Boolean>(false);
    const [rolls, setRolls] = useState<Number[]>([]);
    const [rollElements, setRollElements] = useState<HTMLElement[]>([]);

    return (
        <div>
            <section>
                <div>
                    {isDynamic && <form>
                        <input type="number" name="numberofdice" id="numberofdice" />
                        <label htmlFor="numberofdice">Number of Dice</label>
                    </form>}
                    <button>Roll</button>
                </div>
            </section>
            <section>
                 {hasRolls && <div></div>}
            </section>
        </div>
    )
};

export default DTwelveContainer;
