import { ILooseObject } from '../../../../../../types';
import * as React from 'react';
import { IComponentsServiceLikeClass } from '../../../../Composer';
export interface IProperties {
    selectedComponent: number | null;
    data: ILooseObject;
    type: string | null;
    layouts?: boolean;
    onAdd: (name: string) => void;
    onChange: (data: ILooseObject) => void;
    onSave: () => Promise<boolean>;
    onCancel: () => Promise<boolean>;
    componentsService: IComponentsServiceLikeClass;
    dragStart: (data: ILooseObject) => void;
    dragEnd: () => void;
    addContainer: () => void;
}
declare class Sidebar extends React.Component<IProperties, {}> {
    render(): JSX.Element;
}
export default Sidebar;
