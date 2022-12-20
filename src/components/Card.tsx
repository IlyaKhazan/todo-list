import React from "react";
import { useAppDispatch } from "../app/hooks";
import { cardDeleted } from "../features/datalist/todosSlice";
import { cardStatusChanged } from "../features/datalist/todosSlice";


interface Props {
    card: any,
}

export const Card: React.FC<Props> = ({ card }) => {
    const dispatch = useAppDispatch()

    const addButtonHandler = (card: any) => {

        if (card.completed) {
            card = { ...card, completed: false }
        }
        else {
            card = { ...card, completed: true }
        }
    }

    return (
        <li key={card.id}>
            <div>{card.title}</div>
            <button onClick={() => dispatch(cardDeleted(card))}>Удалить</button>
            <button onClick={() => dispatch(cardStatusChanged(card))}>Изменить статус</button>
        </li>)
}
