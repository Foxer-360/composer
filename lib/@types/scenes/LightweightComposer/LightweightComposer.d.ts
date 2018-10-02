import { IComponentModule, IPluginModule } from '../../types';
import { Context } from '../../utils';
import * as React from 'react';
export interface IProperties {
    content: any;
    componentModule: IComponentModule;
    pluginModule: IPluginModule;
    context: Context;
    plugins: string[];
    client: any;
}
declare class LightweightComposer extends React.Component<IProperties, {}> {
    private pluginsInstances;
    constructor(props: IProperties);
    render(): JSX.Element;
}
export default LightweightComposer;
