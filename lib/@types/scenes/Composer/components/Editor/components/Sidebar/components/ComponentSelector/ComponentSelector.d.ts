import { ILooseObject } from '../../../../../../../../types';
import * as React from 'react';
import { IComponentsServiceLikeClass } from '../../../../../../Composer';
export interface IProperties {
    componentsService: IComponentsServiceLikeClass;
    layouts?: boolean;
    onAdd: (type: string) => void;
    dragStart: (data: ILooseObject) => void;
    dragEnd: () => void;
    addContainer: () => void;
}
declare class ComponentSelector extends React.Component<IProperties, {}> {
    render(): JSX.Element;
}
export default ComponentSelector;
