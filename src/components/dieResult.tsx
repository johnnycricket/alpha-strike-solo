import DTwelve from "./dice/DTwelve";
import TwoDSix from "./dice/TwoDSix";

interface ResultProps {
    result: number;
    isD12?: boolean;
}

const DieResult = (props: ResultProps) => {
    return (
        <div className="die-result">
            {props.isD12 &&
                <DTwelve/>
            }
            {!props.isD12 && 
                <TwoDSix/>
            }
            <span className="result-text">
                {props.result}
            </span>
        </div>
    )
}

export default DieResult;