import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { userAPI } from './api/userAPI';
import { UserTable, LoadButton } from './components';

class App extends Component {

  constructor() {
    super();

    this.state = {
      data:[],
      header: []
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
        header: ['Order Key','Status','Total AMount','Item Count']
      });
    });
   
  }
  onLoadProductTables() {

    userAPI.fetchUsers()
      .then((users) => {
        this.setState({
          users,
        })
      });
  }

  render() {
    return (
      <div>
        <LoadButton
          onLoad={this.onLoadProductTables}
          title="Products"
        />
        <LoadButton
          onLoad={this.onLoadOrderTables}
          title="Orders"
        />
        <div>
          <UserTable users={this.state.data} fields={this.state.header}/>          
        </div>
      </div>
    );
  }
}

export default App;
