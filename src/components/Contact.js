// import React from 'react';
// import Recaptcha from 'react-google-recaptcha';
// import axios from 'axios';

// export default class Contact extends React.Component {
// 	state = {
// 		email: null,
// 		recaptcha: null
// 	};

// 	sendInvitation = () => {
// 		axios({
//             method: "POST",
// 			url: 'http://localhost:5000/send',
// 			  headers: {
// 				'Content-Type': 'application/json;charset=UTF-8',
// 				"Access-Control-Allow-Origin": "*",
// 			  },
//             data: {
// 				email: this.state.email,
//             }
// 		})
// 		.then((response)=>console.log(response))
// 		.catch((err) => console.log(err))
// 	}

// 	handleSubmit = (e) => {
// 		e.preventDefault();
// 		this.sendInvitation()
// 	};

// 	handleRecaptcha = (value) => {
// 		this.setState({ 'recaptcha': value });
// 	};

// 	handleChange = (e) => {
// 		this.setState({
// 			email: e.target.value
// 		});
// 	};

// 	render() {
// 		return (
// 			<section className="latest latest-posts about-content-wrapper" id="contact">
// 				<p className="small-uppercase">251 West 30th street, New York, NY</p>
// 				<p className="entry-title">Tillage Tavern</p>
// 				<p>
// 					As we approach our opening, we would love to begin connecting with our friends and neightboors.
// 					Please enter your email below for a personalized invite to our grand opening and future events. We
// 					look forward to seeing you soon!
// 				</p>
// 				<form
// 					onSubmit={this.handleSubmit}
// 					method="POST"
// 					id="contactForm"
// 				>
// 					<input
// 						type="email"
// 						style={{
// 							width: '300px',
// 							margin: 0,
// 							padding: 0,
// 							marginRight: '10px',
// 							marginBottom: '15px'
// 						}}
// 						placeholder="Email"
// 						onChange={this.handleChange}
// 						value={this.state.email || ''}
// 					/>
// 					<button type="submit" className="submitform">
// 						Send
// 					</button>
// 					{/* <Recaptcha ref="recaptcha" sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={this.handleRecaptcha} /> */}
// 				</form>
// 			</section>
// 		);
// 	}
// }

import React, { Component } from 'react';
import Recaptcha from 'react-google-recaptcha';

class App extends Component {
	state = {
		response: '',
		post: '',
		recaptcha: '',
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(this.state.recaptcha)
		await fetch('/api/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ post: this.state.post })
		});
	};
	handleRecaptcha = (value) => {
 		this.setState({ 'recaptcha': value });
 	};
	render() {
		return (
			<section className="latest latest-posts about-content-wrapper" id="contact">
				<p className="small-uppercase">251 West 30th street, New York, NY</p>
				<p className="entry-title">Tillage Tavern</p>
				<p>
					As we approach our opening, we would love to begin connecting with our friends and neightboors.
					Please enter your email below for a personalized invite to our grand opening and future events. We
					look forward to seeing you soon!
				</p>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						style={{
 							width: '300px',
 							margin: 0,
 							padding: 0,
 							marginRight: '10px',
 							marginBottom: '15px'
 						}}
						value={this.state.post}
						onChange={(e) => this.setState({ post: e.target.value })}
					/>
					<button type="submit">Submit</button>
					{/* <Recaptcha ref="recaptcha" sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={this.handleRecaptcha} /> */}
				</form>
			</section>
		);
	}
}
export default App;
