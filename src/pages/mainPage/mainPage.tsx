import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { idText } from 'typescript';
import { RootState } from '../../app/store';
import { Item, getItem, getItems } from '../../data/ItemData';
import styles from './mainPage.module.scss';
import Card from '../../components/Card/Card';

const Counter = () => {
  const count = useSelector((state: RootState) => state.addToCart.cartItems);
  const dispatch = useDispatch();
  const [visibleItems, setVisibleItems] = useState<Item[]>();
  const [showMoreCounter, setShowMoreCounter] = useState(3);
  useEffect(() => {
    setVisibleItems(getItems());
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.maincontainer}>
        {visibleItems?.slice(0, showMoreCounter).map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title=""
            price={0}
            imgSrc=""
            count={0}
          />
        ))}

      </div>
      <button
        disabled={visibleItems && showMoreCounter >= visibleItems.length}
        onClick={() => setShowMoreCounter(showMoreCounter + 3)}
      >
        Show more
      </button>
    </div>
  // <div>
  //   <div>
  //     <button
  //       aria-label="Increment value"
  //       onClick={() => dispatch(increment())}
  //     >
  //       Increment
  //     </button>
  //     <span>{count}</span>
  //     <button
  //       aria-label="Decrement value"
  //       onClick={() => dispatch(decrement())}
  //     >
  //       Decrement
  //     </button>
  //   </div>
  // </div>
  );
};
export default Counter;
