import React, { Component } from 'react';
import SmallSlider from '../components/SmallSlider';
import Highlight from '../components/Highlight';
import Banner from '../components/Banner';
import Events from '../components/Events';
import Social from '../components/Social';
import MenuSlider from '../components/MenuSlider';
import Slider from '../components/Slider';

class Home extends Component {
	render() {
		return (
			<div className="cf">
				<Slider />
				<MenuSlider />
				<Banner />
				<SmallSlider />
				<Social />
				<Highlight />
				<Events />
			</div>
		);
	}
}

export default Home;
