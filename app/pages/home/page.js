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
            <div>
              <h2>Erik Mudrak</h2>
            </div>
        );
    }             
}



