// library imports
import React, { Component } from 'react';
import { Divider, Container, Grid, Icon, Segment } from 'semantic-ui-react';
import axios from 'axios';

// component imports
import Header from './components/Header';
import InfoText from './components/InfoText';
import AmountInput from './components/AmountInput';
import CurrencyDropdown from './components/CurrencyDropdown';
import CurrencyDisplay from './components/CurrencyDisplay';
import Chart from './components/Chart';
import ImplementationInfo from './components/ImplementationInfo';
import Footer from './components/Footer';

// utility component imports
import DefaultState from './utils/DefaultState';
import DropdownOptions from './utils/DropdownOptions';
import ExchangeRateData from './utils/ExchangeRateData';

class App extends Component {
  constructor(props) {
    super(props);

    // get the initial default state
    this.state = DefaultState;

    // bind handler functions to the App component
    this.handleSourceCurrencyChange = this.handleSourceCurrencyChange.bind(this);
    this.handleTargetCurrencyChange = this.handleTargetCurrencyChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
  }

  // make initial api calls to fixer.io and set initial currency amount to 1
  componentDidMount() {
    // initialize utility component objects and put them in utils
    const utils = {
      fx: new ExchangeRateData(),
      dropdownOptions: new DropdownOptions()
    };

    // get urls for the api calls to fixer.io
    const urls = utils.fx.getURLs();

    // make api calls and kick off app by setting amount to 1
    // also put utils into internal state
    axios
      .all(urls)
      .then(arr => {
        utils.fx.init(arr);
        this.setState({ utils: utils }, () => {
          this.handleAmountChange(0, { value: 1 });
        });
      })
      .catch(error => console.log(error));
  }

  // handler functions - handle input changes from the input field, dropdowns and switch button

  handleSourceCurrencyChange(event, data) {
    this.setState({ sourceCurrency: data.value }, this.updateTargetCurrencyOptions);
  }

  handleTargetCurrencyChange(event, data) {
    this.setState({ targetCurrency: data.value }, this.updateResult);
  }

  handleAmountChange(event, data) {
    this.setState({ amount: Number(data.value), input: data.value }, this.updateResult);
  }

  handleIconClick() {
    const sourceCurrency = this.state.sourceCurrency;
    this.setState({ sourceCurrency: this.state.targetCurrency });
    this.setState({ targetCurrency: sourceCurrency }, this.updateResult);
  }

  // update functions - react to in the state (e.g. change from dropdown) and update state accordingly

  // update target currency dropdown options (deactivate source currency from possible selection)
  updateTargetCurrencyOptions() {
    this.setState(
      {
        targetCurrencyOptions: this.state.utils.dropdownOptions.getTargetCurrencyOptions(this.state.sourceCurrency)
      },
      this.updateTargetCurrency
    );
  }

  // if source currency = target currency, target currency jumps to the next option
  updateTargetCurrency() {
    this.setState(
      {
        targetCurrency: this.state.utils.dropdownOptions.getTargetCurrency(
          this.state.sourceCurrency,
          this.state.targetCurrency
        )
      },
      this.updateResult
    );
  }

  // calculate resulting amount from currency conversion
  updateResult() {
    this.setState(
      {
        result: this.state.utils.fx.get(this.state.sourceCurrency, this.state.targetCurrency, this.state.amount)
      },
      this.updateChartData
    );
  }

  // update chart data
  updateChartData() {
    this.setState({
      chartData: this.state.utils.fx.getChartData(this.state.sourceCurrency, this.state.targetCurrency)
    });
  }

  render() {
    return (
      <div className="App">
        <Container text textAlign="justified">
          <Header />

          <InfoText />

          <Divider horizontal>Selection</Divider>

          {/* grid displays the input field, currency dropdowns and the currency switch button */}
          <Grid>
            <Grid.Row>
              <Grid.Column>
                {/* allows the user to insert the desired amount of currency */}
                <AmountInput value={this.state.input} onChange={this.handleAmountChange} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={7}>
                {/* dropdown element to select the source currency */}
                <CurrencyDropdown
                  currency={this.state.sourceCurrency}
                  options={this.state.sourceCurrencyOptions}
                  onChange={this.handleSourceCurrencyChange}
                />
              </Grid.Column>
              <Grid.Column textAlign="center" verticalAlign="middle" width={2}>
                {/* icon button that allows to switches the source and target currency */}
                <Icon name="exchange" size="large" onClick={this.handleIconClick} />
              </Grid.Column>
              <Grid.Column width={7}>
                {/* dropdown element to select the target currency */}
                <CurrencyDropdown
                  currency={this.state.targetCurrency}
                  options={this.state.targetCurrencyOptions}
                  onChange={this.handleTargetCurrencyChange}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider horizontal>Output</Divider>

          {/* presents the information resulting from the user input */}
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={7}>
                <Segment color="red">
                  {' '}<CurrencyDisplay currency={this.state.sourceCurrency} amount={this.state.amount} />{' '}
                </Segment>
              </Grid.Column>
              <Grid.Column width={2}>
                <Icon name="long arrow right" size="large" />
              </Grid.Column>
              <Grid.Column width={7}>
                <Segment color="green">
                  {' '}<CurrencyDisplay currency={this.state.targetCurrency} amount={this.state.result} />{' '}
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Chart data={this.state.chartData} />

          <Divider horizontal>Implementation</Divider>

          <ImplementationInfo />

          <Divider horizontal>Impress</Divider>

          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;