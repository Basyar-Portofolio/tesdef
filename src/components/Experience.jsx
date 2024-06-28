import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import {styles} from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({Experience}) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#040720",
      color: "#fff" }}
      contentArrowStyle={{ borderRight: '7px solid #f1f1f1' }}
      date={Experience.date}
      iconStyle={{ background: Experience.iconBg }}
      icon={
        <div className=" flex justify-center items-center
        w-full h-full">
          <img
            src={Experience.icon}
            alt={Experience.company_name}
            className="w-[90%] h-[80%] object-contain "
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {Experience.title}</h3>
          <p className=" text-secondary text-[16px] font-semibold"
            style={{ margin: 0}}>
            {Experience.company_name}
          </p>
      </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {Experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px]
              pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}


        </ul>
      </VerticalTimelineElement>
)

  const Experience = () => { 
  return (
    <>
    <motion.div variants={textVariant()}
    initial={{ color: "yellow" }}
    animate={{ color: "white" }}
    >
      <h2 className={styles.sectionHeadText}>
        Work Experience
      </h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline animated lineColor="#f1f1f1">
      {experiences.map((Experience, index) => (
        <ExperienceCard key={index} Experience
        ={Experience} />
      ))}
      </VerticalTimeline>
    </div>


    </>


  )
}

export default SectionWrapper(Experience, "work");

