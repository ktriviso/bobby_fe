import React from 'react';

const Banner = () => {
	return (
		<section className="podcast">
			<div className="podcast-wrapper">
				<div className="img-wrapper">
					<a>
						<img
							width="460"
							height="460"
							src="https://placeimg.com/1440/960/any"
							className="attachment-podcast-thumb size-podcast-thumb thb-lazyload lazyload"
							alt=""
							sizes="(max-width: 460px) 100vw, 460px"
							data-sizes="auto"
						/>{' '}
					</a>
				</div>
				<div className="entry-container">
					<div className="entry-wrapper">
						<div className="title-wrapper">
							<a className="entry-title">
								Adella
							</a>
						</div>
						<div className="text-wrapper">
							<p className="entry-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
						<div className="seasons-wrapper">
							<a className="season-button" href="/about">
								About
							</a>
							<a className="season-button" href="/menu">
								Menu
							</a>
							<a className="season-button" href="/events">
								Events
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
