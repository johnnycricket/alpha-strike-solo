const CloseIcon = () => {
    return (
        <>
            <svg data-testid="close-icon" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_23_79)">
                    <circle cx="19.5" cy="17.5" r="17.5" fill="#FCFCFC" />
                    <circle cx="19.5" cy="17.5" r="17" stroke="#222222" />
                </g>
                <line x1="13.8978" y1="23.9826" x2="25.8978" y2="10.9826" stroke="black" strokeWidth="3" />
                <line x1="13.827" y1="11.2061" x2="26.0816" y2="23.9608" stroke="black" strokeWidth="3" />
                <defs>
                    <filter id="filter0_d_23_79" x="0" y="0" width="39" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_79" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_79" result="shape" />
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default CloseIcon