import React from 'react'

function Footer() {
  return (
    <div className='bg-purple-600 w-full h-[600px] '>
     <div> <div className=' absolute pt-28 '> <img className='' src="./background.png" alt="" /></div>
            <div className=' relative  pt-72 pl-[30%] '> <img className='h-28 w-28' src="./cyclist.gif" alt="" /></div>
            {/* <div className='relative h-auto w-96 ml-[45%]  '> <img className='h-48 w-80 '  src="./src/foot-icons/volkswagen.gif" alt="" /></div> */}
            
     </div>
     {/* <div className='bg-purple-600  '><img className='h-48 cover object-fill rotate-180 ' src="./src/foot-icons/footer-curve.svg" alt="" /></div> */}
     <div className='bg-purple-600 text-center font-semibold text-4xl '><h1 className='text-white pt-9'>Fell Free to Connect of SocialMedia.</h1></div>
    </div>
  )
}

export default Footer