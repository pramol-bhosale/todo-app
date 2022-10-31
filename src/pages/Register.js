import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
// import img1 from './images/img1.jpg'
function Register() {
    const emailRef=useRef(null)
    useEffect(()=>{
         emailRef.current.focus(); 
    },[])
  return (
    <div className='login-container vh-100 align-items-center row gx-0'>
    <div className='row gx-0 justify-content-center'> 
        <div className='col-10 col-sm-5 row gx-0 justify-content-center form-body p-5 rounded-4'>
            <div className='col-12 col-sm-9'>
               <div className='text-center mb-4'>
               <span className='login-caption pb-2 supercell-font'>Welcome Buddy</span>
               </div>
                <form className='form'>
                    <div className='form-floating mt-3'>
                        <input type="text" id="email" className='form-control' placeholder='Email' ref={emailRef} />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className='form-floating mt-3'>
                        <input type="text" id="username" className='form-control' placeholder='Email' />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className='form-floating mt-3'>
                        <input type="password" id="password" className='form-control' placeholder='Email'/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit" className='mt-3 w-100 rounded-2 p-3'>Register</button>
                </form>
            <div className='mt-3 text-center'>
             {/* <span className='d-block'>Something went Wrong! </span> */}
                Already have account? <Link to="/login">Login</Link>
            </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Register