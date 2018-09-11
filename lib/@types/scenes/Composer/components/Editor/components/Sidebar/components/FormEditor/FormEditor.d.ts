import { ILooseObject } from '../../../../../../../../types';
import * as React from 'react';
import { IComponentsServiceLikeClass } from '../../../../../../Composer';
export interface IProperties {
    type: string | null;
    data: ILooseObject;
    onChange: (data: ILooseObject) => void;
    onSave: () => Promise<boolean>;
    onCancel: () => Promise<boolean>;
    componentsService: IComponentsServiceLikeClass;
}
declare class FormEditor extends React.Component<IProperties, {}> {
    render(): JSX.Element;
}
export default FormEditor;
