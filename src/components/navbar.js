import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import "./Navbar.css";
import LogoImg from "./logo.png";
import ClientScroll from "./ClientScroll";
import Features from "./features";
import WhyAPIO from "./WhyAPIO";
import ContactUs from "./ContactUs";
import Usecases from "./Usecases";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const NavBar = () => {
    const navigate = useNavigate();

    function gotoreg() {
        navigate("/registration");
    }


    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        // Clean up previous chart instance on component unmount
        if (chartInstance) {
            chartInstance.destroy();
        }

        // Initialize new chart instance
        const ctx = chartRef.current.getContext("2d");
        const newChartInstance = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Orange", "purple"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [5, 5, 5, 5, 5, 5],
                        backgroundColor: [
                            "#FFBF00",
                            "#FF7518",
                            "#EC5800",
                            "#F08000",
                            "#E49B0F",
                            "#FFAA33",
                        ],
                        borderColor: [
                            "#FFBF00",
                            "#FF7518",
                            "#EC5800",
                            "#F08000",
                            "#FFAA33",
                            "#E49B0F",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                cutout: 170,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                let label = tooltipItem.label || "";
                                if (label) {
                                    label += ": ";
                                }
                                const value = tooltipItem.raw || "";
                                switch (tooltipItem.label) {
                                    case "Red":
                                        return "Pushing of Stats";
                                    case "Blue":
                                        return "24/7 Tech Support";
                                    case "Yellow":
                                        return "Anonymisations";
                                    case "Green":
                                        return "No Installation";
                                    case "Orange":
                                        return "Cost-Effective";
                                    case "purple":
                                        return "Integration";
                                    default:
                                        return `${label}${value}`;
                                }
                            },
                        },
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        titleColor: "white",
                        bodyColor: "white",
                        borderColor: "rgba(255, 255, 255, 0.7)",
                        borderWidth: 1,
                    },
                    legend: {
                        display: false,
                    },
                },
            },
        });

        // Set the new chart instance to state
        setChartInstance(newChartInstance);

        // Clean up on unmount
        return () => {
            if (newChartInstance) {
                newChartInstance.destroy();
            }
        };
    }, []);

    const smoothScroll = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={LogoImg} alt="Company Logo" className="logo" />
                </div>
                <div className="nav-content">
                    <a onClick={() => smoothScroll("#APIO")} className="nav-link">
                        Why APIO
                    </a>
                    <a onClick={() => smoothScroll("#features")} className="nav-link">
                        Features
                    </a>
                    <a onClick={() => smoothScroll("#clients")} className="nav-link">
                        Clients
                    </a>
                    <a onClick={() => smoothScroll("#contactus")} className="nav-link">
                        Contact Us
                    </a>
                </div>
                <button className="nav-button">Login</button>
                <button className="reg-button" onClick={gotoreg}>Register</button>
            </div>
            <div className="main-content">
                <div className="text-content">
                    <h1>Welcome To APIO</h1>
                    <p>
                        A Voice API solution that allows enterprises to engage into voice
                    </p>
                    <p>communication with their customer using some</p>
                    <p>of the Voice API features. </p>
                    <button className="get-started-button">Let's Get Started</button>
                </div>
                <div className="chart-container">
                    <div className="chart-wrapper">
                        <canvas ref={chartRef} />
                    </div>
                </div>
            </div>
            <div id="APIO">
                <WhyAPIO />
            </div>
            <div id="Usecase">
                <Usecases />
            </div>
            <div id="features">
                <Features />
            </div>
            <div id="clients">
                <ClientScroll />
            </div>
            <div id="contactus">
                <ContactUs />
            </div>
            <Footer />

        </div>
    );
};

export default NavBar;
