import React,{Component} from 'react';
import './App.css';
import { OrderTable } from './components/OrderTable';
import { ProductTable } from './components/ProductTable';

class App extends Component {

  constructor() {
    super();

    this.state = {
      data:[],
      header: [],
      title: "",
      isOrderBtnActive: false,
      isProductBtnActive: false
    };

    this.onLoadProductTables = this.onLoadProductTables.bind(this);
    this.onLoadOrderTables = this.onLoadOrderTables.bind(this);
  }

  onLoadOrderTables() {
    fetch(' https://indianwebspace.com/wp-json/wc/v3/orders?consumer_key=ck_3bff9b6fde5bf86ab8d995cac18da654dc753c3b&consumer_secret=cs_0453f9ddb434bfa44567a5f9ead17ee4ca428bb2')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      this.setState({
        data:data,
        header: ['Order Key','Status','Total Amount','Item Count'],
        title: 'Orders',
        isOrderBtnActive: true,
        isProductBtnActive: false
      });
    });
   
  }
  onLoadProductTables() {

    fetch(' https://indianwebspace.com/wp-json/wc/v3/products?consumer_key=ck_3bff9b6fde5bf86ab8d995cac18da654dc753c3b&consumer_secret=cs_0453f9ddb434bfa44567a5f9ead17ee4ca428bb2')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      this.setState({
        data:data,
        header: ['Order Key','Status','Total Amount','Item Count'],
        title: 'Products',
        isProductBtnActive: true,
        isOrderBtnActive: false
      });
    });
  }

  render() {
    return (
      <div>
        <button className={ this.state.isProductBtnActive == true ? 'load-button active' : 'load-button'} onClick={this.onLoadProductTables}>Products</button>
        <button className={ this.state.isOrderBtnActive == true ? 'load-button active' : 'load-button'} onClick={this.onLoadOrderTables}>Orders</button>
        <div>
          {this.state.title == 'Orders' ? <OrderTable data={this.state.data}/> : this.state.title == 'Products' ? <ProductTable data={this.state.data}/> : <div style={{padding:"80px",textAlign: 'center',fontWeight:"bold"}}>Please click on buttons to display data</div>}
        </div>
      </div>
    );
  }
}

export default App;
