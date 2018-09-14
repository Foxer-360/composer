import { IComponentModule, IPluginModule } from '@source/types';
import * as React from 'react';
import Container from './components/Container';

export interface IProperties {
  // tslint:disable-next-line:no-any
  content: any;

  componentModule: IComponentModule;
  pluginModule: IPluginModule;
}

class LightweightComposer extends React.Component<IProperties, {}> {

  public render(): JSX.Element {
    return (
      <Container
        content={this.props.content.content}
        componentModule={this.props.componentModule}
      />
    );
  }

}

export default LightweightComposer;
