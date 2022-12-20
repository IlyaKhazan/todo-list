import React, { useEffect } from "react";
import { Card } from '../../components/Card'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { filterCards } from "../../util";
import { getData, selectAllTodos } from "./todosSlice";
import styled from "styled-components";



export const TodoList = () => {

    const StyledList = styled.div`
    width: 50%
    `


    const cards = useAppSelector(selectAllTodos)
    const todoCards = filterCards(cards, false)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [dispatch])

    return (
        <StyledList>
            <h2>To do List</h2>
            <ul className='to-do-list'>
                {todoCards.map(card => <Card card={card} />)}
            </ul>
        </StyledList>
    )
}
