import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import Footer from './components/Footer';
import routes from './routes';

class App extends Component {
	render() {
		return (
			<div className="home page-template page-template-page-frontpage">
				<div id="wrapper" className="thb-page-transition-off">
					<Header />
          <MobileHeader />
					<div id="content-container">
						<BrowserRouter>{routes}</BrowserRouter>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
