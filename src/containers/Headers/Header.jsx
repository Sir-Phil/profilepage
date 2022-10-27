import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import './Header.scss';
import AppWrap from "../../wrapper/AppWrap";

const scaleVariants = {
    whileInView:{
        scale: [0,1],
        opacity: [0,1],
        transition: {
            duration:1,
            ease: 'easeInOut',
        },
    },
};

const Header = () => {
    return(
        <div className="app__header app__flex">
            <motion.div 
            whileInView={{x: [-100, 0], opacity:[0, 1]}}
            transition={{duration:0.5}}
            className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{marginLeft: 20}}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Philip</h1>
                        </div>
                    </div>
                    <div className="tag-cpm app__flex">
                        <p className="p-text">Software Engineeer</p>
                        <p className="p-text">Technical Writer</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration: 0.5, delayChildren: 0.5}}
            className="app__header-img"
            >
                <img src={images.philip} alt="profile_bg" />
                <motion.img
                whileInView={{ scale: [0,1]}}
                transition={{ duration:1, ease:'easeInOut'}}
                src={images.circle}
                alt="profile_circle"
                className="overlay_circle"
                />
            </motion.div>

            <motion.div 
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circle"
            >
                {[images.flutter, images.redux,images.sass].map((circle, index)=>(
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="profile_bg" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default AppWrap(Header, 'home')