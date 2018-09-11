import * as React from 'react';
interface IMyCheckBoxProps {
    type?: string | 'text';
    label: string;
    notitle?: boolean;
    name: string;
    value?: boolean;
    placeholder?: string;
    onChange: (e: any) => void;
}
export default class MyCheckBox extends React.Component<IMyCheckBoxProps> {
    handleChange: (e: any) => void;
    render(): JSX.Element;
}
export {};
