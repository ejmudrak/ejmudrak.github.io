/* page.js -- <directory>
Author: <Name> - Spring 2017 - Senior Seminar project
Description: Implements <Page> page of web app 
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";

export default class Test extends React.Component {
	  
	  goBack = () => browserHistory.push('/home');

	  render() {
	    return (
	      <div onTouchTap={this.goBack}>
	        GO BACK. HELLO WORLD! 
	      </div>
	    );
	  }
}

// Make more components here