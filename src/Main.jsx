import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connectToDatoCms from './connectToDatoCms';
import './style.css';

@connectToDatoCms((plugin) => ({
  developmentMode: plugin.parameters.global.developmentMode,
  caption: plugin.parameters.instance.caption,
}))
class Main extends Component {
  render() {
    const { caption } = this.props;
    return (
      <h1>{caption}</h1>
    );
  }
}

Main.propTypes = {
  caption: PropTypes.bool.isRequired,
};

export default Main;
