import React,{useState, useEffect} from 'react'
import { useContext } from 'react';
import doctorImg from "../../assets/images/doctor-img02.png";
import {authContext} from './../../context/AuthContext.jsx'
import {Link} from 'react-router-dom';


const MyAccount = () => {
    const [data, setData] = useState({})
    const{user,dispatch} = useContext(authContext);
    const handleLogout = () =>{
        dispatch({type:"LOGOUT"});
    }

    const id = `${user._id}`;

    const api = `http://localhost:8000/api/patients/${id}`;
    useEffect(() => {
      (async function () {
        let result = await fetch(api).then((res)=>res.json());
        setData(result);
      })()
    }, [api])
    
  return (
    <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-10'>
            <div className='pd-[50px] px-[30px] rounded-md'>
                <div className='flex items-center justify-center'>
                    <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
                        <img 
                            src={doctorImg}
                            alt=''
                            className='w-full h-full rounded-full'
                        />
                    </figure>
                </div>
                <div className='text-center mt-4'>
                    <h3 className='text-[18px] leading-[30px] text-headingColor font-bold'>{data.name}</h3>
                    <p className='text-textColor text-[15px] leading-6 font-medium'>{data.email}</p>
                    
                </div>
                <div className='mt-[50px] md:mt-[100px] space-y-2'>
                    <Link to='/login'>
                    <button onClick={handleLogout} className='w-full bg-[#181a1e] p-3 text-[16px] leading-7 rounded-md text-white'>Logout</button>
                    </Link>
                    <button className='w-full bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white'>Delete Account</button>
                </div>
            </div>
            <div className='md:col-span-2 md:px-[30px]'>
                <div>
                    <button className='p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor'>My Bookings</button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default MyAccount