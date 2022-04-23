import { useState } from "react";

const Attack = () => {
    const [showDiceTypes, setShowDiceTypes] = useState(true);
    const [showDTwelve, setShowDTwelve] = useState(false);
    const [showTwoDSix, setShowTwoDSix] = useState(false);
    return (
        <div>
            <section>
                <div>
                    <h1>Attack</h1>
                </div>
            </section>
            <section>
                <div>

                </div>
            </section>
        </div>
    );
}

export default Attack;