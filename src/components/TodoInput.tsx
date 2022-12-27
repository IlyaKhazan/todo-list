import React, { MouseEventHandler, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../app/hooks";
import { todoAdded } from "../features/datalist/todosSlice";
import { Button } from '../components/Button'
import { Todo } from '../../src/types'
import { Icons } from '../../src/types'
import { Input, InputWrapper } from '../wrapper'

export const TodoInput: React.FC = () => {
    const [input, setInput] = useState('');
    const inputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(prev => evt.target.value)
    }

    const dispatch = useAppDispatch();

    const addTodo: MouseEventHandler = (): void => {
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
        <InputWrapper className='main-input'>
            <Input onChange={inputChangeHandler} value={input} type="text" />
            <Button onClick={addTodo} icon={Icons.ADD} />
        </InputWrapper>
    )
}