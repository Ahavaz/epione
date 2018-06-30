import React, { Component } from 'react'
import './Chart.css'
import '../../../node_modules/react-vis/dist/style.css'
import { XYPlot, LineSeries, makeVisFlexible, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis'
import csv from 'csvtojson'

class Chart extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    const csvFilePath = '/home/lucas/Downloads/ubs.csv'
    
    csv().fromFile(csvFilePath)
      .then((jsonObj => jsonObj.filter(obj => obj.cod_munic === 530010)))
      .then(jsonPoha => console.log(jsonPoha))
      .then(jsonFiltered => this.setState({
        data: jsonFiltered
    }))
  }

  render() {
 
    // console.log(data)
    // const data = [
    //   { x: 0, y: Math.random() * 100 },
    //   { x: 1, y: Math.random() * 100 },
    //   { x: 2, y: Math.random() * 100 },
    //   { x: 3, y: Math.random() * 100 },
    //   { x: 4, y: Math.random() * 100 },
    //   { x: 5, y: Math.random() * 100 },
    //   { x: 6, y: Math.random() * 100 },
    //   { x: 7, y: Math.random() * 100 },
    //   { x: 8, y: Math.random() * 100 },
    //   { x: 9, y: Math.random() * 100 },
    //   { x: 10, y: Math.random() * 100 },
    //   { x: 11, y: Math.random() * 100 },
    //   { x: 12, y: Math.random() * 100 },
    //   { x: 13, y: Math.random() * 100 },
    //   { x: 14, y: Math.random() * 100 },
    //   { x: 15, y: Math.random() * 100 },
    //   { x: 16, y: Math.random() * 100 },
    //   { x: 17, y: Math.random() * 100 },
    //   { x: 18, y: Math.random() * 100 },
    //   { x: 19, y: Math.random() * 100 }
    // ]
    
    // data.forEach((val, index, array) => {
    //   array.push({x: index, y: Math.random() * 100})
    //   console.log(array.x, array.y)
    // })
    
    const FlexibleVis = makeVisFlexible(XYPlot)

    return (
      <div className="Chart">
        <FlexibleVis>
          <VerticalGridLines/>
          <HorizontalGridLines/>
          <XAxis/>
          <YAxis/>
          <LineSeries data={this.state.data}/>
        </FlexibleVis>
      </div>
    )
  }
}

export default Chart
