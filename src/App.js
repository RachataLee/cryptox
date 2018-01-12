import _ from 'lodash'
  
  class App extends Component {
   SYMBOLS = ['OMG', 'BTC', 'XRP']
 
    constructor(props){
      super(props)
      this.state = {}
  class App extends Component {
      let self = this
      axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=THB')
      .then(function (response) {
       let btc = _.find(response.data, ['symbol', 'BTC'])
       let omg = _.find(response.data, ['symbol', 'OMG'])
       self.setState({
         BTC: btc.price_thb,
         OMG: omg.price_thb
       let price_state = {}
       _.each(self.SYMBOLS, symbol => {
         price_state[symbol] = _.find(response.data, ['symbol', symbol]).price_thb
        })
       self.setState(price_state)
      })
      .catch(function (error) {
        console.log(error);
   class App extends Component {
    render() {
      return (
        <div>
         <Ticker symbol="BTC" price={this.state.BTC}/>
         <Ticker symbol="OMG" price={this.state.OMG}/>
         {
          _.map(this.SYMBOLS, symbol => <Ticker symbol={symbol} price={this.state[symbol]}/>)
         }
        </div>
      );
    }
