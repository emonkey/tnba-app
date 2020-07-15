import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import logo from '../logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin  } from '@fortawesome/free-brands-svg-icons'

let date = new Date();

export class AppHeader extends Component {
	render() {
		return (
			<header className="App-header App-card d-flex flex-row mb-2 p-2">
				<img src={logo} className="App-logo" alt="logo" />
				<div>
					<h1 className="App-title clearfix">There and Back Again</h1>
					<div>New Zealand's daily commute in 2018</div>
				</div>
			</header>
		);
	}
};

export class AppFooter extends Component {
	render() {
		return (
			<footer className="App-footer App-card d-flex flex-row mt-2">
				<div className="Socials w-100">
					<Row>
						<Col className="col-8">
							&copy; {date.getFullYear()} - Eric Luo
						</Col>
						<Col className="col-1 ml-1">
							<a href="https://emonkey.github.io/tnba-app/">
								<FontAwesomeIcon icon={faGithubSquare} />
							</a>
						</Col>
						<Col className="col-1 ml-1">
							<a href="https://www.linkedin.com/in/eric-luo/">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</Col>
						<Col className="col-1 ml-1">
							<a href="mailto:eric.ys.luo@outlook.com">
								<FontAwesomeIcon icon={faEnvelope} />
							</a>
						</Col>
					</Row>
				</div>
			</footer>
		);
	}
};

