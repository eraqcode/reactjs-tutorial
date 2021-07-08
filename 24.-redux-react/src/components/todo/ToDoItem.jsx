import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashAlt, FaCheck } from 'react-icons/fa'
import { COMPLETE_ACTION, DELETE_ACTION } from '../../actions/todoActions'
export const ToDoItem = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo.todos)
    
    
    return (
        <>
           {
               todos?.map( activity => {
                   return(
                       <div key={activity.id}>
                           {
                               activity.complete 
                               ?
                               <li className="line-through opacity-60"> { activity.text } </li>
                               :
                               <li className=""> { activity.text } </li>

                           }
                            
                            <button
                                onClick={ () => dispatch( COMPLETE_ACTION( activity.id ) ) }
                                className="bg-green-600 text-white p-1 rounded outline-none"
                            >
                                <FaCheck />
                            </button>
                            <button
                                onClick={ () => dispatch( DELETE_ACTION(activity.id) ) }
                                className="bg-red-800 text-white p-1 rounded ml-4 w-7 text-center outline-none"
                            >
                                <FaTrashAlt />
                            </button>
                       </div>
                   )
               })
                   
           }
        </>
    )
}
