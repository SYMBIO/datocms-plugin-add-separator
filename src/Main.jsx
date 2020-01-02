import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connectToDatoCms from './connectToDatoCms';
import './style.css';

@connectToDatoCms(plugin => ({
  developmentMode: plugin.parameters.global.developmentMode,
  caption: plugin.parameters.instance.caption,
}))

export default class Main extends Component {
  static propTypes = {
    caption: PropTypes.bool.isRequired,
  };

  render() {
    const { caption } = this.props;
    return (
      <h1>{caption}</h1>
    );
  }
}
