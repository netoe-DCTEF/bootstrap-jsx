import React from "react";

export const BSCard = (title,buttonTitle,text,imageSRC,width,height)=>
{
    if(height == undefined && width == undefined)
    {
        height = width = 1;
    }

    if(!(parseFloat(width) > 0) && !(parseFloat(height) < 0))
    {
        console.error("You must define a valid height or width to use the BSCard react's component.");
        return (<h1>ERROR ON BSCARD!</h1>); 
    }

    return
    (
        <div class="card" style={"width:" + width.toString() + "em; height:" + height.toString() + "em;"}>
        <img src={imageSRC.toString()} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{title.toString()}</h5>
            <p class="card-text">{text.toString()}</p>
            <a href="#" class="btn btn-primary">{buttonTitle.toString()}</a>
        </div>
        </div>
    );
}