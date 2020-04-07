import React from 'react';

import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

const burger = props => {
  let tranformedIngredients = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key+i} type={key} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (tranformedIngredients.length === 0) {
    tranformedIngredients = <p>Please start adding ingredients!</p>
  }

  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {tranformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;