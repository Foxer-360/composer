import { IComponent } from '@foxer360/delta';
import { ILooseObject } from '../../../../types';
import { Context } from '../../../../utils';
import * as React from 'react';
import { IComponentsServiceLikeClass, IEditorInfo, ILockInfo } from '../../Composer';
export interface IProperties {
    content: ILooseObject;
    pageName: string;
    editors?: IEditorInfo[];
    locks?: ILockInfo[];
    me?: string;
    layouts?: boolean;
    context: Context;
    selectedComponent: number | null;
    updateComponent: (data: ILooseObject) => void;
    selectComponent: (id: number) => Promise<boolean>;
    cancelComponent: () => Promise<boolean>;
    saveComponent: () => Promise<boolean>;
    moveComponent: (id: number, position: number) => void;
    addComponent: (data: ILooseObject, position: number, container: string) => Promise<boolean>;
    removeComponent: (id: number) => void;
    addContainer: () => void;
    removeContainer: (id: string) => void;
    lockContainer: (id: string, lock: boolean) => void;
    componentsService: IComponentsServiceLikeClass;
}
export interface IState {
    isSomethingDragging: boolean;
    activeSourceData: ILooseObject | null;
}
declare class Editor extends React.Component<IProperties, IState> {
    constructor(props: IProperties);
    onDragStart(data: ILooseObject): void;
    onDragStop(): void;
    handleAdd(name: string): void;
    getComponentFromContent(): IComponent;
    render(): JSX.Element;
}
export default Editor;
