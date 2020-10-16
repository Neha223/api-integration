import React,{Component} from 'react';

export class ProductTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{padding: "45px"}}>
                <h2 className="title">Products</h2>
                <table className="table">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Stock Status</th>
                        <th>Regular Price</th>
                        <th>Sale Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((item) => (
                        <tr key={item.id}>
                        <td>
                          <span>{item.id}</span>
                        </td>
                        <td>
                          <span>{item.name}</span>
                        </td>
                        <td>
                          <span>{item.stock_status}</span>
                        </td>
                        <td>
                          <span>{item.regular_price}</span>
                        </td>
                        <td>
                          <span>{item.sale_price}</span>
                        </td>
                      </tr>
                    ))}
                </tbody>
                </table>
            </div>
        )
    }
}
