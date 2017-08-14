import React, { Component } from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';

class Chart extends Component {
  render() {
    return (
      <VictoryChart domainPadding={{ y: [60, 60] }} padding={50} animate={{ duration: 400, easing: 'expInOut' }}>
        <VictoryAxis fixLabelOverlap />
        <VictoryAxis dependentAxis />
        <VictoryLine data={this.props.data} x="x" y="y" />
      </VictoryChart>
    );
  }
}

export default Chart;
