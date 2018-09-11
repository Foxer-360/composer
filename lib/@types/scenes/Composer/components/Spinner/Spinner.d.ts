import * as React from 'react';
export interface IState {
    isSpinning: boolean;
}
declare class Spinner extends React.Component<{}, IState> {
    constructor(props: {});
    enable(): void;
    disable(): void;
    render(): JSX.Element;
}
export default Spinner;
