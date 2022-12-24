import { Card } from '../../components/Card'
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';

interface Props {
    title: string,
    data: object[],
}

export const DataList: React.FC<Props> = ({ title, data }) => {

    const StyledListWrapper = styled.div`
    width: 50%;
    text-align: center;
    `
    const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `

    return (
        <StyledListWrapper>
            <h2>{title}</h2>
            <StyledList>
                {data.map((card: any) => <Card card={card} key={nanoid()} />)}
            </StyledList>
        </StyledListWrapper>
    )
}
