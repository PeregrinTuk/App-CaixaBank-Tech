import React from "react";

export default function Box({box_size, title, ...props}){
    let contents;
    switch (box_size) {
        case "box_size_S":
            contents =  <React.Fragment>
                            <h4>{title}</h4>
                            {props.children}
                        </React.Fragment>;
            break;
            
        case "box_size_L":
            contents =  <React.Fragment>
                        </React.Fragment>;
            break;
            
        case "box_size_XL":
            contents =  <React.Fragment>
                        </React.Fragment>;
            break;
            
        default:
            break;
    }
    

    return(
        <div className={`Box ${box_size}`}>
            {contents}
        </div>
    );
}