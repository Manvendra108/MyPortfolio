import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-10 flex text-white items-center justify-between mt-5 fixed'>
        <div className='text-3xl ml-4 font-bold border-purple-700 rounded-full border-2 '>
    .M.
        </div>
        <div className=''>
             <button className='mr-4 rounded-md ' bg><img  className='h-10 w-10' src="./menu.png" alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar