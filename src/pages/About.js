import React from 'react'
import AboutImg from '../assets/about.png'
const About = () => {

  const config = {
    line1: 'Hi, My name is S Boopathy. I am a Full stack web developer. I built beautifulwebsites with React.js and TailwindCSS + Bootstrap',
    line2: 'I am proficient in Frontend skills like React.js,TailwindCSS,Css and many more.',
    line3: 'In backend I know Node.js, Express.js, MongoDB and Mongoose, Mysql, django'
  }
  return (
   <section className='flex flex-col md:flex-row bg-second justify-center px-5 ' id='about'>
    <div className='py-5 md:w-1/2'>
        <img src={AboutImg}/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
    <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 mb-5 font-bold w-[170px] border-primary'>About Me</h1>
        <p className='pb-4'>{config.line1}</p>
        <p className='pb-4'>{config.line2}</p>
        <p className='pb-4'>{config.line3}</p>
        </div>
    </div>
   </section>
  )
}

export default About