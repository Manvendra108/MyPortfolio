import React from 'react'

function Button() {
  return (
    <div className='ml-20 mt-5 mb-2 '>
        {/* <button className='text-white border-purple-800 border-2 p-3 rounded-md w-36 '>Let's Talk</button> */}
        <button class="relative h-[50px] w-40 overflow-hidden border rounded-xl border-purple-800 bg-black text-white shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-purple-700 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-purple-700 after:duration-500 hover:text-white hover:shadow-purple-600 hover:before:h-2/4 hover:after:h-2/4 hover:after:text-black"><span class="relative z-10">Know More</span></button>
    </div>
  )
}

export default Button