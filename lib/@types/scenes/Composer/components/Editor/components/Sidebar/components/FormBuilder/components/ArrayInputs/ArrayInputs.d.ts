import { ILooseObject } from '../../../../../../../../../../types';
import * as React from 'react';
import { IFormSchema } from '../../FormBuilder';
interface IArrayInputsProps {
    title: string;
    name: string;
    language: string;
    data: ILooseObject[];
    items: IFormSchema;
    onChange: (e: React.ChangeEvent | any) => void;
}
interface IArrayInputsState {
    activeTab: number;
}
declare class ArrayInputs extends React.Component<IArrayInputsProps, IArrayInputsState> {
    constructor(props: IArrayInputsProps);
    onChangeTab(key: string): void;
    onNewTab(): void;
    onEditTab(targetKey: string, action: string): void;
    onChange(key: any): void;
    mediaLibraryChange(media: {
        value: object;
        name: string;
    }): void;
    render(): JSX.Element;
}
export default ArrayInputs;
