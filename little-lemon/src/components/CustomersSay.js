import React from 'react';
import './CustomersSay.css';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    rating: 5,
    image: '/images/customer1.jpg',
    review: 'The food was absolutely delicious! The service was excellent and the atmosphere was perfect for a family dinner.'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 4,
    image: '/images/customer2.jpg',
    review: 'Great Mediterranean food with a modern twist. The lemon dessert was to die for!'
  },
  {
    id: 3,
    name: 'Michael Brown',
    rating: 5,
    image: '/images/customer3.jpg',
    review: 'The Greek salad was fresh and flavorful. Will definitely be coming back for more!'
  },
  {
    id: 4,
    name: 'Emily Davis',
    rating: 5,
    image: '/images/customer4.jpg',
    review: 'Amazing experience! The staff was friendly and the food was prepared to perfection.'
  }
];

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <div className="customer-info">
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
            </div>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay; 