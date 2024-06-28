import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'
import {motion} from "framer-motion"
import {fadeIn, textVariant} from "../utils/motion"
import {styles} from "../styles"

import sertifitkat1 from "../assets/sertifikat/sertifikat1.png"
import sertifitkat2 from "../assets/sertifikat/sertifikat2.png"
import sertifitkat3 from "../assets/sertifikat/sertifikat3.png"


const Certificate = () => {
  return (
    <>
    <motion.div variants={textVariant()}
    initial={{ color: "yellow" }}
    animate={{ color: "white" }}
    >
      <h2 className={styles.sectionHeadText}>
      Certificate.
      </h2>
    </motion.div>



    <div className="w-full flex h-full justify-center shadow-xl">
      <motion.div
      variants={fadeIn("","",0.1,1)}
      className="text-white shadow-md  shadow-stone-600 sm:h-[435px] h-[250px] leading-[30px]
      flex justify-center items-center mt-10 sm:w-[700px] w-full"
      >
        <div className="carousel w-full h-full">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img src={sertifitkat1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle opacity-20">❮</a> 
            <a href="#slide2" className="btn btn-circle opacity-20">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img src={sertifitkat2} className='w-full' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle opacity-20">❮</a> 
            <a href="#slide3" className="btn btn-circle opacity-20">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-full">
          <img src={sertifitkat3} className='w-full' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle opacity-20">❮</a> 
            <a href="#slide1" className="btn btn-circle opacity-20">❯</a>
          </div>
        </div> 
      </div>
      </motion.div>
     
    </div>
    </>
  )
}

export default SectionWrapper(Certificate, "Certificate")