import React from 'react';
type iconType = {
    isClicked?: boolean
}
const StatIcon: React.FC<iconType> = ({ isClicked }) => {
    return (
        <span style={{
            width: "1.25em",
            color: "var(--grey-3)",
            height: "1.25em",
            position: "relative",
            fill: isClicked ? "blue" : "currentcolor",
            display: "inline-block",
        }}>
            <svg viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                    width: "100%",
                    height: "100%",
                    display: "inline-block",
                }}>

                <g>
                    {isClicked ? <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path> : <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>}

                </g>

            </svg>
        </span>
    )



}



export default StatIcon