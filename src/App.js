import React, { Component } from 'react'
import './App.css'
import Map from './components/Maps/map'
import Chart from './components/chart/Chart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chart>
        </Chart>
        <Map>
        </Map>
      </div>
    )
  }
}

export default App
