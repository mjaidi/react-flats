import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker.jsx';


class SimpleMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <GoogleMap
        // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
        center={{lat: this.props.positionlat, lng: this.props.positionlng}}
        zoom={14}>
        <Marker
               lat={this.props.positionlat}
               lng={this.props.positionlng}
               key={this.props.positionlat}
               text={this.props.flatname[0]}
                             />
      </GoogleMap>
    );
  }
}

export default SimpleMap;

