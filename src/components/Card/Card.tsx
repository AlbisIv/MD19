/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { decrement, addToCart } from '../../features/addToCart/addToCartSlice';
import { Item, getItem, getItems } from '../../data/ItemData';
import styles from './Card.module.scss';

// ! Kāpēc maps cardam padod objektu??
// TODO

const Card = (item: Item) => {
  const [visibleItem, setVisibleItem] = useState<Item>();
  const [inputCount, setInputCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setVisibleItem(getItem(item.id));
  }, []);

  return (
    <div
      key={visibleItem && visibleItem.id}
      className={styles.itemcard}
    >
      <div
        className={styles.top}
      >
        <img src={visibleItem && visibleItem.imgSrc} alt="Item" />
        <h4 className={styles.title}>{visibleItem && visibleItem.title}</h4>
        <span>
          {visibleItem && visibleItem.price}
          {' '}
          €
        </span>
      </div>
      <div
        className={styles.bottom}
      >
        <div
          className={styles.inputs}
        >
          <button
            disabled={(inputCount === 0)}
            onClick={() => setInputCount(inputCount - 1)}
          >
            -
          </button>
          <span>
            {inputCount}
          </span>
          <button
            onClick={() => { setInputCount(inputCount + 1); }}
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(addToCart({ ...visibleItem, count: inputCount }));
            setInputCount(1);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Card;
