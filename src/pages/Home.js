import { signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import TaskItem from '../components/TaskItem'
import { UserContext } from '../context/UserContext'
import { auth } from '../firebase';

function Home() {
    const {currentUser, setCurrentUser}=useContext(UserContext);
    const [task, setTask]=useState("")
    const handleLogout=()=>{
    // setCurrentUser(null)
     signOut(auth).then(() => {
      console.log("successfully logged out from it");

}).catch((error) => {
  // An error happened.
  console.log("error during logging out");
});
        // dispatch({
        //     type:"LOGOUT",
        //     payload:null
        // })
    }
    const handleAdd=()=>{
        if(task){
            alert("please enter something !!")
        }
        else{
            console.log("task added");
        }
    }
    return (
        <div className='row gx-0 home-container vh-100 justify-content-center align-items-center'>
            <div className='col-10 col-md-7 row gx-0 content rounded-3 '>

                <div className='col-12 row gx-0 m-2 mb-4 mt-4'>
                    <span className='home-title col-10 text-center '>Hello,{currentUser.displayName}</span>
                    <button type="" className='col-1  logout-btn rounded-2 p-1' onClick={()=>handleLogout()}><i className="bi bi-box-arrow-right"></i></button>
                </div>

                <div className='col-12 row gx-0 create-field justify-content-evenly align-items-center mb-4 '>
                    <div className='form-floating col-7'>
                        <input type="text" id="new" placeholder='Create new ToDo' className='form-control' />
                        <label htmlFor="new">Task</label>
                    </div>
                    <div className='col-3'>
                        <button className='w-100 p-3' onClick={handleAdd}>Add</button>
                    </div>
                </div>


                <div className=' todo-parent mt-2'>

                    <TaskItem />

                </div>

            </div>

        </div>
    )
}

export default Home