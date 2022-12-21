import React, { MouseEventHandler, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../app/hooks";
import { todoAdded } from "./todosSlice";
import { Button } from '../../components/Button'
import styled from 'styled-components';

interface Todo {
    userId: string,
    id: string,
    title: string,
    completed: boolean,
}

const TodoInputWrapper = styled.div`
display: flex;
gap: 50px;
padding: 50px;
    `

const StyledInput = styled.input`
display: flex;
padding: 20px;
width: 500px;
border-radius: 5px;
border: 1px solid grey;
font-size: 20px;
    `


export const TodoInput: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const inputChangeHandler = (evt: any) => {
        setInput(prev => evt.target.value)
    }

    const dispatch = useAppDispatch();

    const addTodo: MouseEventHandler = () => {
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
        <TodoInputWrapper className='main-input'>
            <StyledInput onChange={inputChangeHandler} value={input} type="text" />
            <Button onClick={addTodo} icon='add' />
        </TodoInputWrapper>
    )
}