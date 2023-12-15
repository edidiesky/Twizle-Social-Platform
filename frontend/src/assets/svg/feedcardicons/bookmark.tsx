import React from 'react';
type iconType = {
    isClicked?: boolean,
    type?: string,
    color?: string,
    size?: string,
}
const BookmarkIcon: React.FC<iconType> = ({ isClicked, type, color, size }) => {


    return (
        <span style={{
            width: size ? size : "1.8rem",
            color: color ? color : "var(--grey-1)",
            height: size ? size : "1.8rem",
            position: "relative",
            fill: isClicked ? 'var(--blue-1)' : "currentcolor",
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
                    {isClicked ? <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path> :
                        <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                    }

                </g>

            </svg>
        </span>
    )


}



export default BookmarkIcon