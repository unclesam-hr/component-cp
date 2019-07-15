import React from 'react';
import CollectionItem from './collectionItem.jsx';

export default class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          name: 'Auburn Sofa (70")',
          imgURL: 'https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/auburn-sofa-70-1-c.jpg'
        },
        {
          name: 'Auburn Bench',
          imgURL: 'https://storage.cloud.google.com/afucktonofchairs/scraped-imgs/auburn-bench-c.jpg'
        }
      ]
    }
    this.renderImages = this.renderImages.bind(this);
  }

componentDidMount () {
  console.log('Collection attempting to mount...')
}

  renderImages() {
    return (
      <div className="scroller-container">
        {this.state.images.map((image, i) => {
          return (
            <CollectionItem image={image} key={`img_id_${i}`} />
          )
        })
        }
      </div>
    )
  }

  render() {
    return (
      <div className="collection" id="collection">
        <h2>Also in this Collection</h2>
        {this.state.images ? this.renderImages() : null}
      </div>
    )
  }
}