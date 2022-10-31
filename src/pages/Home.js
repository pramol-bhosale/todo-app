import React from 'react'

function Home() {
    return (
        <div className='row gx-0 home-container vh-100 justify-content-center align-items-center'>
            <div className='col-10 col-md-7 row gx-0 content rounded-3 p-3'>
                 
                 <div className='col-12 home-title m-2 mb-4 '>
                  <span>ToDo</span>
                 </div> 

                <div className='col-12 row gx-0 create-field justify-content-evenly align-items-center'>
                    <div className='form-floating col-7'>
                        <input type="text" id="new"  placeholder='Create new ToDo' className='form-control'/>
                        <label htmlFor="new">To Do</label>
                    </div>
                    <div className='col-3'>
                        <button className='w-100 p-3'>Create</button>
                    </div>
                </div>
               

               <div className='todo-parent mt-5 row gx-0 justify-content-center  '>
                <div className='col-10 col-md-10 row gx-0 rounded-3 todo-child bg-primary align-items-center '>
               <div className='child1 col-2 col-md-1'>
               <img src="https://avatars.dicebear.com/api/jdenticon/asc.svg" alt="image" />
               </div>
               <div className='col-7 child-title'>
                Walk cat 
               </div>
               
               <div className='col-4 child-title text-center'>
               <button className='done-btn rounded-2 p-1 w-25'><i class="bi bi-check-lg"></i></button>
               <button className='edit-btn rounded-2 p-1 w-25'><i class="bi bi-pencil-square"></i></button>
                    <button className='close-btn rounded-2 p-1 w-25'><i class="bi bi-x-lg"></i></button>
               </div>
                </div>
               </div>





            </div>

        </div>
    )
}

export default Home