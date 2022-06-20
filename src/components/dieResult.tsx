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
            {props.isD12 && (
                <svg data-testid="dtwelve-svg" width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Polygon 1" d="M41.5529 13.4077L80 3.10583L118.447 13.4077L146.592 41.5529L156.894 80L146.592 118.447L118.447 146.592L80 156.894L41.5529 146.592L13.4077 118.447L3.10583 80L13.4077 41.5529L41.5529 13.4077Z" stroke="black" strokeWidth="6"/>
                </svg>
            )}
            {!props.isD12 && (
                <svg data-testid="dsix-svg" width="129" height="130" viewBox="0 0 129 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="375" height="667" transform="translate(-60 -101)" fill="none" stroke="black" strokeWidth="6"/>
                </svg>
            )}
            
            <span>{props.result}</span>
        </div>
    )
}

DieResult.defaultProps = defaultProps;

export default DieResult;