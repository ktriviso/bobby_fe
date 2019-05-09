import React from 'react';

export default class MobileHeader extends React.Component {
	state = {
		toggleMobileNav: false
	};

	toggleMobileNav = () => {
		console.log('clicked');
		this.setState({
			toggleMobileNav: !this.state.toggleMobileNav
		});
	};

	render() {
		return (
			<div className="mobile-header">
				<header>
					<div className="two-column-container" style={{zIndex: 5000}}>
						<img
							style={{ height: '20px' }}
							onClick={this.toggleMobileNav}
							src="assets/imgs/menu.png"
							alt="Emma Martiny"
						/>
					</div>
					<div className="logo-container">
						<a href="/">
							<h1>Tillage Tavern</h1>
						</a>
					</div>
				</header>
				{this.state.toggleMobileNav ? (
					<div className="full-view-mobile-nav">
						<ul onClick={this.toggleMobileNav}>
							<li>
								<a href="#home">Home</a>
							</li>
							<li>
								<a href="#contact">contact</a>
							</li>
							<li>
								<a href="#location">Location</a>
							</li>
						</ul>
					</div>
				) : (
					''
				)}
			</div>
		);
	}
}
