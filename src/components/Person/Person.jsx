import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import guybill from '../../images/Guybil.webp'

const Person = () => {
    return (
        <div className=' absolute left-[10%] w-[90%] h-[600px] border bg-violet-700 mx-auto'>
            <div className='w-[100%] flex h-[100%]'>
                <div className='w-[30%] h-[100%] border border-black flex flex-col gap-[120px]'>
                    <div className='w-[300px] h-[400px] border border-black flex flex-col items-center justify-center'>
                        <img src={guybill} alt="" className='w-[250px] h-[250px]' />
                        <h2 className='text-[24px] font-semibold'>Benjamin Maisano</h2>
                        <p className='text-[16px]'>CTO at Maunt Sinai</p>
                    </div>
                    <div className='flex'>
                        <div><ArrowCircleLeftIcon sx={{ fontSize: "50px" }} /></div>
                        <div><ArrowCircleRightIcon sx={{ fontSize: "50px" }} /></div>
                    </div>
                </div>
                <div className='w-[70%] h-[100%] border border-black'>
                    <h2 className='text-[38px] font-bold mt-[30px]'>"Vention has provided very talented engineers across web Ul, mobile, backend APIs, and system designs, to data integrations and beyond.</h2>
                    <p className='text-[20px] mt-[60px]'>Their staff integrated quickly and were dedicated to the internal teams throughout the relationship, acting as long term partners in our strategic digital efforts."</p>
                </div>
            </div>
            <div className='w-[100%] flex h-[100%]'>
                <div className='w-[30%] h-[100%] border border-black flex flex-col gap-[120px]'>
                    <div className='w-[300px] h-[400px] border border-black flex flex-col items-center justify-center'>
                        <img src={guybill} alt="" className='w-[250px] h-[250px]' />
                        <h2 className='text-[24px] font-semibold'>Benjamin Maisano</h2>
                        <p className='text-[16px]'>CTO at Maunt Sinai</p>
                    </div>
                    <div className='flex'>
                        <div><ArrowCircleLeftIcon sx={{ fontSize: "50px" }} /></div>
                        <div><ArrowCircleRightIcon sx={{ fontSize: "50px" }} /></div>
                    </div>
                </div>
                <div className='w-[70%] h-[100%] border border-black'>
                    <h2 className='text-[38px] font-bold mt-[30px]'>"Vention has provided very talented engineers across web Ul, mobile, backend APIs, and system designs, to data integrations and beyond.</h2>
                    <p className='text-[20px] mt-[60px]'>Their staff integrated quickly and were dedicated to the internal teams throughout the relationship, acting as long term partners in our strategic digital efforts."</p>
                </div>
            </div>
            <div className='w-[100%] flex h-[100%]'>
                <div className='w-[30%] h-[100%] border border-black flex flex-col gap-[120px]'>
                    <div className='w-[300px] h-[400px] border border-black flex flex-col items-center justify-center'>
                        <img src={guybill} alt="" className='w-[250px] h-[250px]' />
                        <h2 className='text-[24px] font-semibold'>Benjamin Maisano</h2>
                        <p className='text-[16px]'>CTO at Maunt Sinai</p>
                    </div>
                    <div className='flex'>
                        <div><ArrowCircleLeftIcon sx={{ fontSize: "50px" }} /></div>
                        <div><ArrowCircleRightIcon sx={{ fontSize: "50px" }} /></div>
                    </div>
                </div>
                <div className='w-[70%] h-[100%] border border-black'>
                    <h2 className='text-[38px] font-bold mt-[30px]'>"Vention has provided very talented engineers across web Ul, mobile, backend APIs, and system designs, to data integrations and beyond.</h2>
                    <p className='text-[20px] mt-[60px]'>Their staff integrated quickly and were dedicated to the internal teams throughout the relationship, acting as long term partners in our strategic digital efforts."</p>
                </div>
            </div>
        </div>
    )
}

export default Person
