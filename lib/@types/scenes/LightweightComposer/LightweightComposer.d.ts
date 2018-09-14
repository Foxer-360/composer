import { IComponentModule, IPluginModule } from '../../types';
import * as React from 'react';
export interface IProperties {
    content: any;
    componentModule: IComponentModule;
    pluginModule: IPluginModule;
}
declare class LightweightComposer extends React.Component<IProperties, {}> {
    render(): JSX.Element;
}
export default LightweightComposer;
