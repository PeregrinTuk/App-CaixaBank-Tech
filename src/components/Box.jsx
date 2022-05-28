import React from "react";

export default function Box(props){
    return(
        <div className="Box">
            <h4>{props.title}</h4>
            {props.children}
        </div>
    );
}