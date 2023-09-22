// FeaturedCompanies.js
import React from 'react';
import '../assets/css/featuredcom.css';

function FeaturedCompanies() {
  const featuredCompanies = [
    { id: 1, name: 'Apple', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA130ECB9S8KCMu_a8Qx6-4KS7Ke9CVZGGrdDK3MxW&s' },
    { id: 2, name: 'Google', logo: 'data:image/png;base64,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' },
    { id: 3, name: 'Amazon', logo: 'data:image/png;base64,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' },
    { id: 4, name: 'Accenture', logo: 'data:image/png;base64,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' },
    
  ];

  return (
    <section className="featured-companies">
      <div className="container">
        <h2>Featured Companies</h2>
        <div className="company-list">
          {featuredCompanies.map((company) => (
            <div key={company.id} className="company">
              <img  className="img" src={company.logo} alt={company.name} />
              <p>{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCompanies;