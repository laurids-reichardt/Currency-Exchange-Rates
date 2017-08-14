// this utility component provides all functionally for converting currencies
import axios from 'axios';
import Moment from 'moment';

export default class {
  // prepare list of api calls to be made to fixer.io (rates for the last 12 weeks)
  getURLs() {
    const moment = Moment();
    let urls = [];

    for (let index = 0; index < 12; index += 1) {
      const date = moment.format('YYYY[-]MM[-]DD');
      urls.push(axios.get('https://api.fixer.io/' + date));
      moment.subtract(1, 'week');
    }

    return urls;
  }

  // initialize with api data
  init(arr) {
    this.dataArray = arr.map(function(obj) {
      let updatedObj = obj.data;
      updatedObj.rates.EUR = 1;
      return updatedObj;
    });
  }

  // converts currency amount from source to target currency
  get(sourceCurrency, targetCurrency, amount) {
    return this.getRate(sourceCurrency, targetCurrency, 0) * amount;
  }

  // returns rate for specified currencies and week (week == 0 => latest rate)
  getRate(sourceCurrency, targetCurrency, week) {
    const baseRate = 1 / this.dataArray[week].rates[sourceCurrency];
    const rate = baseRate * this.dataArray[week].rates[targetCurrency];
    return rate;
  }

  // returns data for chart to display
  getChartData(sourceCurrency, targetCurrency) {
    var self = this;

    let chartData = this.dataArray.map(function(obj, week) {
      const tick = obj.date.slice(5);
      const value = self.getRate(sourceCurrency, targetCurrency, week);
      return { x: tick, y: value };
    });

    return chartData.reverse();
  }
}
