import React from "react";

export default function Paragraph({title, body}){
    return(
        <React.Fragment>
            <h3 className="P-title">{title}</h3>
            <p className="P-body">{body}</p>
        </React.Fragment>
    );
}