import React, { Component } from 'react'
import './Chart.css'
import '../../../node_modules/react-vis/dist/style.css'
import { XYPlot, LineSeries, makeWidthFlexible, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis'

class Chart extends Component {
  render() {
    const data = [
      { x: 0, y: Math.random() * 30 },
      { x: 1, y: Math.random() * 30 },
      { x: 2, y: Math.random() * 30 },
      { x: 3, y: Math.random() * 30 },
      { x: 4, y: Math.random() * 30 },
      { x: 5, y: Math.random() * 30 },
      { x: 6, y: Math.random() * 30 },
      { x: 7, y: Math.random() * 30 },
      { x: 8, y: Math.random() * 30 },
      { x: 9, y: Math.random() * 30 },
      { x: 10, y: Math.random() * 30 },
      { x: 11, y: Math.random() * 30 },
      { x: 12, y: Math.random() * 30 },
      { x: 13, y: Math.random() * 30 },
      { x: 14, y: Math.random() * 30 },
      { x: 15, y: Math.random() * 30 },
      { x: 16, y: Math.random() * 30 },
      { x: 17, y: Math.random() * 30 },
      { x: 18, y: Math.random() * 30 },
      { x: 19, y: Math.random() * 30 }
    ]
    
    const FlexibleXYPlot = makeWidthFlexible(XYPlot)
    
    return (
      <div className="Chart">
        <FlexibleXYPlot height={450}>
          <VerticalGridLines/>
          <HorizontalGridLines/>
          <XAxis/>
          <YAxis/>
          <LineSeries data={data}/>
        </FlexibleXYPlot>
        {/* <p>{window.height} {window.width}</p> */}
      </div>
    )
  }
}

export default Chart
