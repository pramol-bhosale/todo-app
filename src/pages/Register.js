import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
function Register() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const emailRef = useRef(null);
    const [err, setError]=useState("")
    const navigate = useNavigate()
    const handleRegister = async (e) => {
        console.log("form submitted")
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                //update the displayName of the user
                updateProfile(user, {
                    displayName: username
                }).then(async () => {
                    // Profile updated!
                    //create document for the new user with user uid (unique)
                    setDoc(doc(db, "todolist", user.uid), {
                        
                    }).then((result)=>{
                      //  console.log("record created");
                    }).catch((error)=>{
                        console.log(error)
                        //console.log("error during record insertion")
                        //console.log(error)
                    });

                    navigate("/");
                }).catch((error) => {
                    console.log(error)
                    //An error occured
                });

            })
            .catch((error) => {
                
               setError(error.code.substring(5,error.code.length).replace(/-/g, " "))
                //An error handling mechanism
            });
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
                            <span className='login-caption pb-2 supercell-font'>Welcome Buddy</span>
                        </div>
                        <form className='form' onSubmit={(e) => { handleRegister(e) }}>
                            <div className='form-floating mt-3'>
                                <input type="text" id="email" className='form-control' placeholder='Email' ref={emailRef} onChange={(e) => { setEmail(e.target.value) }} />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className='form-floating mt-3'>
                                <input type="text" id="username" className='form-control' placeholder='Email' onChange={(e) => { setUsername(e.target.value) }} />
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className='form-floating mt-3'>
                                <input type="password" id="password" className='form-control' placeholder='Email' onChange={(e) => { setPassword(e.target.value) }} />
                                <label htmlFor="password">Password</label>
                            </div>
                            <button type="submit" className='mt-3 w-100 rounded-2 p-3'>Register</button>
                        </form>
                        <div className='mt-3 text-center'>
                            

                            {
                                err ?
                                    <div className='mb-2' style={{ color: "red" }}>
                                        {err}
                                    </div>
                                    : null
                            }
                            Already have account? <Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Register