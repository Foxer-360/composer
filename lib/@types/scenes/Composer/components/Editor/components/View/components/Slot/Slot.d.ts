import { ILooseObject } from '../../../../../../../../types';
import * as React from 'react';
import { IAddComponentObject, IComponentsServiceLikeClass } from '../../../../../../Composer';
export interface IProperties {
    pos: number;
    isThereSource: boolean;
    sourceData: ILooseObject | null;
    componentsService: IComponentsServiceLikeClass;
    container?: string;
    containerLocked: boolean;
    moveComponent: (id: number, position: number) => void;
    addComponent: (data: IAddComponentObject, position: number, container: string) => Promise<boolean>;
}
export interface IState {
    canDrop: boolean;
    isOver: boolean;
}
declare class Slot extends React.Component<IProperties, IState> {
    constructor(props: IProperties);
    componentWillReceiveProps(nextProps: IProperties): void;
    handleCanDrop(props: IProperties, source: ILooseObject): boolean;
    handleDragOver(e: any): void;
    handleDrop(e: any): void;
    handleDragEnter(e: any): void;
    handleDragLeave(e: any): void;
    render(): JSX.Element;
}
export default Slot;
