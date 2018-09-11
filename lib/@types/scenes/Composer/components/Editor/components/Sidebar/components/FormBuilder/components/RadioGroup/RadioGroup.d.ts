import * as React from 'react';
export interface IMyRadioGroupOption {
    [key: string]: string;
}
interface IMyRadioGroupProps {
    label: string;
    notitle?: boolean;
    name: string;
    value?: string | number | null;
    placeholder?: string;
    options: IMyRadioGroupOption[];
    onChange: (e: React.ChangeEvent<Element> | any) => void;
}
export default class RadioGroup extends React.Component<IMyRadioGroupProps, {}> {
    constructor(props: IMyRadioGroupProps);
    handleChange(e: any): void;
    render(): JSX.Element | null;
}
export {};
