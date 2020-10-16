import React,{Component} from 'react';

export class OrderTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{padding: "45px"}}>
                <h2 className="title">Orders</h2>
                <table className="table">
                <thead>
                    <tr>
                        <th>Order Key</th>
                        <th>Status</th>
                        <th>Total Amount</th>
                        <th>Item Count</th>
                        <th>Payment Method</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((item) => (
                        <tr key={item.id}>
                        <td>
                          <span>{item.id}</span>
                        </td>
                        <td>
                          <span>{item.status}</span>
                        </td>
                        <td>
                          <span>{item.total}</span>
                        </td>
                        <td>
                          <span>{item.line_items.length}</span>
                        </td>
                        <td>
                          <span>{item.payment_method}</span>
                        </td>
                      </tr>
                    ))}
                </tbody>
                </table>
            </div>
        )
    }
}
