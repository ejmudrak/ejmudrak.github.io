/* page.js -- home
Author: Erik Mudrak - Spring 2017 - Senior Seminar project
Description: Implements home page of web app
*/

// Imports:
import React from 'react';
import styles from "./style.css";
import { browserHistory } from 'react-router';
import MediaQuery from 'react-responsive';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import CodeIcon from './code-blue.png';
import DesignIcon from './design-blue.png';
import CodeSnippetIcon from './code-snippet.png';
import Portrait from './portrait.jpg';
import Name from './wordmark2.png';
import Computer from './computer.png';

const aboutText = "Hello, I'm Erik Mudrak, and I am drawn to user interface design, front end development, and project management. I strive to meld my skills to solve problems with tech in fresh places and in fresh ways."; 
const secondaryText = "I'm looking for a team to build alongside";

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.container}>
              <Background />
              <div className={styles.nameWrapper}>
                <img className={styles.name} src={Name} />
              </div>
              <Icons />
              <About />
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
            <img className={styles.codeIcon} src={CodeIcon} />
          </div>
          <div className={styles.label}>Code</div>
        </a>
       <MediaQuery query='(max-device-width: 750px)'>
         <div className={styles.divider}></div> 
      </MediaQuery>
        <a className={styles.iconWrapper} href="http://www.behance.net/ejmudrak" target="_blank">
          <div className={[styles.circle, styles.designCircle].join(' ')} >
            <img className={styles.designIcon} src={DesignIcon} />
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
       <div className={styles.aboutWrapper}>
         <div className={styles.portraitWrapper}><img className={styles.portrait} src={Portrait} /></div>
         <p className={styles.aboutText}>{ aboutText }</p>
       </div>
      </div>
    );
  }
}

class Blocks extends React.Component {

  toTest = () => browserHistory.push('/test');

  render () {
    return (
      <div className={styles.blocks} >
        <div className={styles.block1}></div>      
        <div className={styles.block2}></div>      
        <div className={styles.block3}></div>      
        <div className={styles.circle1}></div>
      </div>
    );
  }
}

class CodeSnippet extends React.Component {

  render () {
    return (
      <div>
        <img className={styles.codeSnippet} src={CodeSnippetIcon} />
      </div>
    );
  }
}

class Background extends React.Component {

  render () {
    return (
      <div>
       <div className={styles.backgroundBack}></div>
       <div className={styles.backgroundMid}></div>
       <div className={styles.backgroundFront}></div>
      </div>
    );
  }
}

class Icons extends React.Component {

  render () {
    return (
      <div className={styles.buttonContainer}>
        <FloatingActionButton className={styles.button} backgroundColor="#4A5DEC" />
        <FloatingActionButton className={styles.button} backgroundColor="#d95779"/>
        <FloatingActionButton className={styles.button} backgroundColor="#fff"/>
      </div>
    );
  }
}



