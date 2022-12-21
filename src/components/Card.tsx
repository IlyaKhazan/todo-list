import React from "react";
import { useAppDispatch } from "../app/hooks";
import { cardDeleted } from "../features/datalist/todosSlice";
import { cardStatusChanged } from "../features/datalist/todosSlice";
import styled from 'styled-components';
import { Button } from '../components/Button'

interface Props {
    card: any,
}

export const Card: React.FC<Props> = ({ card }) => {

    const dispatch = useAppDispatch()

    const deleteCard = () => dispatch(cardDeleted(card))
    const changeStatus = () => dispatch(cardStatusChanged(card))

    const StyledCard = styled.li`

display: flex;
justify-content: space-between;
padding: 20px;
min-height: 50px;
align-items: center;
border-radius: 10px;
-webkit-box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
transition: 0.4s ease-out;

&:hover,
&:focus {
  color: #5965c6;
  transform: translateY(-5px);
}

    `
    const StyledButtonWrapper = styled.div`

    display: flex;
    gap: 20px;
    padding-left: 50px;
        `

    return (
        <StyledCard key={card.id}>
            <div>{card.title}</div>
            <StyledButtonWrapper>
                <Button onClick={deleteCard} icon='delete' />
                <Button onClick={changeStatus} icon='status' />
            </StyledButtonWrapper>
        </StyledCard>)
}
