import React from 'react';
import Footer from './footer.jsx';

class FooterContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
		return (
			<div className="footer-container" id="footer-container">
				<Footer />
			</div>
		)
	}
}

export default FooterContainer;