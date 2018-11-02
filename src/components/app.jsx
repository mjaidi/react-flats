import React, { Component } from 'react';
import SimpleMap from './simple_map.jsx';
import FlatList from './flat_list.jsx'
import flats from '../data/flats.js';

// default map lat and longitude
const centerlng = (flats.map(flat => flat.lng).reduce((a, b)=> a + b,0))/flats.length;
const centerlat = (flats.map(flat => flat.lat).reduce((a, b)=> a + b,0))/flats.length;


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lng: centerlng,
      lat: centerlat,
      name: ""
    };
  }

  setSelected = (lng, lat, name) => {
      this.setState({
        lng: lng,
        lat: lat,
        name: name
      })
    }

  render() {
    return (
      <div>
        <FlatList setSelected={this.setSelected} />
        <div className="map-container">
          <SimpleMap positionlng={this.state.lng} positionlat={this.state.lat} flatname={this.state.name} />
        </div>
      </div>
    );
  }
}

export default App;

