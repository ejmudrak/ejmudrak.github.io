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
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';

import CodeIcon from './code-blue.png';
import DesignIcon from './design-blue.png';
import CodeSnippetIcon from './code-snippet.png';
import Portrait from './portrait.jpg';
import Name from './wordmark2.png';
import ComputerDrawing from './computer.png';

const aboutText = "Hello, I'm Erik Mudrak, and I am drawn to user interface design, front end development, and project management. I strive to meld my skills to solve problems with tech in fresh places and in fresh ways."; 
const secondaryText = "I'm looking for a team to build alongside";

var projects = [

  { 
    title: "Greenhouse",
    desc: "Description",
    img: "",
  },
  { 
    title: "Record Bin",
    desc: "Description",
    img: "",
  },
  { 
    title: "Project",
    desc: "Description",
    img: "",
  },
  { 
    title: "Project",
    desc: "Description",
    img: "",
  },
  { 
    title: "Project",
    desc: "Description",
    img: "",
  },
  { 
    title: "Project",
    desc: "Description",
    img: "",
  }

];

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
              <div className={styles.computerWrapper}>
                <img className={styles.computer} src={ComputerDrawing} />
              </div>
              <div className={styles.arrowWrapper}>
                <ArrowDownward className={styles.arrow} color="white"  />
              </div>
              <Portfolio />
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

class Portfolio extends React.Component {

  render () {

    return (
      <div className={styles.portfolioContainer}>
        <Header />
        <Cards />
      </div>
    );
  }
}

class Cards extends React.Component {

  render () {
    return (
      <div className={styles.cardsContainer}>
      
      </div>
    );
  }
}


class Header extends React.Component {

    render() {
        return (
          <div className={styles.headerContainer}>
            <div className={styles.leftLine}></div>
            <div className={styles.headerText}>PORTFOLIO</div>
            <div className={styles.rightLine}></div>
          </div>
        );
    }
}




