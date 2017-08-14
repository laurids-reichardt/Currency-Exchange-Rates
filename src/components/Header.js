import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const AppHeader = () =>
  <div>
    <Header as="h2" icon textAlign="center">
      <Icon name="currency" size="massive" />
      <Header.Content>Currency Exchange Rates</Header.Content>
    </Header>
  </div>;

export default AppHeader;
