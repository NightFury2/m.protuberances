import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Helmet from 'react-helmet';
import config from '../../config';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <h1>Hello App</h1>
        <div className={styles.appContent}>
          <CSSTransitionGroup
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionName={ {
              enter: '__enter',
              enterActive: '__enter_active',
              leave: '__leave',
              leaveActive: '__leave_active',
              appear: '__appear',
              appearActive: '__appear_active'}}>
            {this.props.children}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}
