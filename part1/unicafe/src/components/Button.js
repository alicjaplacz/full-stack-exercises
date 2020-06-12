import React from "react";

const Button = (props) => {
    return <button onClick={props.clicked}>{props.name}</button>
}

export default Button;