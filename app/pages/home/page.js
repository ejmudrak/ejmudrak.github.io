/* page.js -- home
Author: Erik Mudrak - Spring 2017 - Senior Seminar project
Description: Implements home page of web app
*/

// Imports:
import React from 'react';
import styles from "./style.css";
import MediaQuery from 'react-responsive';

// import CodeIcon from '../../assets/code-blue.png';
// import DesignIcon from '../../assets/design-blue.png';
// import CodeSnippetIcon from '../../assets/code-snippet.png';
// import Portrait from '../../assets/portrait.jpg';

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
            <img className={styles.codeIcon} src={require('../../assets/code-blue.png')} />
          </div>
          <div className={styles.label}>Code</div>
        </a>

        <a className={styles.iconWrapper} href="http://www.behance.net/ejmudrak" target="_blank">
          <div className={[styles.circle, styles.designCircle].join(' ')} >
            <img className={styles.designIcon} src={require('../../assets/design-blue.png')} />
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
         <div className={styles.portraitWrapper}><img className={styles.portrait} src={require('../../assets/portrait.jpg')} /></div>
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
        <img className={styles.codeSnippet} src={require('../../assets/code-snippet.png')} />
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

