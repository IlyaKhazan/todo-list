import React, { ReactNode } from "react";
import { DeleteIcon } from './icons/DeleteIcon'
import { StatusIcon } from "./icons/StatusIcon";
import { AddIcon } from "./icons/AddIcon";
import { Values } from '../types';
import { Icons } from '../../src/types'
import { StyledButton } from '../wrapper'


interface ButtonProps {
    onClick: any,
    icon: Values<typeof Icons>
}

export const Button: React.FC<ButtonProps> = ({ onClick, icon }) => {

    const getIcon = (icon: string): ReactNode => {
        if (icon === Icons.DEL) return <DeleteIcon />;
        if (icon === Icons.STATUS) return <StatusIcon />;
        return (icon === Icons.ADD) ? <AddIcon /> : null;

    };

    return (
        <StyledButton onClick={onClick}>{getIcon(icon)}</StyledButton>
    )
}
