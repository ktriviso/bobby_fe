import React from 'react';

export default class HomepageSlider extends React.Component {
	render() {
		return (
			<section className="large-slider" id="home">
				<div className="slider custom-slider">
					<div className="slider-elm large-slider-elm post-container">
						<div className="img-wrapper large-slider-img-wrapper">
							<span>
								<img
									width="1440"
									height="960"
									src="https://i.imgur.com/QaY08Qw.jpg"
									className="attachment-desktop_slider size-desktop_slider thb-lazyload lazyload"
									alt=""
									sizes="(max-width: 1440px) 100vw, 1440px"
								/>{' '}
							</span>
						</div>
						<div className="entry-container">
							<div className="entry-wrapper">
								<div className="entry-meta">
									<p className="small-italic entry-date">251 West 30th street, New York, NY</p>
								</div>
								<span>
									<p className="entry-title">Coming soon</p>
								</span>
								<p className="entry-text">
								Our family from the The Harrow New York is proudly bringing their farm to table concept to Tillage Tavern. 
							We are humbled to have the opportunity to bring locally sourced products to our newest home near Madison Square Garden. 
							We are committed to working with local farmers to bring only freshest seasonal ingredients straight from its source.
								</p>
							</div>
						</div>
					</div>
					<div className="slider-elm large-slider-elm post-container">
						<div className="img-wrapper large-slider-img-wrapper">
							<span>
								<img
									width="1440"
									height="960"
									src="https://i.imgur.com/lBQwc6b.jpg"
									className="attachment-desktop_slider size-desktop_slider thb-lazyload lazyload"
									alt=""
									sizes="(max-width: 1440px) 100vw, 1440px"
								/>{' '}
							</span>
						</div>
						<div className="entry-container">
							<div className="entry-wrapper">
                            <div className="entry-meta">
									<p className="small-italic entry-date">251 West 30th street, New York, NY</p>
								</div>
								<span>
									<p className="entry-title">Coming soon</p>
								</span>
								<p className="entry-text">
                                Our family from the The Harrow New York is proudly bringing their farm to table concept to Tillage Tavern. 
							We are humbled to have the opportunity to bring locally sourced products to our newest home near Madison Square Garden. 
							We are committed to working with local farmers to bring only freshest seasonal ingredients straight from its source.
								</p>
							</div>
						</div>
					</div>
					<div className="slider-elm large-slider-elm post-container">
						<div className="img-wrapper large-slider-img-wrapper">
							<span>
								<img
									width="1440"
									height="960"
									src="https://i.imgur.com/BLOMyg0.jpg"
									className="attachment-desktop_slider size-desktop_slider thb-lazyload lazyload"
									alt=""
									sizes="(max-width: 1440px) 100vw, 1440px"
								/>{' '}
							</span>
						</div>
						<div className="entry-container">
							<div className="entry-wrapper">
                            <div className="entry-meta">
									<p className="small-italic entry-date">251 West 30th street, New York, NY</p>
								</div>
								<span>
									<p className="entry-title">Coming soon</p>
								</span>
								<p className="entry-text">
                                Our family from the The Harrow New York is proudly bringing their farm to table concept to Tillage Tavern. 
							We are humbled to have the opportunity to bring locally sourced products to our newest home near Madison Square Garden. 
							We are committed to working with local farmers to bring only freshest seasonal ingredients straight from its source.
								</p>
							</div>
						</div>
					</div>
					<div className="slider-elm large-slider-elm post-container">
						<div className="img-wrapper large-slider-img-wrapper">
							<span>
								<img
									width="1440"
									height="960"
									src="https://i.imgur.com/Q3Hy80m.jpg"
									className="attachment-desktop_slider size-desktop_slider thb-lazyload lazyload"
									alt=""
									sizes="(max-width: 1440px) 100vw, 1440px"
								/>{' '}
							</span>
						</div>
						<div className="entry-container">
							<div className="entry-wrapper">
                            <div className="entry-meta">
									<p className="small-italic entry-date">251 West 30th street, New York, NY</p>
								</div>
								<span>
									<p className="entry-title">Coming soon</p>
								</span>
								<p className="entry-text">
                                Our family from the The Harrow New York is proudly bringing their farm to table concept to Tillage Tavern. 
							We are humbled to have the opportunity to bring locally sourced products to our newest home near Madison Square Garden. 
							We are committed to working with local farmers to bring only freshest seasonal ingredients straight from its source.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="entry-container-main">
					<div className="entry-container" />
					<div className="paginator-container flex" style={{ width: '85%', justifyContent: 'space-between'}}>
						<div className="prev large-slider-prev arrow-svg">
							
                        <img src="assets/imgs/next-page.png"/>
						</div>
						<div className="next large-slider-next arrow-svg" style={{marginTop: '-2px'}}>
                        <img src="assets/imgs/next-page.png"/>
                        
						</div>
					</div>
				</div>
			</section>
		);
	}
}
