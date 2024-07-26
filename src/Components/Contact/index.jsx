import React from 'react'

function Contact() {
  return (
    <div className='w-full'>

    <div className=' flex flex-col ml-16 gap-3'>
        <div className='text-gray-400'><p>CONTACT</p></div>
        <div className='text-purple-700 font-normal text-6xl ml-3'><h1>Contact</h1></div>
        <div className='text-white text-2xl font-semibold ml-3'><h2>Get In Touch...</h2></div>

    </div>
    <div className='flex flex-col h-auto w-[100vh]  ml-[55vh] gap-12 mt-10 '>
      <input 
      type="text"
      placeholder="Your name"
      name="name"
      className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
      required
       />
       <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
      <textarea
            placeholder="Your message"
            name="message"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-1 rounded shadow outline-none h-40 border-purple-600  "
            required
          />
      <button class="relative ml-52 mb-3 h-[50px] w-40 overflow-hidden border rounded-xl border-purple-800 bg-black text-white shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-purple-700 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-purple-700 after:duration-500 hover:text-white hover:shadow-purple-600 hover:before:h-2/4 hover:after:h-2/4 hover:after:text-black"><span class="relative z-10">SUBMIT</span></button>
    </div>

    </div>
  )
}

export default Contact