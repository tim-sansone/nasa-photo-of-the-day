import React from 'react';

function Image({ data }){


// if (data.hdurl === undefined) return <h3>Loading</h3>

return (
    <div className="img-container">
          <img src={data.hdurl} alt={data.title} />
    </div>
)

}


export default Image;