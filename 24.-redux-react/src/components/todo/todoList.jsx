import React from 'react'
import { ToDoItem } from './ToDoItem'

export const TodoList = () => {
    return (
        <div className="mt-10">
            <ol className="list-decimal">
                <ToDoItem />
            </ol>
        </div>
    )
}
