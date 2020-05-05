import React, { Component } from 'react';

import Order from '../../components/Order/Order';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }

  fetchedOrders = (response) => {
    let fetchedData = [];
    for(let dataKey in response) {
      fetchedData.push({
        ...response[dataKey],
        id: dataKey,
      });
    }

    return fetchedData;
  };

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = this.fetchedOrders(res.data);
        this.setState({
          orders: fetchedOrders,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price} />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);