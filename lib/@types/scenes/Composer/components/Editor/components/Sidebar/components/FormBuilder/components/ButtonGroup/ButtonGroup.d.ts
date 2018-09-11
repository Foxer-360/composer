import * as React from 'react';
export interface IMyButtonGroupOption {
    [key: string]: string;
}
interface IMyButtonGroupProps {
    label: string;
    notitle?: boolean;
    name: string;
    value?: string | number | null;
    placeholder?: string;
    options: IMyButtonGroupOption[];
    onChange: (e: React.ChangeEvent<Element> | any) => void;
}
export default class ButtonGroup extends React.Component<IMyButtonGroupProps, {}> {
    constructor(props: IMyButtonGroupProps);
    handleChange(e: any): void;
    render(): JSX.Element | null;
}
export {};
