import React from 'react';

import BuildControl from './BuildControl/Build.Control';

import classes from './BuildControls.module.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Total Price: <strong>{props.price.toFixed(2)}€</strong></p>
    {controls.map(ctrl => (
      <BuildControl 
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}>{props.isAuth ? 'Checkout' : 'Register to order'}</button>
  </div>
);

export default buildControls;