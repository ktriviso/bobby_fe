import React from 'react';

const SmallSlider = () => {
	const sliderItems = [ 1, 2, 3, 4, 5 ];
	return (
		<section className="latest-recipes">
			<div className="left-wrap" />
			<div className="recipes-wrapper">
				{sliderItems.map((item, i) => (
					<div className="recipe-column" key={i}>
						<a>
							<div className="img-wrapper">
								<img
									width="620"
									height="930"
									src="https://placeimg.com/620/930/any"
									className="attachment-small_portrait size-small_portrait thb-lazyload lazyload wp-post-image"
									alt=""
									sizes="(max-width: 620px) 100vw, 620px"
									data-sizes="auto"
								/>{' '}
							</div>
							<p className="entry-title">Lorem ipsum dolor sit amet consectetur</p>
						</a>
					</div>
				))}
			</div>
			<div className="right-wrap" />
		</section>
	);
};

export default SmallSlider;
