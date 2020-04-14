import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey => {
    return (
      <li key={ingredientKey}>
        <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
      </li>);
    })

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>You selected the following delicious ingredients</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}€</strong></p>
      <p>Ready to order this masterpiece?</p>
      <Button
        btnType="Danger"
        clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button
        btnType="Success"
        clicked={props.purchaseContinued}>CONTINUE</Button>
    </React.Fragment>
  );
};

export default orderSummary;