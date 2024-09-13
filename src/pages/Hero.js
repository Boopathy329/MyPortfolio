import React from 'react'
import HeroImg from '../assets/hero.png'

import { FaFacebookSquare, FaTwitterSquare , FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Hero = () => {
 const config = {
  subtitle: 'Im a Full-stack developer and designer'
 }

  return (
    <section  className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className=' md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font'>Hi,<br/> Im <span className='text-black'>S</span> Boopathy
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex text-white py-3 '>
          <a href='#' className='pr-2 hover:text-black '> <FaFacebookSquare size={30} /></a>
          <a href='#' className='pr-2  hover:text-black'> <FaTwitterSquare size={30} /></a>
          <a href='#' className='pr-2  hover:text-black'><FaLinkedin size={30} /></a>
         <a href='#' className='pr-2  hover:text-black'><FaGithubSquare  size={30}/></a> 
      </div>
     
    
    </div>
    <img  className=' md:w-1/3' src={HeroImg}/>
   
    </section>
   
  )
}

export default Hero