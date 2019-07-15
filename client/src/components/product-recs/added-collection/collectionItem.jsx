import React from 'react';

const CollectionItem = ({ image }) => {
  // console.log(`CollectionItem(props): ${Object.keys(props)}`)
  // console.log('Name:', name, '||  imgURL', imgURL);
  console.log('CollectionItem(image):', image);
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