import React from 'react';

function outputString(amount, currency) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 2
  });
}

const CurrencyDisplay = props => {
  return (
    <span>
      {outputString(props.amount, props.currency)}
    </span>
  );
};

export default CurrencyDisplay;
