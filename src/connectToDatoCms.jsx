import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (mapPluginToProps) => (BaseComponent) => {
  const Cls = class ConnectToDatoCms extends Component {
    constructor(props) {
      super(props);
      this.state = mapPluginToProps(props.plugin);
    }

    componentDidMount() {
      const { plugin } = this.props;

      this.unsubscribe = plugin.addFieldChangeListener(plugin.fieldPath, () => {
        this.setState(mapPluginToProps(plugin));
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      return <BaseComponent {...this.props} {...this.state} />;
    }
  };

  Cls.propTypes = {
    plugin: PropTypes.object,
  };

  return Cls;
};
