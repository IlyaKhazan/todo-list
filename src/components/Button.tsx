import React from "react";
import styled from 'styled-components';
import { DeleteIcon } from './icons/DeleteIcon'
import { StatusIcon } from "./icons/StatusIcon";
import { AddIcon } from "./icons/AddIcon";
import { Values } from '../types';

const Icon = {
    DEL: 'delete',
    STATUS: 'status',
    ADD: 'add'
} as const;

interface Props {
    onClick: any,
    icon: Values<typeof Icon>;
}

export const Button: React.FC<Props> = ({ onClick, icon }) => {

    const StyledButton = styled.button`
    background: transparent;
    cursor: pointer;
    border: none;
    `

    const getIcon = (icon: string) => {
        if (icon === Icon.DEL) return <DeleteIcon />;
        if (icon === Icon.STATUS) return <StatusIcon />;
        return (icon === Icon.ADD) ? <AddIcon /> : null;

    };

    return (
        <StyledButton onClick={onClick}>{getIcon(icon)}</StyledButton>
    )
}
