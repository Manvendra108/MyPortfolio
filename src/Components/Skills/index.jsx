import React from 'react'

function Skills() {
  return (
    <div className='flex w-full items-center justify-between '>
    <div className='flex flex-col gap-2 justify-start ml-20'>
        <div><p className='text-gray-500'>SKILLS</p></div>
        <div><h1 className='text-purple-600 text-7xl font-semibold '>My Skills</h1></div>
        <div><h3 className='text-white text-2xl font-medium p-4'>I like to take responsibility to craft <br />
         aesthetic user expreience using modern <br />
          frontend architecture</h3>
{/* SKILL SET ........... */}
   <div className='flex flex-col gap-5 mt-5 '>
    {/* LANGUAGE AND TOOLS */}
    <div className='flex flex-col gap-7'>
     <div><h1 className='text-gray-300 font-medium'>LANGUAGE AND TOOLS</h1></div>
            {/* Lan-Icons */}
     <div className='h-14 w-14 mb-5 flex gap-7 '>
     <img className='hover:p-1' src="./html.svg" alt="" />
     <img className='hover:p-1' src="./css.svg" alt="" />
     <img className='hover:p-1' src="./js.svg" alt="" />
     <img className='hover:p-1' src="./typescript.svg" alt="" />
     <img className='hover:p-1' src="./vite.svg" alt="" />
     <img className='hover:p-1' src="./nodejs.svg" alt="" />
     <img className='hover:p-1' src="./figma.svg" alt="" /> 
     </div>
    </div>

    {/* LIBRARIES */}
    <div>
    <div><h1 className='text-gray-300 font-medium '>LIBRARIES AND FRAMEWORKS</h1></div>
    <div className='h-14 w-14 mb-5 flex gap-7 mt-3 '>
     <img className='hover:p-1' src="./react.svg" alt="" />
     <img className='hover:p-1' src="./tailwindcss.svg" alt="" />
     <img className='hover:p-1' src="./redux.svg" alt="" />
     <img className='hover:p-1' src="./nextjs.svg" alt="" />
     </div>
    </div>

    {/* DATABASE */}
    <div>
    <div><h1 className='text-gray-300 font-medium '>DATABASES</h1></div>
    <div className='h-14 w-14 mb-5 flex gap-7 mt-3'>
     <img className='hover:p-1' src="./mysql.svg" alt="" />
     <img className='hover:p-1' src="./mongodb.svg" alt="" />
     </div>
    </div>
    
    </div></div>
    </div>
    <div className=''>
        <img src="./right-pattern.svg" alt="" />
    </div>
    </div>
  )
}

export default Skills