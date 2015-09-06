'use strict';
import React from 'react';
import Carousel from './carousel';
import Waypoint from 'react-waypoint';

import HomeAction from '../actions/homeActionCreators'
import HomeStore from '../stores/homeStore';

class Home extends React.Component {
  constructor() {
    super();
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
    this._handleWaypointLeave = this._handleWaypointLeave.bind(this);
  }

  _handleWaypointEnter(){
    HomeAction.resizeHeader(true);
  }
  _handleWaypointLeave(){
    HomeAction.resizeHeader(false);
  }

  render() {
    return (
      <div className="homepage">
        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} threshold={0} />
        <div className="CarouselBoxOut">
        <div className="CarouselBoxIn">
          <Carousel bsSize="large"/>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;