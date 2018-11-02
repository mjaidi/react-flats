import React, { Component } from 'react';
import Flat from './flat';
import flats from '../data/flats.js'

class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {flats.map(flat => <Flat
                              lat={flat.lat}
                              lng={flat.lng}
                              name={flat.name}
                              imgUrl={flat.imageUrl}
                              key={flat.lat}
                              price={flat.price}
                              priceCurrency={flat.priceCurrency}
                              setSelected={this.props.setSelected}
                              />) }
      </div>
    );
  }
}

export default FlatList;
