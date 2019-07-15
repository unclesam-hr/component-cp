import React from 'react';
import ProductContainer from './components/product-recs/product-container.jsx';
import BoilerPlate from './components/boiler-plate/index.jsx';
import RelatedContainer from './components/product-related/related.jsx';
import FooterContainer from './components/footer/index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  // ProductContainer->SectionHeader->Carousel
  // Footer->FooterLinkList(4x)->FooterLink or Footer->FooterLinkList

  render() {
    return (
    <div className="components-cp" id="components-cp">
      <ProductContainer />
      <BoilerPlate />
      <RelatedContainer />
      <FooterContainer />
    </div>
    )
  }
}


export default App;