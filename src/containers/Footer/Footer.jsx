import React,{ useState } from "react";
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';

const Footer = () => {

    const [formValue, setFormValue] = useState ({name:'', email: '', message:''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading ] = useState(false);

    
    const {username, email, message} = formValue;

    const handleInChangeInput = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            name: formValue.name,
            email: formValue.email,
            message: formValue.message,
        };
    }

    return(
        <>
        <h2 className="head-text"> You'll have to consider Hire me</h2>

        <div className="app__footer-cards">
            <div className="app__footer-card">
                <img src={images.email} alt="email" />
                <a href="mailto:phil9icy@gmail.com"  className="p-text">phil9icy@gmail.com</a>
            </div>
            <div className="app__footer-card">
                <img src={images.mobile} alt="mobile" />
                <a href="tel: +234 (080)30-417087" className="p-text">+234 (080)30-417087</a>
            </div>
        </div>
        {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
            <div className="app__flex">
                <input 
                className="p-text" 
                type="text" placeholder="Enter Your Name"
                name="username"
                value={username}
                onChange={handleInChangeInput}
                />
            </div>
            <div className="app__flex">
                <input 
                type="email"
                className="p-text"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={handleInChangeInput}
                />
            </div>
            <div>
                <textarea 
                className="p-text"
                placeholder="Write Your Message"
                value={message}
                name="message" 
                onChange={handleInChangeInput}
                />
            </div>
            <button
            type="button"
            className="p-text"
            onClick={handleSubmit}
            >
                {!loading ? 'Send Message' : 'Seeding...'}
            </button>
        </div>
        ) : (
            <div>
            <h3 className="head-text">
                I really Appreciate you for getting in touch!
            </h3>
        </div>
        )}
        </>
    )
}

export default AppWrap (
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
    );