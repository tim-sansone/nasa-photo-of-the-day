import React from "react";

function Info({ data }){

return (
    <>
        <p><strong>Image Credit & Copyright:</strong> {data.copyright}</p>
        <p><strong>Explanation:</strong> {data.explanation}</p>
    </>
)

}


export default Info