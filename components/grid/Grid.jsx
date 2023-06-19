import React from "react";
import './Grid.css';

export const RowContainer = ()=>
{  
    return (
    <div className="row">
        
    </div>  
    );
};

export const ColContainer = (len)=>
{
    return (
        <div className={"col-" + len.toString()}>

        </div>
    );
};