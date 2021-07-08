import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UsersItem } from './UsersItem'
import { GET_USERS } from '../../actions/usersActions';

export const Users = () => {
    const usersData = useSelector(state => state.users)
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={ () => dispatch( GET_USERS() ) }
                className="mx-auto bg-pink-600 rounded outline-none p-1 w-32 h-12 text-white font-bold text-xl"
            >
                Get Users
            </button>
           {
               usersData.loading 
               ?
                <h2>Loading...</h2>
               :
                <h2> { usersData.error } </h2> 
           } 

           {
               usersData.users && 
               (
                   usersData.users.map( user => {
                       return(
                           <p key={user.id}> {user.name} - {user.username} </p>
                       )
                   } )
               )
           }
        </div>
    )
}
