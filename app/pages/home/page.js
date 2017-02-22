/* page.js -- home
Author: Erik Mudrak - Spring 2017 - Senior Seminar project
Description: Implements home page of web app 
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";

import RaisedButton from 'material-ui/RaisedButton';

// For Material-UI, uncomment:
//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();

export default class Home extends React.Component {  
    render() {
        return (
            <div className="container">
            	<h1>ERIK MUDRAK</h1?
            	// <Menu />
            	// <About />
            	// <Code />
            	// <Design />
            </div>
        );
    }             
}

var Menu = React.createClass({
	
	render: function {
		return (
			<div>
				<nav>
					<a href='#'>ERIK MUDRAK</a>
					<a href='#'>CODE</a>
					<a href='#'>DESIGN</a>
				</nav>
			</div>
		);
	}
})

var About = React.createClass({
	
	render: function {
		return (
			<div>

			</div>
		);
	}
})

var Menu = React.createClass({
	
	render: function {
		return (
			<div>

			</div>
		);
	}
})

var Menu = React.createClass({
	
	render: function {
		return (
			<div>

			</div>
		);
	}
})

