import { roll } from "../../services/DtwelveService";

const SmallMediumMovement = () => {
    const getRoll = () => {
        const result = roll();

        
    }
    return (
        <div>
            <button onClick={() => getRoll()}>Move</button>
            <section>
                
            </section>
        </div>
    )
}

export default SmallMediumMovement;