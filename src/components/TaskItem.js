import React from 'react'

function TaskItem() {
    return (

        <div className='row gx-0 todo-child align-items-center justify-content-center  m-1 p-3 rounded-2 m-md-5'>
            <div className='col-6 ps-3 child-title'>
                Walk cat
            </div>
            <div className='col-6 row gx-0 justify-content-evenly'>
                <button className='col-5  col-md-3 done-btn rounded-2 p-2' >Done</button>
                <button className='col-6 col-md-4 close-btn rounded-2 p-2' >Remove</button>

            </div>
        </div>
    )
}

export default TaskItem