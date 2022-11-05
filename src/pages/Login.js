import React, { useEffect, useRef, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const emailRef = useRef(null)
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    navigate("/");
                })
                .catch((error) => {
                    setError(error.code.substring(5,error.code.length).replace(/-/g, " "))
                });
        } catch (err) {
            setError(true)
            //console.log("something went wrong \n".error);
        }


    }
    useEffect(() => {
        emailRef.current.focus();
    }, [])
    return (
        <div className='login-container vh-100 align-items-center row gx-0'>
            <div className='row gx-0 justify-content-center'>
                <div className='col-10 col-md-6 row gx-0 justify-content-center form-body p-5 rounded-4'>
                    <div className='col-12 col-lg-10'>
                        <div className='text-center mb-4'>
                            <span className='login-caption pb-2 supercell-font'>To Do</span>
                        </div>
                        <form className='form' onSubmit={(e) => { handleSubmit(e) }}>
                            <div className='form-floating mt-3'>
                                <input type="text" id="username" className='form-control' placeholder='Email' ref={emailRef} onChange={(e) => { setEmail(e.target.value) }} />
                                <label htmlFor="username">Email</label>
                            </div>
                            <div className='form-floating mt-3'>
                                <input type="password" id="password" className='form-control' placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
                                <label htmlFor="password">Password</label>
                            </div>
                            <button type="submit" className='mt-3 w-100 rounded-2 p-3'>Login</button>
                        </form>
                        <div className='mt-3 text-center'>
                            {
                                error ?
                                    <div className='mb-2' style={{ color: "red" }}>
                                        {error}
                                    </div>
                                    : null
                            }
                            New to To Do <Link to="/register">Register</Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login