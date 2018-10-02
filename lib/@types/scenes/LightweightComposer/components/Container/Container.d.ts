import { IComponentModule } from '../../../../types';
import { Context } from '../../../../utils';
import * as React from 'react';
export interface IProperties {
    content: any[];
    componentModule: IComponentModule;
    context: Context;
}
declare class Container extends React.Component<IProperties, {}> {
    constructor(props: IProperties);
    render(): JSX.Element | null;
}
export default Container;
