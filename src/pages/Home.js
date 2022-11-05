import { signOut } from 'firebase/auth';
import { doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useMemo, useState } from 'react'
import TaskItem from '../components/TaskItem'
import { UserContext } from '../context/UserContext'
import { auth, db } from '../firebase';
import {v4 as uuid} from 'uuid'
import Loading from '../components/Loading';
function Home() {
    const {currentUser}=useContext(UserContext);
    const [task, setTask]=useState("")
    const [taskList, setTaskList]=useState([])
    const [list, setList]=useState(<Loading/>)
      
    //handle the logout functionality
    const handleLogout=()=>{
       signOut(auth).then(() => {
     // console.log("successfully logged out from it");

}).catch((error) => {
  // An error happened.
  //console.log("error during logging out");
});

    }
    
    const handleAdd=async()=>{
        if(task===""){
            alert("please enter something !!")
            return ;
        }
        const todoRef = doc(db, "todolist", currentUser.uid);
      
        const id=uuid();
        await updateDoc(todoRef, {
           [id+".content"]: task,
           [id+".status"]:"Pending",
           [id+".date"]:serverTimestamp()
            }).then(()=>{
           // console.log("Task added successfully");
        }).catch((error)=>{
            //console.log("error occured during the insertion of the ");
        });
    }
    useEffect(()=>{
        const unsub = onSnapshot(doc(db, "todolist", currentUser.uid),(doc) => {
            setTaskList(doc.data());
        });
      return ()=>{
        unsub(); 
      }

    },[currentUser]);
    useMemo(() =>{
        setList(Object.entries(taskList).map((element)=>{
           if(element[1].status!=="Removed"){
               return  <TaskItem element={element[1]} key={element[0]} _id={element[0]}/>
           }
           return <></>
        }))
    }, [taskList])
    return (
        <div className='row gx-0 home-container vh-100 justify-content-center align-items-center'>
            <div className='col-10 col-md-7 row gx-0 content rounded-3 '>

                <div className='col-12 row gx-0 m-2 mb-4 mt-4'>
                    <span className='home-title col-10 text-center '>Hello,{currentUser.displayName}</span>
                    <button type="" className='col-1  logout-btn rounded-2 p-1' onClick={()=>handleLogout()}><i className="bi bi-box-arrow-right"></i></button>
                </div>

                <div className='col-12 row gx-0 create-field justify-content-evenly align-items-center mb-4 '>
                    <div className='form-floating col-7'>
                        <input type="text" id="new" placeholder='Create new ToDo' className='form-control' onChange={(e)=>{setTask(e.target.value); console.log(task)}}/>
                        <label htmlFor="new">Task</label>
                    </div>
                    <div className='col-3'>
                        <button className='w-100 p-3' onClick={handleAdd}>Add</button>
                    </div>
                </div>


                <div className=' todo-parent mt-2'>

                    {list}
                    
                </div>

            </div>

        </div>
    )
}

export default Home