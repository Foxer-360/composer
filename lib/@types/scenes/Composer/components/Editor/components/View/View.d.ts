import { ILooseObject } from '../../../../../../types';
import { Context } from '../../../../../../utils';
import * as React from 'react';
import { IComponentsServiceLikeClass, IEditorInfo, ILockInfo } from '../../../../Composer';
export interface IProperties {
    content: ILooseObject;
    editors?: IEditorInfo[];
    locks?: ILockInfo[];
    me?: string;
    isThereSource: boolean;
    sourceData: ILooseObject | null;
    layouts?: boolean;
    context: Context;
    onEdit: (id: number) => Promise<boolean>;
    onRemove: (id: number) => void;
    dragStart: (data: ILooseObject) => void;
    dragEnd: () => void;
    moveComponent: (id: number, position: number) => void;
    addComponent: (data: ILooseObject, position: number, container: string) => Promise<boolean>;
    componentsService: IComponentsServiceLikeClass;
    removeContainer: (id: string) => void;
    lockContainer: (id: string, lock: boolean) => void;
}
declare class View extends React.Component<IProperties, {}> {
    arrowHover: (direction: string) => void;
    render(): JSX.Element;
}
export default View;
