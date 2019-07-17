import React from 'react';

const CollectionItem = ({ image }) => {
  var { name, imgURL } = image;
  return (
    <div className="collectionItem" id="collectionItem">
      <span><img src={imgURL} alt={name} />
        <p>
          {name}
        </p>
      </span>

    </div>
  )
}

export default CollectionItem;