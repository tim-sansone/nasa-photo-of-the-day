import React from "react";

function Info({ copyright, explanation }){

return (
    <>
        <p><strong>Image Credit & Copyright:</strong> {copyright}</p>
        <p><strong>Explanation:</strong> {explanation}</p>
    </>
)

}


export default Info