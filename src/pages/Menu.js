import React, { Component } from 'react';
import MenuSlider from '../components/MenuSlider';
import Social from '../components/Social';
import SmallBanner from '../components/SmallBanner';

class Menu extends Component {
	render() {
		return (
			<div className="cf">
				<SmallBanner/>
				<MenuSlider/>
				<Social />
			</div>
		);
	}
}

export default Menu;
