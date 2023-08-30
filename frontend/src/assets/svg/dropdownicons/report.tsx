import React from 'react';
type iconType = {
    isClicked?: boolean
}
const ReportIcon: React.FC<iconType> = ({ isClicked }) => {
    return (
        <span style={{
            width: "19px",
            height: "19px",
            // color: " rgba(231,233,234,1.00)",
            color: "var(--dark-1)",
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
                    <path d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"></path>
                </g>
            </svg>
        </span>
    )



}



export default ReportIcon