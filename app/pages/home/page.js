/* page.js -- home
Author: Erik Mudrak - Spring 2017 - Senior Seminar project
Description: Implements home page of web app
*/

// Imports:
import React from 'react';
import { browserHistory } from 'react-router';
import styles from "./style.css";

import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import CodeIcon from 'material-ui/svg-icons/action/code';
import DesignIcon from 'material-ui/svg-icons/image/color-lens';
import DesignIcon2 from 'material-ui/svg-icons/editor/format-shapes';


// For Material-UI, uncomment:
//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();
const primaryColor = '#7a5de2';
const secondaryColor= '#EDE7F6';
const subheading = 'slinging code & crafting interfaces';

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
              <div className={styles.heading}>Erik Mudrak</div>
              <div className={styles.subheading}>{subheading}</div>
              <div className={styles.portfolio}>
                <CodeButton />
                <DesignButton />
                <CodeLogo />
                <DesignLogo />
              </div>
            </div>
        );
    }
}

var CodeButton = React.createClass({

	render: function () {
		return (
			<div>
        <RaisedButton
          className={[styles.button, styles.code].join(' ')}
          href='http://www.github.com/ejmudrak'
          label='CODE'
          labelColor='white'
          backgroundColor={primaryColor}
        />
			</div>
		);
	}
})

var CodeLogo = React.createClass ({

  render: function () {
    return (
      <a className={styles.codeIcon} href='http://github.com/ejmudrak'>
        <Avatar
          size={250}
          icon={<CodeIcon />}
          color={primaryColor}
          backgroundColor={secondaryColor}
        />
      </a>
    );
  }
})

var DesignButton = React.createClass ({

	render: function () {
		return (
			<div>
        <RaisedButton
          className={[styles.button, styles.design].join(' ')}
          href='http://www.behance.net/ejmudrak'
          label='DESIGN'
          labelColor='white'
          backgroundColor={primaryColor}
        />
			</div>
		);
	}
})

var DesignLogo = React.createClass ({

  render: function () {
    return (
      <a className={styles.designIcon} href='http://www.behance.net/ejmudrak'>
        <Avatar
          size={250}
          icon={<DesignIcon />}
          color={primaryColor}
          backgroundColor={secondaryColor}
        />
      </a>
    );
  }
})
