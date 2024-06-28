import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from 'react-tilt';
import { SectionWrapper } from "../hoc";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[2.5px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 10,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Perkenalan</p>
        <h2 className= {styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3.5 text-secondary text-[17px] max-w-2xl leading-[30px] text-center sm:text-left'
      >
        Saya memiliki Skill di bidang HR Khususnya Payroll dan User Experience, 
        memiliki pengalaman lebih dari 4 tahun di bidang HR.
        Saya sangat senang mempelajari apapun yang positif tentang hal baru
        dan selalu berusaha mengupgrade kemampuan yang saya miliki saat ini.
        <br/>Let's work together to bring your ideas to life !!!
      </motion.p>

      <div className='mt-16 flex flex-wrap gap-20 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");