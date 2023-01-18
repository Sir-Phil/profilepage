import React, { useState } from "react";
import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';

import './Work.scss'
import {filterWork} from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

const Work = () => {
    const [works, setWorks] = useState([]);
    const [ setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState(['All']);
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});

    const handleWorkFilter = (item) =>{
        setActiveFilter(item);
        setAnimateCard([{y: 100, opacity: 0}]);

        setTimeout(() => {
            setAnimateCard([{ y:0, opacity: 1}]);

            if(item === 'All'){
                setFilterWork(works);
            }else{
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500)
    };
    return(
        <>
            <h2 className="head-text">Areas Of <span> Product </span>Work</h2>
            <div className="app__work_filter">
                {['React Js', 'Asp.Netcore', 'Nodejs', 'Angular', 'Tech Write', 'All'].map((item, index) => (
                    <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`app__work-filter-item app__flex p-text ${activeFilter === item? 'item-active' : ''}`}
                    >
                        {item}</div>
                ))}
            </div>

            <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__wok-portfolio"
            >
            {filterWork.map((work, index)=>(
                <div className="app__work-item app_flex" key={index}>
                    <div className="app__work-img app__flex"
                    >
                        <img src={work.imgUrl} alt={work.title} />

                        <motion.div
                        whileHover={{ opacity: [0, 1]}}
                        transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5}}
                        className="app__work-hover app__flex"
                        >
                            <a href={work.projectUrl} target="_blank" rel="noneferrer">

                                <motion.div
                                whileInView={{scale: [0, 1]}}
                                whileHover={{ scale: [1, 0.90]}}
                                transition={{ duration: 0.25}}
                                className="app__flex"
                                >
                                    <AiFillEye />
                                </motion.div>
                            </a>
                            <a href={work.codeUrl}>
                                <motion.div
                                whileInView={{ scale: [0, 1]}}
                                whileHover={{scale: [1, 0.90]}}
                                transition={{ duration: 0.25}}
                                className="app__flex"
                                >
                                    <AiFillGithub/>
                                </motion.div>
                            </a>
                        </motion.div>
                    </div>

                    <div className="app__work-content app__flex">
                        <h4 className="bold-text">{work.title}</h4>
                        <p className="p-text" style={{marginTop : 10}}>{work.description}</p>

                        <div className="app__work-tag app__flex">
                            <p className="p-text">{work.tags[0]}</p>
                        </div>
                    </div>
                </div>
            ))}
            </motion.div>
        </>
    )
}

export default AppWrap(
    MotionWrap (Work, 'app__works'),
    'works',
    'app__primarybg'
    );