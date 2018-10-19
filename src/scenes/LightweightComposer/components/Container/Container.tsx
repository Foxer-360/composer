import { IComponentModule } from '@source/types';
import { Context } from '@source/utils';
import * as React from 'react';

export interface IProperties {
  // tslint:disable-next-line:no-any
  content: any[];
  componentModule: IComponentModule;

  context: Context;
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
            context={this.props.context}
            key={node.id}
          />
        );
      } else {
        const Comp = this.props.componentModule.getComponent(node.name);
        const navigations = this.props.context.readProperty('navigations');
        const languages = this.props.context.readProperty('languages');
        const languageCode = this.props.context.readProperty('languageCode');

        // tslint:disable-next-line:no-console
        console.log('Container languageCode', languageCode);

        return (
          <Comp
            data={node.data}
            navigations={navigations}
            languages={languages}
            languageCode={languageCode}
            key={node.id}
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
