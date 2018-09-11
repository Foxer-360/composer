import * as React from 'react';
import { IEditorInfo } from '../../../../../../../../Composer';
export interface IProperties {
    editors?: IEditorInfo[];
    id: string | null;
}
declare class UserEditor extends React.Component<IProperties, {}> {
    constructor(props: IProperties);
    render(): JSX.Element;
    private findUser;
}
export default UserEditor;
