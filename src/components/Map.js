import React from 'react';

export default class Map extends React.Component {
	render() {
		return (
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.57228818266!2d-73.99639868434006!3d40.74943604326086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ae2c4f96b5%3A0x6aa99319c88aca48!2s251+W+30th+St%2C+New+York%2C+NY+10001!5e0!3m2!1sen!2sus!4v1555988558323!5m2!1sen!2sus"
				id="location"
				title="google map"
				frameBorder="0"
				allowFullScreen
			>
				<a href="https://www.maps.ie/map-my-route/">Plot a route map</a>
			</iframe>
		);
	}
}
