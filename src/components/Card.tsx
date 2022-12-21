import React from "react";
import { useAppDispatch } from "../app/hooks";
import { cardDeleted } from "../features/datalist/todosSlice";
import { cardStatusChanged } from "../features/datalist/todosSlice";


interface Props {
    card: any,
}

export const Card: React.FC<Props> = ({ card }) => {
    const dispatch = useAppDispatch()

    const deleteCard = () => dispatch(cardDeleted(card))
    const changeStatus = () => dispatch(cardStatusChanged(card))

    return (
        <li key={card.id}>
            <div>{card.title}</div>
            <button onClick={deleteCard}>Удалить</button>
            <button onClick={changeStatus}>Изменить статус</button>
        </li>)
}
