import React, { Component } from 'react';
import SmallSlider from '../components/SmallSlider';
import Highlight from '../components/Highlight';
import Social from '../components/Social';
import SmallBanner from '../components/SmallBanner';
import Map from '../components/Map';

class About extends Component {
	render() {
		return (
			<div className="cf">
				<SmallBanner />
				<div className="map-container">
					<Map />
					<section className="latest latest-posts about-content-wrapper">
						<p className="small-uppercase">Lorem ipsum </p>
						<p className="entry-title">Lorem ipsum </p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</section>
				</div>
				<SmallSlider />
				<Highlight />
				<Social />
			</div>
		);
	}
}

export default About;
