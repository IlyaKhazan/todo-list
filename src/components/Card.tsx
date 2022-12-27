import { useAppDispatch } from "../app/hooks";
import { cardDeleted } from "../features/datalist/todosSlice";
import { cardStatusChanged } from "../features/datalist/todosSlice";
import { Button } from '../components/Button';
import { Todo } from '../../src/types';
import { Icons } from '../../src/types'
import { StyledCard, ButtonWrapper, CardTitle } from '../wrapper'

interface CardProps {
    card: Todo,
}

export const Card = ({ card }: CardProps) => {

    const dispatch = useAppDispatch()

    const deleteCard = () => dispatch(cardDeleted(card))
    const changeStatus = () => dispatch(cardStatusChanged(card))

    return (
        <StyledCard>
            <CardTitle>{card.title}</CardTitle>
            <ButtonWrapper>
                <Button onClick={deleteCard} icon={Icons.DEL} />
                <Button onClick={changeStatus} icon={Icons.STATUS} />
            </ButtonWrapper>
        </StyledCard>)
}
