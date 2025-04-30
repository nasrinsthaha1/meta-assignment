import React from 'react';
import './Chicago.css';

function Chicago() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
          </p>
          <p>
            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
          </p>
        </div>
        <div className="about-images">
          <img src="/images/mario-and-adrian.jpg" alt="Mario and Adrian" className="main-image" />
          <img src="/images/restaurant.jpg" alt="Restaurant interior" className="secondary-image" />
        </div>
      </div>
    </section>
  );
}

export default Chicago; 