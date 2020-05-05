import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import axios from '../../../axios-orders';

import classes from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Kiriakos Papachristou',
        address: {
          street: 'MyStreet12',
          zipCode: '1234',
          country: 'Spain',
        },
        email: 'kiripap@test.com',
      },
      deliveryMethod: 'fastest', 
    };

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading:false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading:false });
      });
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your name" />
        <input className={classes.Input} type="email" name="email" placeholder="Your email" />
        <input className={classes.Input} type="text" name="street" placeholder="Your street" />
        <input  className={classes.Input} type="text" name="postalCode" placeholder="Your postal Code" />
        <Button 
          btnType="Success"
          clicked={() => this.orderHandler()}>Send your order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Add your contact details</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;