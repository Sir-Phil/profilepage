import React, { useState } from "react";
import { motion } from "framer-motion";

import './Testimonial.scss';
import { brands, testimonials } from "../../constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap } from "../../wrapper";


const Testimonial = () => {
    const [ setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [setBrands] = useState([]);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };
    
    return(
        <>
        {testimonials.length && (
            <>
                <div className="app__testimonial-item app__flex">
                    <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
                    <div className="app__testimonial-content">
                        <p className="p-text">{testimonials[currentIndex].feedback}</p>
                        <div>
                            <h4>{testimonials[currentIndex].name} </h4>
                            <h5>{testimonials[currentIndex].company}</h5>
                        </div>
                    </div>
                </div>
                
                <div className="app__testimonial-btn app__flex">
                    <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex -1)}>
                        <HiChevronLeft />
                    </div>

                    <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length -1 ? 0 : currentIndex + 1)}>
                        <HiChevronRight />
                    </div>
                </div>
            </>
        )}
        
        <div className="app__testimonial-brand app__flex">
            {brands.map((brand) => (
                <motion.div
                whileInView={{ opacity: [0, 1]}}
                transition={{ duration: 0.5, type: 'tween'}}
                key={brand._id}
                >
                    <img src={brand.imgUrl} alt={brand.name} />
                </motion.div>
            ))}
        </div>
        </>
    )
}
export default AppWrap (Testimonial, 'testimonial')