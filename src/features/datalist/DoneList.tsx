import { useEffect } from 'react';
import { Card } from '../../components/Card'
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { filterCards } from "../../util";
import { getData, selectAllTodos } from './todosSlice';
import styled from 'styled-components';


export const DoneList = () => {

    const StyledList = styled.div`
    width: 50%
    `

    const cards = useAppSelector(selectAllTodos)
    const doneCards = filterCards(cards, true)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [dispatch])
    return (
        <StyledList>
            <h2>Done List</h2>
            <ul className='done-list'>
                {doneCards.map(card => <Card card={card} />)}
            </ul>
        </StyledList>
    )
}
