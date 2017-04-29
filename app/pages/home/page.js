/* page.js -- home
Author: Erik Mudrak - Spring 2017 - Senior Seminar project
Description: Implements home page of web app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";
import MediaQuery from 'react-responsive';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
var CodeIcon = require('../../assets/code-blue.png');
import DesignIcon from '../../assets/design-blue.png';
// import CodeIcon from 'material-ui/svg-icons/action/code';
// import DesignIcon from 'material-ui/svg-icons/image/color-lens';
// import DesignIcon2 from 'material-ui/svg-icons/editor/format-shapes';

const aboutText = "Hello, I'm Erik Mudrak, and I am drawn to user interface design, front end development, and project management. I strive to meld my skills to solve problems with tech in fresh places and in fresh ways."; 
const secondaryText = "I'm looking for a team to build alongside";

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.container}>
              <About /> 
              <Portfolio />
              <div className={styles.backgroundTriangle}></div>
            </div>
        );
    }
}

class Portfolio extends React.Component {

  render () {

    return (
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioHeading}>Portfolio</div>
        <a className={styles.iconWrapper} href="http://www.github.com/ejmudrak" target="_blank">
          <div className={styles.circle} >
            <img className={styles.codeIcon} src='../../assets/code-blue.png' />
          </div>
          <div className={styles.label}>Code</div>
        </a>

        <a className={styles.iconWrapper} href="http://www.behance.net/ejmudrak" target="_blank">
          <div className={[styles.circle, styles.designCircle].join(' ')} >
            <img className={styles.designIcon} src='../../assets/design-blue.png' />
          </div>
          <div className={styles.label}>Design</div>
        </a>
      </div>
    );
  }
}

class About extends React.Component {

  render () {
    return (
      <div className={styles.aboutContainer}>
       <div className={styles.aboutHeading}>ERIK MUDRAK</div>
       <div className={styles.line}></div>
       <div className={styles.topWrapper}>
         <div className={styles.portraitWrapper}><img className={styles.portrait} src="../../assets/portrait.jpg" /></div>
         <p className={styles.aboutText}>{ aboutText }</p>
       </div>
       <MediaQuery query='(min-device-width: 1400px)'>
         <div className={styles.bottomWrapper}>
          <Blocks />
          <CodeSnippet /> 
        </div> 
      </MediaQuery>
      </div>
    );
  }
}

class CodeSnippet extends React.Component {

  render () {
    return (
      <div>
        <img className={styles.codeSnippet} src="../../assets/code-snippet.png" />
      </div>
    );
  }
}

class Blocks extends React.Component {

  render () {
    return (
      <div className={styles.blocks}>
        <div className={styles.block1}></div>      
        <div className={styles.block2}></div>      
        <div className={styles.block3}></div>      
        <div className={styles.circle1}></div>
      </div>
    );
  }
}

