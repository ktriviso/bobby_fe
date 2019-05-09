import React from 'react';

const Footer = () => {
	return (
		<footer id="footer">
			<aside className="social_bar">
				<div id="sb_instagram" className="sbi sbi_disable_mobile sbi_col_6">
					<div id="sbi_images">
						<div className="sbi_loader fa-spin" />
					</div>
					<div id="sbi_load" />
				</div>
				<div className="social-channels">
				<span>info@tillagetavern.com</span>
				<span>All Rights Reserved &#174; Tillage Tavern New York</span>
					{/* <a target="_blank" className="small-uppercase" href="/">
						facebook
					</a>
					<a target="_blank" className="small-uppercase" href="/">
						instagram
					</a>
					<a target="_blank" className="small-uppercase" href="/">
						pinterest
					</a>
					<a
						target="_blank"
						className="small-uppercase"
						href="/"
					>
						youtube
					</a> */}
				</div>
			</aside>
		</footer>
	);
};

export default Footer;
