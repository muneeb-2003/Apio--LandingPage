import React from 'react';
import './features.css';
import LogoImg1 from './247.png';
import LogoImg2 from './integration.png';
import LogoImg3 from './insurance.png';
import LogoImg4 from './no download.png';
import LogoImg5 from './money.png';
import LogoImg6 from './data.png';

const features = [
    {
        title: 'Pushing of Stats',
        description: 'APIO continuously pushes updated performance metrics to your dashboard.',
        logo: LogoImg6,
    },
    {
        title: '24/7 Tech Support',
        description: 'Our dedicated team is always available to help you resolve issues.',
        logo: LogoImg1,
    },
    {
        title: 'Anonymisation',
        description: 'APIO ensures that sensitive data is anonymized, maintaining compliance with privacy standards..',
        logo: LogoImg3,
    },
    {
        title: 'No Installation',
        description: ' Access your API monitoring dashboard from anywhere, at any time.',
        logo: LogoImg4,
    },
    {
        title: 'Cost-Effective',
        description: 'APIO offers budget-friendly solutions tailored to meet your needs.',
        logo: LogoImg5,
    },
    {
        title: 'Integration',
        description: ' Our platform supports a wide range of APIs, ensuring smooth and hassle-free integration.',
        logo: LogoImg2,
    },
];

const Features = () => {
    return (
        <div className="features-section">
            <h2 className="features-heading">Features</h2>
            <div className="features-container">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <img src={feature.logo} alt={`${feature.title} Logo`} className="feature-logo" />
                        <div className="feature-text">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
