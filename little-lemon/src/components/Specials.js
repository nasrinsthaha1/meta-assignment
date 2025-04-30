import React from 'react';
import './Specials.css';

const specials = [
  {
    id: 1,
    name: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/images/image-1.jpg'
  },
  {
    id: 2,
    name: 'Bruschetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: '/images/image-2.jpg'
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: '/images/image-3.jpg'
  }
];

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button className="online-menu-button">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specials.map(special => (
          <div key={special.id} className="special-card">
            <img src={special.image} alt={special.name} />
            <div className="special-content">
              <div className="special-header">
                <h3>{special.name}</h3>
                <span className="price">{special.price}</span>
              </div>
              <p>{special.description}</p>
              <button className="order-button">Order a delivery</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials; 