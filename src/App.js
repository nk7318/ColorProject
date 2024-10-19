

import React, { useState } from 'react'

const App = () => {


    const [color,setColor] = useState("bg-red-500");
     
    




  return (
    <div className={` w-screen h-screen ${color} flex flex-col justify-end p-5  items-center`}>
    <img className=' w-full h-full lg:w-[700px] lg:h-[700px] ' src='https://png.pngtree.com/png-clipart/20230913/original/pngtree-programmer-clipart-developer-sitting-behind-his-computer-in-glasses-cartoon-vector-png-image_11075227.png'/>
    <div className=' lg:w-[60%] w-full flex  py-2 bg-white rounded-full justify-evenly text-white'>
    <button className='border border-slate-800 rounded-full lg:px-3 px-0 py-2 bg-green-500' onClick={()=>setColor("bg-green-500")} >Green</button>
    <button  className='border border-slate-800 rounded-full lg:px-3 px-0 py-2 bg-yellow-500' onClick={()=>setColor("bg-yellow-500")} >Yellow</button>
    <button  className='border border-slate-800 rounded-full lg:px-3 px-0 py-2 bg-purple-500' onClick={()=>setColor("bg-purple-500")} >Purple</button>
    <button  className='border border-white rounded-full lg:px-3 px-0 py-2 bg-slate-900' onClick={()=>setColor("bg-slate-900")} >Black</button>
    <button  className='border border-slate-800 rounded-full lg:px-3 px-0 py-2 bg-orange-500' onClick={()=>setColor("bg-orange-500")} >Orange</button>




    </div>





    </div>
  )
}



export default App;
