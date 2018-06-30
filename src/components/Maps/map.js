import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'



const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

class Map extends Component{

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      }

    render () {

        initMap() {
            map = new google.maps.Map()
        }

        const initialMap = withGoogleMap(props => {
            return (

                <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={-16.0115647315974}
                    lng={-48.0734467506395}
                    text={'dsdsds'}
                  />
                </GoogleMapReact>
              </div>)

        });

        

    }
}

export default Map

