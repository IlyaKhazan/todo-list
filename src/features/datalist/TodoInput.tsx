import React, { MouseEventHandler, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../app/hooks";
import { todoAdded } from "./todosSlice";

interface Todo {
    userId: string,
    id: string,
    title: string,
    completed: boolean,
}

export const TodoInput: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const inputChangeHandler = (evt: any) => {
        setInput(prev => evt.target.value)
    }

    const dispatch = useAppDispatch();

    const buttonHandler: MouseEventHandler = () => {
        const createTodo = (value: string) => {
            const todoObj: Todo = {
                userId: nanoid(),
                id: nanoid(),
                title: value,
                completed: false,
            }
            return todoObj
        }
        if (input) {
            dispatch(todoAdded(createTodo(input)))
            setInput('')

        } else {
            alert("Введите название задачи")
        }
    }

    return (
        <div className='main-input'>
            <input onChange={inputChangeHandler} value={input} type="text" />
            <button onClick={buttonHandler}>Добавить</button>
        </div>
    )
}