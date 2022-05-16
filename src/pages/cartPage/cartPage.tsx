import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import styles from './cartPage.module.scss';

const cartPage = () => {
  const cartItems = useSelector((state:RootState) => state.addToCart);
  const [totalSum, setTotalSum] = useState(0);

  // useEffect(() => {
  //   // cartItems.cartItems.flatMap((item) => setTotalSum(totalSum + (item.count * item.price)));
  // }, [cartItems]);
  return (

    <div
      className={styles.maincontainer}
    >
      <h3>Your Cart</h3>
      {cartItems && cartItems.cartItems.map((item) => (
        <div className={styles.container}>
          <div className={styles.left}>
            <img src={item.imgSrc} alt="bilža" height="70" width="70" />
            <h4>{item.title}</h4>
          </div>
          <div className={styles.right}>
            <span>
              Price per unit:
              {item.price}
            </span>
            <span>
              Amount:
              {item.count}
            </span>
            <span>
              Total:
              {(item.count * item.price).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
      <h3>
        Total:
        {' '}
        {cartItems.cartItems.reduce((acc, { price, count }) => acc + price * count, 0)}
        €
      </h3>
    </div>
  );
};
export default cartPage;
