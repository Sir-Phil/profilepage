import React, {useEffect, useState} from "react";
import { motion } from 'framer-motion';
import {AppWrap, MotionWrap} from "../../wrapper"

import './About.scss';
import abouts from "../../constants/about";



const About = () => {
    return(
        <>
        <h2 className="head-text">Quality <span>Product <br /> requires</span> Solid Software Design Pattern</h2>

            <div className="app__about-profile">
                {abouts.map((about, index) => (
                    <motion.div
                    whileInView={{opacity: 1}}
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.5, type: 'tween'}}
                    className="app__about-items"
                    key={about.title + index}
                    >
                        <img src={about.imageUrl} alt={about.title} />
                        <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
                        <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'), 
    'about',
    'app__whitebg',
    )