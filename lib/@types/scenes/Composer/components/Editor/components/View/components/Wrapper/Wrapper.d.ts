import { ILooseObject } from '../../../../../../../../types';
import * as React from 'react';
import { IComponentsServiceLikeClass, IEditorInfo, ILockInfo } from '../../../../../../Composer';
export interface IProperties {
    position: number;
    content: ILooseObject[];
    name: string;
    id: number;
    componentsService: IComponentsServiceLikeClass;
    container?: string;
    editors?: IEditorInfo[];
    locks?: ILockInfo[];
    me?: string;
    onEdit: (id: number) => Promise<boolean>;
    onRemove: (id: number) => void;
    dragStart: (data: ILooseObject) => void;
    dragEnd: () => void;
}
export interface IState {
    isDragging: boolean;
    componentContent: ILooseObject;
}
/**
 * Component that wrap component in Composer content and
 * drive all component behiever, like editing or re-rendering
 */
declare class Wrapper extends React.Component<IProperties, IState> {
    constructor(props: IProperties);
    componentWillReceiveProps(nextProps: IProperties): void;
    shouldComponentUpdate(nextProps: IProperties, nextState: IState): boolean;
    handleEdit(): void;
    handleRemove(): void;
    handleDragStart(e: any): void;
    handleDragEnd(e: any): void;
    render(): JSX.Element;
}
export default Wrapper;
