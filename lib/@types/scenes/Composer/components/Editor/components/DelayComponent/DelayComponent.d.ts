import * as React from 'react';
export interface IProperties {
    delay?: number;
}
export interface IState {
    hidden: boolean;
}
declare class DelayComponent extends React.Component<IProperties, IState> {
    constructor(props: IProperties);
    componentWillMount(): void;
    render(): JSX.Element;
}
export default DelayComponent;
