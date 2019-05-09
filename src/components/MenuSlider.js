import React from 'react';

const MenuSlider = () => {
	const sliderItems = [ 1, 2, 3, 4, 5 ];
	return (
		<section className="latest latest-posts">
			<div className="latest-wrapper">
				<p className="small-uppercase">Check out our menu</p>
				<div className="paginator-container flex">
					<div className="prev latest-prev arrow-svg">
						<svg
							version="1.1"
							id="Lag_1"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 27 27"
						>
							<g id="button">
								<path
									id="circle"
									className="st0"
									d="M13.5,0.5c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S20.7,0.5,13.5,0.5z M1.5,13.5
		c0-6.2,4.8-11.4,10.8-11.9c0.4,0,0.8-0.1,1.2-0.1c6.6,0,12,5.4,12,12s-5.4,12-12,12c-5.3,0-9.8-3.5-11.4-8.2c0,0,0,0,0-0.1
		c-0.1-0.3-0.1-0.5-0.2-0.8c0-0.1-0.1-0.3-0.1-0.4c0-0.2-0.1-0.4-0.1-0.6c0-0.2-0.1-0.4-0.1-0.7c0-0.2,0-0.3,0-0.5
		c0-0.2,0-0.4,0-0.6"
								/>
								<path
									id="arrow"
									className="st0"
									d="M0.6,13.7c0,0,5.3-0.1,7.5-0.2c0.2,0,7.8-0.1,8.1-0.1l-2,2.9c0.9-0.7,1.8-1.4,2.7-2.1
		c0.9-0.7,2-0.8,3.1-1c-1.3-0.2-4.1-1.3-5.7-3.2c0.5,1.1,1.3,1.9,1.9,2.9c-1.1,0-7-0.1-8.1-0.2c-0.9,0-6.5-0.1-7.5-0.2"
								/>
							</g>
						</svg>
					</div>
					<div className="next latest-next arrow-svg">
						<svg
							version="1.1"
							id="Lag_1"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 27 27"
						>
							<g id="button">
								<path
									id="circle"
									className="st0"
									d="M13.5,0.5c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S20.7,0.5,13.5,0.5z M1.5,13.5
		c0-6.2,4.8-11.4,10.8-11.9c0.4,0,0.8-0.1,1.2-0.1c6.6,0,12,5.4,12,12s-5.4,12-12,12c-5.3,0-9.8-3.5-11.4-8.2c0,0,0,0,0-0.1
		c-0.1-0.3-0.1-0.5-0.2-0.8c0-0.1-0.1-0.3-0.1-0.4c0-0.2-0.1-0.4-0.1-0.6c0-0.2-0.1-0.4-0.1-0.7c0-0.2,0-0.3,0-0.5
		c0-0.2,0-0.4,0-0.6"
								/>
								<path
									id="arrow"
									className="st0"
									d="M0.6,13.7c0,0,5.3-0.1,7.5-0.2c0.2,0,7.8-0.1,8.1-0.1l-2,2.9c0.9-0.7,1.8-1.4,2.7-2.1
		c0.9-0.7,2-0.8,3.1-1c-1.3-0.2-4.1-1.3-5.7-3.2c0.5,1.1,1.3,1.9,1.9,2.9c-1.1,0-7-0.1-8.1-0.2c-0.9,0-6.5-0.1-7.5-0.2"
								/>
							</g>
						</svg>
					</div>
				</div>
				<ul className="slider latest-slider thb-loading">
					{sliderItems.map((slider, i) => (
						<li className="slider-elm latest-slider-elm post-container" key={i}>
							<div className="date-img-wrapper">
								<div className="date-wrapper">
									<p className="small-uppercase rotate-date">10. april 2019 </p>
								</div>
								<a>
									<div className="img-wrapper latest-img-wrapper">
										<img
											width="900"
											height="1350"
											src="https://placeimg.com/900/1350/any"
											className="attachment-medium_portrait size-medium_portrait wp-post-image"
											alt=""
											sizes="(max-width: 900px) 100vw, 900px"
										/>{' '}
									</div>
								</a>
							</div>
							<div className="entry-container">
								<div className="entry-wrapper">
									<div className="entry-meta">
										<div className="entry-cats">
											<a className="entry-cat small-uppercase">
												Lorem ipsum{' '}
											</a>
										</div>
										<p className="entry-slash mobile">/</p>
										<p className="small-italic entry-date mobile">10. april 2019</p>
									</div>
									<a className="entry-title">
										Lorem ipsum{' '}
									</a>
									<p className="entry-text">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default MenuSlider;
