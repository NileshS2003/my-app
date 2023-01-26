import React from "react";

export default function Alert(props) {
    // let alert
    // if (props.mode==="light") {
    //     alert='Light mode enabled'
    // }
    // if (props.mode==="dark") {
    //     alert='Dark mode enabled'
    // }
    
  return (
    props.alert && <div>
      <div className="alert alert-warning" role="alert">
        {props.alert}
      </div>
    </div>
  );
}
