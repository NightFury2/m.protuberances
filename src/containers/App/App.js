import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

export default class App extends React.Component {
  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <h1>Hello World</h1>
      </div>
    );
  }
}
