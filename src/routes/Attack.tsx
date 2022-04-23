import { useState } from "react";

const Attack = () => {
    const [showDiceTypes, setShowDiceTypes] = useState(true);
    const [showDTwelve, setShowDTwelve] = useState(false);
    const [showTwoDSix, setShowTwoDSix] = useState(false);

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
                            <form action="">
                                <input type="radio" name="variable" id="variable-dice" />
                                <input type="radio" name="allornothing" id="all" />
                            </form>
                        </div>
                    </div>
                )}
                {showDTwelve && (
                    <div>
                        <span className="closeIcon" onClick={() => updateStage()}>X</span>
                    </div>
                )}
                {showTwoDSix && (
                    <div>
                        <span className="closeIcon" onClick={() => updateStage()}>X</span>
                    </div>
                )}
            </section>
        </div>
    );
}

export default Attack;