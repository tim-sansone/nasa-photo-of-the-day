import React from "react";

function Title({ data }){

return (
    <>
        <h2>{data.date}</h2>
        <h3>{data.title}</h3>
    </>
)

}


export default Title;