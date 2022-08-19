import DTwelve from "./dice/DTwelve";
import TwoDSix from "./dice/TwoDSix";

interface ResultProps {
    result: Number,
    isD12?: boolean
}

const defaultProps: ResultProps = {
    result: 0,
    isD12: false
}

const DieResult = (props: ResultProps) => {
    return (
        <div>
            {props.isD12 && 
                <DTwelve/>
            }
            {!props.isD12 && 
                <TwoDSix/>
            }
            <span className="result-text">{props.result}</span>
        </div>
    )
}

DieResult.defaultProps = defaultProps;

export default DieResult;