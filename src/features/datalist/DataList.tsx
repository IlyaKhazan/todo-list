import { nanoid } from '@reduxjs/toolkit';
import { Card } from '../../components/Card'
import { Todo } from '../../types';
import { List, ListWrapper } from '../../wrapper'

interface DatalistProps {
    title: string,
    data: Todo[],
}

export const DataList = ({ title, data }: DatalistProps) => {

    return (
        <ListWrapper>
            <h2>{title}</h2>
            <List>
                {data.map((card: Todo) => <Card key={nanoid()} card={card} />)}
            </List>
        </ListWrapper>
    )
}
