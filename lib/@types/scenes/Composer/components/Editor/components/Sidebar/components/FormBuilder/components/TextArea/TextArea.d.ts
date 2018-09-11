import * as React from 'react';
interface IMyTextAreaProps {
    type?: string | 'text';
    label: string;
    notitle?: boolean;
    name: string;
    value?: string;
    placeholder?: string;
    rows?: number;
    onChange: (e: React.ChangeEvent<Element>) => void;
}
export default class MyTextArea extends React.Component<IMyTextAreaProps, {}> {
    render(): JSX.Element;
}
export {};
