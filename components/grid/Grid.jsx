import React from "react";
export const BSRowContainer = ()=>
{  
    return (
    <div className="row">
        
    </div>  
    );
};

export const BSColContainer = (len)=>
{

    if(len < 1|| len > 12){
        console.error("Invalid number for JSXLEN:ColContainer.\nInsert a number between 1 and 12");
        return null;
    }
    return (
        <div className={"col-" + len.toString()}>
        </div>
    );
};