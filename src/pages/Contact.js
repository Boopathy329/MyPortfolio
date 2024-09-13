import React from 'react'

const Contact = () => {
  const config = {
    Email :' Boopathy329@gmail.com',
    phone :' +91 7639927478',
  }
  return (
    <section className='flex flex-col bg-primary px-5 py-32 text-white' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className= ' text-4xl border-b-4 text-white border-second mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-3'>If you want to discuss more in detail, please Contact me</p>
            <p className='py-2'><span className='font-bold'>Email :</span>{config.Email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span>{config.phone}</p>
        </div>
    </section>
  )
}

export default Contact