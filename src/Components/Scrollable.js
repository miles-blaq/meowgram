import React from 'react'
// scroll component

const scroll = {
    overflowY: "scroll",
    border: "1px solid black",
    height:"500px"
}
const Scrollable = (props) => {
    return (
        <div style={scroll}>
            {props.children}
        </div>
    )
}

export default Scrollable
