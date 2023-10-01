import { useMemo, useState } from 'react';

export default function UseMemo() {
  const [price, setPrice] = useState(0);
  const [prices, setPrices] = useState([]);

  const totalPrice = prices.reduce((total, price) => {
    console.log('caculating..');
    return total + price;
  }, 0);

  /*
  const totalPrice = useMemo(() => {
    const result = prices.reduce((total, price) => {
      console.log('caculating..');
      return total + price;
    }, 0);

    return result;
  }, [prices]);
  */

  return (
    <>
      <h2>UseMemo</h2>
      <div>
        <label htmlFor='price'>Price: </label>
        <input
          id='price'
          type='text'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          onClick={() => {
            setPrices([...prices, Number(price)]);
            setPrice(0);
          }}
        >
          Add
        </button>
      </div>
      Total price: {totalPrice}
    </>
  );
}
