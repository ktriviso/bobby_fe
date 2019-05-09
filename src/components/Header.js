import React from 'react';

const Header = () => {
	return (
		<header className="desktop-header">
			<div className="two-column-container" style={{zIndex: 5000}}>
				<div>
					<div className="navigation-menu">
						<ul id="menu-main-menu" className="menu">
                            <li
								id="menu-item-28433"
								className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28433"
							>
								<a href="#home">Home</a>
							</li>
							<li
								id="menu-item-28434"
								className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28434"
							>
								<a href="#contact">Contact</a>
							</li>
							<li
								id="menu-item-38911"
								className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38911"
							>
								<a href="#location">Location</a>
							</li>
						</ul>
					</div>{' '}
				</div>
			</div>
			<div className="logo-container">
				<a href="/">
					<h1>Tillage Tavern</h1>
				</a>
			</div>
		</header>
	);
};

export default Header;
