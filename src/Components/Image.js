import React from 'react';

function Image({ imageURL, title }){


// if (data.hdurl === undefined) return <h3>Loading</h3>

return (
    <div className="img-container">
          <img src={imageURL} alt={title} />
    </div>
)

}


export default Image;