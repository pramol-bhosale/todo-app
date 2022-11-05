import { doc, updateDoc } from 'firebase/firestore';
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import {db} from '../firebase'

// task object is passed thorugh props 
function TaskItem(props) {
// currentUser context fetched
    const {currentUser}=useContext(UserContext)
// handles task add event   
    const handleDone=async(key)=>{
     
        const todoRef=doc(db, "todolist", currentUser.uid);
        await updateDoc(todoRef, {
          [key+".status"]:"Done"  
        }).then(()=>{ }
        ).catch(error=>{
            alert("Something went wrong Give another try")
        })

 }

 //handle remove task event
 const handleRemove=async(key)=>{

    const todoRef=doc(db, "todolist", currentUser.uid);
    await updateDoc(todoRef, {
     [key+".status"]:"Removed"  
    }).then(()=>{
        // console.log("Removed from todolist ")
    }).catch(error=>{
      alert("Something went wrong! Give another try ")
    })


 }
    return (

        <div className='row gx-0 todo-child align-items-center justify-content-center  m-1 p-3 rounded-2 m-md-5'>
          {props.element.status==="Done" ? 
           <div className='col-1' style={{color:"green",fontSize:"16px"}}>
           <i className="bi bi-check-circle-fill"></i>
           </div>:
           <div className='col-1'></div>}
            <div className='col-5 ps-3 child-title'>
                {props.element.content}
            </div>
            <div className='col-6 row gx-0 justify-content-evenly'>
                <button className='col-5  col-md-3 done-btn rounded-2 p-2' onClick={()=>{handleDone(props._id)}}>Done</button>
                <button className='col-6 col-md-4 close-btn rounded-2 p-2' onClick={()=>{handleRemove(props._id)}}>Remove</button>

            </div>
        </div>
    )
}

export default TaskItem