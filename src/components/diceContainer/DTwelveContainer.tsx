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
                    <button>Roll</button>
                    {isDynamic && <form>
                        <input type="number" name="numberofdice" id="numberofdice" />
                        <label htmlFor="numberofdice">Number of Dice</label>
                    </form>}
                    <button>Roll</button>
                </div>
            </section>
            <section>
                <div>
                    <h2>Damage Type</h2>
                    <form>
                        <input type="radio" name="dynamic" id="dynamic" />
                        <label htmlFor="dynamic">Dynamic Damage</label>
                        <input type="radio" name="one" id="one" />
                        <label htmlFor="one">All In One</label>
                    </form>
                </div>
            </section>
            <section>
                 {hasRolls && <div></div>}
            </section>
        </div>
    )
};

export default DTwelveContainer;
