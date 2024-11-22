import React, { useState } from 'react';
import Pizza from './pizza.png';

const PizzaCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('small');

  const priceMap = {
    small: 550,
    medium: 700,
    large: 900,
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const totalPrice = quantity * priceMap[size];

  return (
    <div className="pizza-card" style={{ 
      border: '1px solid #ccc', 
      padding: '16px', 
      borderRadius: '8px', 
      maxWidth: '300px',
      margin: '0 auto', // 使卡片水平居中
      marginTop: '50px' // 增加顶部间距以便更好地居中
    }}>
      <img src={Pizza} alt="Pizza" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      <h2>Pepperoni</h2>
      <p>Simple ingredients! Tomato sauce, Pepperoni sausage, and Mozzarella cheese</p>
      <select name="size" id="size" value={size} onChange={handleSizeChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <p>Unit Price: {priceMap[size]} ₽</p>
      <p>Total Price: {totalPrice} ₽</p>
      <div className="quantity-controls">
        <button onClick={handleDecrease}>-</button>
        <input type="text" value={quantity} readOnly style={{ width: '30px', textAlign: 'center' }} />
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default PizzaCard;
