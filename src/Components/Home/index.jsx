import React from 'react'


function Home() {
  return (
    <>
    <div className='flex items-center justify-between '>
    <div className='flex flex-col gap-2 ml-10 mt-10 p-5'>
        <p className=' text-purple-500 text-xl mt-5'>Hi, my name is....</p>
        <h1 className='text-white font-bold  text-6xl font-jetbrains'> <span className='decoration-purple-700 underline rounded-md decoration-4 '>Manvendra</span> Singh Rathod</h1>
        {/* <h4 className='text-gray-500 text-3xl mt-2'>I am a Frontend Developer |</h4> */}
        <div class="w-max">
    <h4 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-gray-500 text-3xl mt-2">I am a Frontend Developer__ </h4>
  </div>
    </div>
    <div className='mt-10'> 
    {/* <img className='mt-4 p-5' src=".\src\homeimg-removebg-preview.png" alt="" /> */}
    <iframe className='mt-5' src='https://my.spline.design/mariokartitembox-75d57f7a4111b49b23c7511dd9d1741d/' frameborder='0' width='400px' height='400px' ></iframe>
    
     </div>
        
    </div>
    </>
  )
}

export default Home
