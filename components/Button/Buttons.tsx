const __TYPEOFBUTTONS = [
    "success",
    "warning",
    "danger",
    "secondary",
    "primary",
    "info",
    "light",
    "dark"
];

const __HTML_TYPEOFBTN = 
[
    "submit",
    "reset",
    "button",
];

const COL_MAX_VALUE :number = 12 ;

export function verifyValidButtons(type:string) :boolean {
    let i;
    for(i = 0; i < __TYPEOFBUTTONS.length; i++)
    {
        if(type == __TYPEOFBUTTONS[i])
        {
            return true;
        }
    }    

    return false;
}

export function verifyValidSize(size:number) :boolean 
{
    if(size <= COL_MAX_VALUE && size > 0){
        return true;
    }
    return false;
}

export function verifyValidTypeHtml(type:string) : boolean 
{
    for(let i = 0; i < __TYPEOFBUTTONS.length; i++)
    {
        if(type == __HTML_TYPEOFBTN[i])
        {
            return true;
        }
    } 
    return false;
}
