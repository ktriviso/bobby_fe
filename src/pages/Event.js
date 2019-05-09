import React, { Component } from 'react';
import Highlight from '../components/Highlight';
import Events from '../components/Events';
import Social from '../components/Social';
import SmallBanner from '../components/SmallBanner';

class Event extends Component {
	render() {
		return (
			<div className="cf">
				<SmallBanner/>
				<Events />
				<Highlight />
				<Social />
			</div>
		);
	}
}

export default Event;
