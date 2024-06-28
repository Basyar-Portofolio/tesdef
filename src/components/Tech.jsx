import {BallCanvas} from "./canvas"
import {SectionWrapper} from "../hoc"
import { technologies} from "../constants"
import { technologies1} from "../constants"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-x-10 gap-y-5 my-0 py-0  ">
      <h1 className="text-l w-full text-center flex justify-center 
    text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-500"> BASIC.</h1>
    {technologies.map((technology) => (
      <div className="w-28 h-28 m-0 p-0" key={technology.name}>
      <BallCanvas icon={technology.icon}/>
      </div>
    ))}
    <h1 className="text-l w-full text-center flex justify-center 
    text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500 "> 
    ADVANCED.</h1>
    {technologies1.map((technology) => (
      <div className="w-28 h-28 m-0 p-0" key={technology.name}>
      <BallCanvas icon={technology.icon}/>
      </div>
    ))}
   
    </div>
  )

} 



export default SectionWrapper(Tech, "");