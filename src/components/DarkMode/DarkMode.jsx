import React from 'react'
import darks from '../../images/dark.svg'
import light from '../../images/light.svg'

const DarkMode = ({dark,setDark}) => {
  return (
    <div onClick={()=>setDark(!dark)} className='w-[60px] h-[25px] border rounded-[20px] flex bg-gray-300 relative'>
      <div className={` w-[50%] rounded-[50%] h-[100%] flex items-center justify-center z-10 transition-[0.5s] ${dark?"bg-[#e5ff00] transition-[0.5s]":''}  `}><img src={light} alt="" className='w-[18px]' /></div>
      <div className={`w-[50%] rounded-[50%] h-[100%] flex items-center justify-center z-10 transition-[0.5s] ${dark?"":'bg-[#e5ff00] transition-[0.5s]'}`}><img src={darks} alt=""    className='w-[18px]'/></div>
    
    </div>
  )
}

export default DarkMode
