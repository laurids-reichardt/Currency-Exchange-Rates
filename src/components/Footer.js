import React from 'react';
import { Container } from 'semantic-ui-react';

const Footer = () => (
  <div>
    <Container textAlign="center">
      Free & Open Source (
      <a href="https://github.com/laurids-reichardt/Currency-Exchange-Rates/blob/master/LICENSE">
        MIT
      </a>)
      <br />
      Copyright © 2017{' '}
      <a href="https://github.com/laurids-reichardt">laurids-reichardt</a>
      <br />
      <br />
    </Container>
  </div>
);

export default Footer;
