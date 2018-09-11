import * as React from 'react';
import { IComponentsServiceLikeClass } from '../../../../../../Composer';
export interface IProperties {
    componentsService: IComponentsServiceLikeClass;
}
declare class Frame extends React.Component<IProperties, {}> {
    render(): JSX.Element;
    private generateFrameContent;
    private generateStyleLinks;
}
export default Frame;
