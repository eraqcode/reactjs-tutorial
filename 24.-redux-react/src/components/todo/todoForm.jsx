import React from 'react'
import { useDispatch } from 'react-redux';
import { ADD_NEW_ACTIVITY_ACTION } from '../../actions/todoActions';
import { useForm } from '../../hooks/useForm'

export const TodoForm = () => {

    const dispatch = useDispatch()
    const [formValues, handleInputChange] = useForm({
      activity: ''
    });
    const { activity } = formValues;

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch( ADD_NEW_ACTIVITY_ACTION( activity ) )
    }


    return (
        <div className="mt-12">
          <form onSubmit={ handleSubmit } className="w-9/12 block">
              <input 
                className="h-8 bg-white w-full outline-none text-black"
                type="text"
                placeholder="Enter some activity"
                name="activity"
                value={ activity }
                onChange={ handleInputChange }
              />
              <button
                className="bg-yellow-300 text-black p-1 w-full mt-4 outline-none"
              >
                  Send Activity
              </button>
          </form>  
        </div>
    )
}
