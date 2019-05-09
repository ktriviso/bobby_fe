import React from 'react';
import Map from '../components/Map';
import Contact from '../components/Contact';
import Social from '../components/Social';
import $ from 'jquery';
import HomepageSlider from './HomepageSlider';

export default class Splash extends React.Component {
	componentDidMount() {
		$('body, html').animate({
			scrollTop: 0
		});
	}

	render() {
		return (
			<div>
				<HomepageSlider />
				<Social/>
				<div className="map-container">
					<Map />
					<Contact />
				</div>
				
			</div>
		);
	}
}
