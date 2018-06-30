import React, { Component } from 'react'
import './Chart.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import jsonObj from '../../assets/ubs_linted.json'
// import '../../../node_modules/react-vis/dist/style.css'
// import { XYPlot, LineSeries, makeVisFlexible, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis'

// const UbsJson = require('../../assets/ubs_linted.json')

const MyPopupMarker = ({ nom_estab, position, dsc_endereco, dsc_bairro, dsc_telefone }) => (
  <Marker position={position}>
    <Popup>
      <div>
        <p>UBS: {nom_estab}</p>
        <p>ENDEREÇO: {dsc_endereco}</p>
        <p>BAIRRO: {dsc_bairro}</p>
        <p>TELEFONE: {dsc_telefone}</p>
      </div>
    </Popup>
  </Marker>
)

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <div style={{ display: 'none' }}>{items}</div>
}

class Chart extends Component {
  state = {
    lat: -15.7835191,
    lng: -47.8993999,
    zoom: 10,
    markers: []
  }
  
  componentDidMount() {
    this.setState({
      markers: jsonObj
    })
  }

  render() {
 
    // console.log(data)
    // const data = [
    //   { x: 0, y: Math.random() * 100 },
    //   { x: 1, y: Math.random() * 100 }
    // ]
    
    // const FlexibleVis = makeVisFlexible(XYPlot)

    const center = [this.state.lat, this.state.lng]

    this.state.markers.forEach(function(obj, key) {
      obj.key = key
      obj.position = [Number(obj.vlr_latitude), Number(obj.vlr_longitude)]
      delete obj.vlr_latitude
      delete obj.vlr_longitude
    })
    console.log(this.state.markers)

    return (
      <Map className="Chart" center={center} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarkersList markers={this.state.markers} />
      </Map>
      // <div className="Chart">
      //   <FlexibleVis>
      //     <VerticalGridLines/>
      //     <HorizontalGridLines/>
      //     <XAxis/>
      //     <YAxis/>
      //     <LineSeries data={this.state.data}/>
      //   </FlexibleVis>
      // </div>
    )
  }
}

export default Chart
