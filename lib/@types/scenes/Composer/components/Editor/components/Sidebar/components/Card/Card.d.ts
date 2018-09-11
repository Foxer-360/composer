import { ILooseObject } from '../../../../../../../../types';
import * as React from 'react';
export interface IProperties {
    type: string;
    dragStart: (data: ILooseObject) => void;
    dragEnd: () => void;
}
export interface IState {
    isDragging: boolean;
}
declare class Card extends React.Component<IProperties, IState> {
    constructor(props: IProperties);
    handleDragStart(e: React.DragEvent<HTMLDivElement>): void;
    handleDragEnd(e: React.DragEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
export default Card;
