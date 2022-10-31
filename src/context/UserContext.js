import React, { useContext } from 'react'

export const UserContext=useContext()

const UserContextProvider=()=>{



    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}