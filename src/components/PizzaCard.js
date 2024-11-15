import React, { useState } from 'react';
import Pizza from './pizza.png';

const PizzaCard = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="pizza-card">
      <img src={Pizza} alt="Pizza" />
      <h2>Пепперони</h2>
      <p>Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла</p>
      <select name="diameter" id="diameter">
        <option value="small">Маленькая</option>
        <option value="medium">Средняя</option>
        <option value="large">Большая</option>
      </select>
      <p>от 550 ₽</p>
      <div className="quantity-controls">
        <button onClick={handleDecrease}>-</button>
        <input type="text" value={quantity} readOnly />
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default PizzaCard;