import React from 'react';
import { Dropdown } from 'semantic-ui-react';

function icon(key) {
  return key.toLowerCase();
}

const CurrencyDropdown = props => {
  return (
    <Dropdown
      value={props.currency}
      onChange={props.onChange}
      fluid
      selection
      options={props.options}
      labeled
      button
      className="icon"
      icon={icon(props.currency)}
    />
  );
};

export default CurrencyDropdown;
