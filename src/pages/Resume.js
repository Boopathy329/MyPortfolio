import React from 'react'
import ResumeImg from '../assets/resume.jpg';
const Resume = () => {
  const config ={
     link: 'https://drive.google.com/file/d/1-hQ7xM1GwoF5dkN8hOS2fM7b69hZ6Lwb/view?usp=drive_link'
  }
  return (
    <section className='flex flex-col md:flex-row bg-second justify-center px-5' id='Resume'>
    <div className='py-5 md:w-1/2 flex justify-center md:justify-end
    '>
        <img className='w-[300px]' alt='#' src={ResumeImg}/>
    </div>
    <div className='  md:w-1/2 flex justify-center'>
    <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 mb-5 font-bold w-[140px] border-primary'>Resume</h1>
        <p className='pb-5'>You can view my resume <a className='btn' target='blank' href={config.link}>Download</a></p>
       
        </div>
    </div>
   </section>
  )
}

export default Resume