import * as React from 'react';
import { IEditorInfo } from '../../Composer';
export interface IProperties {
    editors: IEditorInfo[];
}
declare class Users extends React.Component<IProperties, {}> {
    constructor(props: IProperties);
    render(): JSX.Element;
}
export default Users;
