import { ILooseObject } from '../../../../../../../../types';
import { Context } from '../../../../../../../../utils';
import * as React from 'react';
import { IComponentsServiceLikeClass, IEditorInfo, ILockInfo } from '../../../../../../Composer';
export interface IProperties {
    content: ILooseObject[];
    componentsService: IComponentsServiceLikeClass;
    isThereSource: boolean;
    sourceData: ILooseObject | null;
    container?: string;
    editors?: IEditorInfo[];
    locks?: ILockInfo[];
    me?: string;
    layouts?: boolean;
    locked: boolean;
    context: Context;
    moveComponent: (id: number, position: number) => void;
    addComponent: (data: ILooseObject, position: number, container: string) => Promise<boolean>;
    onEdit: (id: number) => Promise<boolean>;
    onRemove: (id: number) => void;
    dragStart: (data: ILooseObject) => void;
    dragEnd: () => void;
    removeContainer: (id: string) => void;
    lockContainer: (id: string, lock: boolean) => void;
}
declare class Container extends React.Component<IProperties, {}> {
    constructor(props: IProperties);
    render(): JSX.Element;
}
export default Container;
