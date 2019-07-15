import React from 'react';
import RelatedProducts from './related-products.jsx';
import RelatedSearches from './related-searches.jsx';

class RelatedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      searches: []
    }
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.getRelatedSearches = this.getRelatedSearches.bind(this);
  }

  componentDidMount() {
    console.log('Related Products mounting...');
    this.getRelatedProducts();
    console.log('Related Searches mounting...');
    this.getRelatedSearches();
  }

  getRelatedProducts() {
    // non-API method
    var products = [
      {
        name: 'Crosby Mid-Century Armchair',
        imgURL: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201922/0228/crosby-mid-century-armchair-m.jpg',
        url: '',
        desc: ''
      },
      {
        name: 'Finley Lounge Chair',
        imgURL: 'https://www.westelm.com/weimgs/rk/images/wcm/products/201921/0015/finley-lounge-chair-m.jpg',
        url: '',
        desc: ''
      },
      {
        name: 'Janie Slipper Chair',
        imgURL: 'https://www.westelm.com/weimgs/ab/images/wcm/products/201923/0014/janie-slipper-chair-m.jpg',
        url: '',
        desc: ''
      }
    ]
    this.setState({
      products: products
    }, () => console.log('getRelatedProducts', this.state.products))
  }

  getRelatedSearches() {
    // non-API method
    var searches = [
      {
        name: 'natural leather austin armchair',
        url: '',
      },
      {
        name: 'hanna chair',
        url: '',
      },
      {
        name: 'phoebe chair',
        url: '',
      },
      {
        name: 'upholstery swivel chair',
        url: '',
      },
      {
        name: 'sloane chair',
        url: '',
      },
      {
        name: 'gray wood furniture',
        url: '',
      },
      {
        name: 'wood chair',
        url: '',
      } // 7
    ]
    this.setState({
      searches: searches
    }, () => console.log('getRelatedSearches', this.state.searches))
  }


  mapDataSearches() {
    console.log('MDS invoked');
    return (
      <div className="br-related-searches-widget">
        <div className="br-related-heading">
          Related Searches
        </div>
        <ul className="br-related-searches">
          {this.state.searches.map((item, i) => {
            return (
              <RelatedSearches name={item.name} url={item.url} key={i} len={this.state.searches.length} />
            )
          })
          }
        </ul>
      </div>
    )
  }

  mapDataProducts() { // unfinished
    console.log('MDP invoked');
    return (
      <div id="more-products-widget">
        <div id="br-more-results-widget" >
          <div className="br-more-heading">
            Related Products
            </div>
          <ul className="panel">
            {this.state.products.map((product, i) => {
              var { name, imgURL, url, desc } = product;
              return (
                <RelatedProducts name={name} imgURL={imgURL} url={url} desc={desc} key={i} />
              )
            })
            }
          </ul>
        </div>
      </div>
    )
  }

  render() {

    return (
      <section id="related-queries">
        <div className="custombox-side" id="custombox-side">
          {this.state.searches ? this.mapDataSearches() : null}
          {this.state.products ? this.mapDataProducts() : null}
        </div>
      </section>
    )
  }
}

export default RelatedContainer;