import { IComponentModule } from '../../../../types';
import * as React from 'react';
export interface IProperties {
    content: any[];
    componentModule: IComponentModule;
}
declare class Container extends React.Component<IProperties, {}> {
    constructor(props: IProperties);
    render(): JSX.Element | null;
}
export default Container;
