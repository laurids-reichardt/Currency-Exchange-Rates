import React from 'react';

const ImplementationInfo = () => (
  <div style={{ hyphens: 'none' }}>
    <p>
      Data is sourced from <a href="http://fixer.io/">fixer.io</a> and
      represents the latest foreign exchange rates published by the European
      Central Bank. There are no guarantees on the correctness of the data
      displayed on this website nor are there any uptime guarantees. Please use
      for educational purposes only.
    </p>
    <p>
      Libraries and frameworks used include{' '}
      <a href="https://facebook.github.io/react/">React</a> and{' '}
      <a href="https://react.semantic-ui.com">Semantic UI</a> for visualization,{' '}
      <a href="https://github.com/mzabriskie/axios">Axios</a> and{' '}
      <a href="https://momentjs.com/">Moment.js</a> to fetch the currency rate
      data and <a href="http://formidable.com/open-source/victory/">
        Victory
      </a>{' '}
      to display the chart. Check out the source code on{' '}
      <a href="https://github.com/laurids-reichardt/Currency-Exchange-Rates">
        GitHub
      </a>{' '}
      for further details.
    </p>
    <p />
  </div>
);

export default ImplementationInfo;
