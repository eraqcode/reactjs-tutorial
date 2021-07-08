import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export const UsersItem = () => {

    
    const usersData = useSelector(state => state.users)
    console.log( usersData )
    return (
        <div className="w-9/12 mx-auto">
            
            {
               usersData.users.map( user => {
                <div key={user.id}>
                    <p> { user.name } - { user.username } </p>
                </div>
            } )
            }
            
        </div>
    )
}
