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
            <span className="result-text">{props.result}</span>
        </div>
    )
}

DieResult.defaultProps = defaultProps;

export default DieResult;