import { IComponentModule } from '@source/types';
import * as React from 'react';

export interface IProperties {
  // tslint:disable-next-line:no-any
  content: any[];
  componentModule: IComponentModule;
}

class Container extends React.Component<IProperties, {}> {

  constructor(props: IProperties) {
    super(props);
  }

  public render() {
    if (!this.props.content || this.props.content.length < 1) {
      return null;
    }

    const MappedContent = this.props.content.map((node) => {
      if (node.type === 'container') {
        return (
          <Container
            content={node.content}
            componentModule={this.props.componentModule}
          />
        );
      } else {
        const Comp = this.props.componentModule.getComponent(node.name);
        return (
          <Comp
            data={node.data}
          />
        );
      }
    });

    return (
      <div className="layout">
        {...MappedContent}
      </div>
    );
  }

}

export default Container;
