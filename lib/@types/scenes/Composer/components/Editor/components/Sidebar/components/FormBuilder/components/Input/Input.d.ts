import * as React from 'react';
interface IMyInputProps {
    type?: string | 'text';
    label: string;
    notitle?: boolean;
    name: string;
    value?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<Element>) => void;
}
export default class MyInput extends React.Component<IMyInputProps> {
    render(): JSX.Element;
}
export {};
