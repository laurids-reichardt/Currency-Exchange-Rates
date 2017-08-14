// at its core this utilty component makes sure that source and target currency can not be set to the same currency
export default class {
  constructor() {
    // list of possible currency options for the dropdown menu
    this.currencyOptions = [
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
    ];
  }

  // depending on the selected source currency the same currency can't be selected as target currency as this would result in a 1 to 1 conversion which is not wanted
  getTargetCurrencyOptions(sourceCurrency) {
    const options = this.currencyOptions;

    return options.map(function(currency) {
      if (currency.value === sourceCurrency) {
        const updatedCurrency = currency;
        updatedCurrency.disabled = true;
        return updatedCurrency;
      } else {
        const updatedCurrency = currency;
        updatedCurrency.disabled = false;
        return updatedCurrency;
      }
    });
  }

  // if the user selects a source currency that is already the target currency the target currency jumps to the next entry as to make sure that source and target currency are not the same
  getTargetCurrency(sourceCurrency, targetCurrency) {
    const options = this.currencyOptions;

    if (sourceCurrency === targetCurrency) {
      const matchIndex = options.findIndex((element, index, array) => {
        if (element.value === sourceCurrency) {
          return index;
        } else {
          return null;
        }
      });

      if (matchIndex === -1) {
        return options[1].value;
      } else if (matchIndex >= options.length - 1) {
        return options[0].value;
      } else {
        return options[matchIndex + 1].value;
      }
    }

    return targetCurrency;
  }
}
