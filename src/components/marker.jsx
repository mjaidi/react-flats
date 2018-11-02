import React, { Component } from 'react';

import {markerStyle} from './marker_style.js';

export default class Marker extends Component {

  static defaultProps = {};

  render() {
    return (
       <div style={markerStyle}>
          {this.props.text}
       </div>
    );
  }
}
