import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';

const ContactUs = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage] = useState('');

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        setErrors({ ...errors, [event.target.name]: '' });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:5001/contact', values);
                if (response.status === 200) {
                    alert("we Will Contect You As Soon as Possible !!");

                    setTimeout(() => {
                        window.location.href = 'http://localhost:3000/contect_us';
                    }, 100);
                } else {
                    console.error('Message sending failed:', response.data.message);
                }
            } catch (error) {
                console.error('Message sending failed:', error);
            }
        }
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};

        if (!values.name.trim()) {
            newErrors.name = "Name cannot be empty";
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!values.email.trim()) {
            newErrors.email = "Email cannot be empty";
            valid = false;
        } else if (!emailRegex.test(values.email)) {
            newErrors.email = "Please enter a valid email address";
            valid = false;
        }

        if (!values.message.trim()) {
            newErrors.message = "Message cannot be empty";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    return (
        <div className="contact-container">
            <div className="contact-image">
            </div>
            <div className="contact-form">
                <div className='imgbrand'>
                    <a href='/quoteflixhome'><img src={require("./QuoteFlix.png")} alt="Quoteflix" style={{ cursor: "pointer" }} className='contactuslogo' /></a>
                </div>
                <h2 className="contactustitle">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="contactusinput_field">
                        <input type="text" placeholder="Name" className="contactusinput" name='name' value={values.name} onChange={handleChange} />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="contactusinput_field">
                        <input type="text" placeholder="Email" className="contactusinput" name='email' value={values.email} onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="contactusinput_field">
                        <textarea placeholder="Message" className="contactusinput" name='message' value={values.message} onChange={handleChange} />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <div className="contectusbtn">
                        <button className="contactusbutton" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
                <div className="success-message">{successMessage}</div>
            </div>
        </div>
    );
};

export default ContactUs;
