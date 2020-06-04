import React from "react";

function Content(props){
  console.log(props);
    return (
      <p>
      {props.parts} {props.exercises}
    </p>
      );
}


export default Content;