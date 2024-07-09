import React from 'react';
import './WhyAPIO.css';
import DashboardImage from './APIOSS.PNG';

const WhyAPIO = () => {
    return (
        <div className="why-apio-section">
            <div className="why-apio-text">
                <h2>Why APIO</h2>
                <p>
                    APIO offers a comprehensive solution for monitoring and analyzing API statistics,
                    tailored to meet the needs of our clients. Our platform features a user-friendly
                    dashboard that provides detailed insights into API hits, including real-time monitoring,
                    graphical representation of received and failed API calls, and filtering options by month,
                    week, and year. Additionally, APIO includes features like call feedback, user management,
                    and server management, allowing you to add, remove, and view user details, as well as
                    manage servers effectively. We prioritize delivering personalized, on-time, and
                    budget-friendly solutions to ensure your success.
                </p>
            </div>
            <div className="dashboard-image">
                <img src={DashboardImage} alt="APIO Dashboard" />
            </div>
        </div>
    );
};

export default WhyAPIO;
