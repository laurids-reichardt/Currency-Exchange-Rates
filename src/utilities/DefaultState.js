export default {
  // the currency from which to convert from
  sourceCurrency: 'EUR',
  // the currency to convert to
  targetCurrency: 'USD',
  // amount of currency to convert
  amount: 0,
  // the resulting amount from the conversion
  result: 0,
  // the raw unfiltered data string from the input field
  input: 0,
  // the historic currency data to display on the chart (will be updated with external api calls)
  chartData: [
    {
      x: '05-26',
      y: 0.8931761343336907
    },
    {
      x: '06-02',
      y: 0.8915039671926541
    },
    {
      x: '06-09',
      y: 0.894774516821761
    },
    {
      x: '06-16',
      y: 0.8954956568460642
    },
    {
      x: '06-23',
      y: 0.8950147677436678
    },
    {
      x: '06-30',
      y: 0.8762705923589205
    },
    {
      x: '07-07',
      y: 0.8762705923589205
    },
    {
      x: '07-14',
      y: 0.8760402978537013
    },
    {
      x: '07-21',
      y: 0.8589589417625838
    },
    {
      x: '07-28',
      y: 0.8525876033762468
    },
    {
      x: '08-04',
      y: 0.8426019548365352
    },
    {
      x: '08-11',
      y: 0.8499787505312366
    }
  ],
  // list of possible currency options for the dropdown menu
  currencyOptions: [
    {
      key: 'eur',
      text: 'Euro',
      value: 'EUR',
      icon: 'euro'
    },
    {
      key: 'usd',
      text: 'US Dollar',
      value: 'USD',
      icon: 'usd'
    },
    {
      key: 'gbp',
      text: 'Pound',
      value: 'GBP',
      icon: 'gbp',
      disabled: 'true'
    },
    {
      key: 'jpy',
      text: 'Yen',
      value: 'JPY',
      icon: 'jpy'
    },
    {
      key: 'rub',
      text: 'Ruble',
      value: 'RUB',
      icon: 'rub'
    },
    {
      key: 'inr',
      text: 'Rupee',
      value: 'INR',
      icon: 'inr'
    }
  ],
  sourceCurrencyOptions: [
    {
      key: 'eur',
      text: 'Euro',
      value: 'EUR',
      icon: 'euro'
    },
    {
      key: 'usd',
      text: 'US Dollar',
      value: 'USD',
      icon: 'usd'
    },
    {
      key: 'gbp',
      text: 'Pound',
      value: 'GBP',
      icon: 'gbp'
    },
    {
      key: 'jpy',
      text: 'Yen',
      value: 'JPY',
      icon: 'jpy'
    },
    {
      key: 'rub',
      text: 'Ruble',
      value: 'RUB',
      icon: 'rub'
    },
    {
      key: 'inr',
      text: 'Rupee',
      value: 'INR',
      icon: 'inr'
    }
  ],
  targetCurrencyOptions: [
    {
      key: 'eur',
      text: 'Euro',
      value: 'EUR',
      icon: 'euro',
      disabled: true
    },
    {
      key: 'usd',
      text: 'US Dollar',
      value: 'USD',
      icon: 'usd'
    },
    {
      key: 'gbp',
      text: 'Pound',
      value: 'GBP',
      icon: 'gbp'
    },
    {
      key: 'jpy',
      text: 'Yen',
      value: 'JPY',
      icon: 'jpy'
    },
    {
      key: 'rub',
      text: 'Ruble',
      value: 'RUB',
      icon: 'rub'
    },
    {
      key: 'inr',
      text: 'Rupee',
      value: 'INR',
      icon: 'inr'
    }
  ]
};
