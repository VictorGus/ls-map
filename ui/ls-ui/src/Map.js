import React, {Component} from 'react';
import GoogleMapReact, {GoogleApiWrapper} from 'google-maps-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class LSMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          google={this.props.google}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCf2BamPOzpw2ESc6xLzlP4piUaELakNoY"
})(LSMap)
