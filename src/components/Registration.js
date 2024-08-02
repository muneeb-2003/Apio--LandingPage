import React, { useState } from 'react';
import './Registration.css';
import LogoImg from './back1.png';
import EyeIcon from './visible.png';
import EyeSlashIcon from './hide.png';

const RegistrationForm = () => {
    const [formValues, setFormValues] = useState({
        companyName: '',
        employeeName: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleTogglePassword = () => {
        setFormValues({
            ...formValues,
            showPassword: !formValues.showPassword
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formValues);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        for (const key in formValues) {
            if (typeof formValues[key] === 'string' && formValues[key].trim() === '') {
                newErrors[key] = `Please fill in the ${key.split(/(?=[A-Z])/).join(' ')} field.`;
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formValues.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (formValues.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long.';
        }

        if (formValues.password !== formValues.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div className="container">
            <div className="form-wrapper">
                <div className="form-image">
                    <img src={LogoImg} alt="Background" className="background-image" /> {/* Background image */}
                </div>
                <div className="form-content">
                    <p className="subtitle">Transform your customer interactions with our innovative Voice API</p>
                    <h2 className="title">Register</h2>
                    <div className="input-container">
                        <div className="input-group">
                            <label htmlFor="companyName" className="input-label">Company Name</label>
                            {errors.companyName && <p className="error">{errors.companyName}</p>}
                            <input
                                className="input"
                                type="text"
                                name="companyName"
                                id="companyName"
                                placeholder="Company Name"
                                value={formValues.companyName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="employeeName" className="input-label">Employee Name</label>
                            {errors.employeeName && <p className="error">{errors.employeeName}</p>}
                            <input
                                className="input"
                                type="text"
                                name="employeeName"
                                id="employeeName"
                                placeholder="Employee Name"
                                value={formValues.employeeName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email" className="input-label">Email</label>
                            {errors.email && <p className="error">{errors.email}</p>}
                            <input
                                className="input"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password" className="input-label">Password</label>
                            {errors.password && <p className="error">{errors.password}</p>}
                            <div className="input-with-icon">
                                <input
                                    className="input"
                                    type={formValues.showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                                <div className="password-toggle" onClick={handleTogglePassword}>
                                    <img
                                        src={formValues.showPassword ? EyeSlashIcon : EyeIcon}
                                        alt={formValues.showPassword ? 'Hide Password' : 'Show Password'}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                            <div className="input-with-icon">
                                <input
                                    className="input"
                                    type={formValues.showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formValues.confirmPassword}
                                    onChange={handleChange}
                                />
                                <div className="password-toggle" onClick={handleTogglePassword}>
                                    <img
                                        src={formValues.showPassword ? EyeSlashIcon : EyeIcon}
                                        alt={formValues.showPassword ? 'Hide Password' : 'Show Password'}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="button" onClick={handleSubmit}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
