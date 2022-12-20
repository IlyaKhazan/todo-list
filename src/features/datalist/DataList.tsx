import React from "react";

interface Props {
    todos: any[],
    deleteButtonHandler: Function,
    addButtonHandler: Function,
}

export const TodoList: React.FC<Props> = ({ todos, deleteButtonHandler, addButtonHandler }) => {
    return (
        <>
            <h2>To do List</h2>
            <ul className='to-do-list'>
                {todos.map(todo => <li key={todo.id}><div>{todo.title}</div>
                    <button onClick={() => deleteButtonHandler(todo)}>Delete</button>
                    <button onClick={() => addButtonHandler(todo)}>Add</button></li>)}
            </ul>
        </>
    )
}