import * as React from 'react';
export interface IMySelectOption {
    [key: string]: string;
}
interface IMySelectProps {
    type?: 'select' | 'multiselect' | 'enum';
    label: string;
    notitle?: boolean;
    name: string;
    value?: string | string[];
    placeholder?: string;
    options: IMySelectOption[];
    onChange: (e: React.ChangeEvent<Element> | any) => void;
}
export default class MySelect extends React.Component<IMySelectProps> {
    constructor(props: IMySelectProps);
    handleChange(value: string | any, option: React.ReactElement<any> | Array<React.ReactElement<any>>): void;
    render(): JSX.Element;
}
export {};
