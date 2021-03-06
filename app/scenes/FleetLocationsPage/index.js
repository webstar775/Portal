import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationMap from './components/LocationMap';
import LocationTable from './components/LocationTable';

class FleetLocationsPage extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }

  someMoo() {} // Stops eslint crying.

  render() {
    const { children } = this.props;

    return (
      <div>
        View Airstream locations, click on map marker for details.
        <LocationMap />
        <LocationTable />
        {children}
      </div>
    );
  }
}

export default FleetLocationsPage;
