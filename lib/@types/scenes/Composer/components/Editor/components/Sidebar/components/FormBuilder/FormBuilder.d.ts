import { ILooseObject } from '../../../../../../../../types';
import * as React from 'react';
import { SelectOption } from './components/Select';
export interface IFormSchemaElement {
    type?: string | 'text';
    title?: string;
    notitle?: boolean;
    placeholder?: string;
    options?: SelectOption[];
    rows?: number;
    properties?: IFormSchemaElement[];
}
export interface IFormSchema {
    properties: Array<{
        [elementName: string]: IFormSchemaElement;
    }>;
}
interface IFormBuilderProps {
    form?: {
        schema: IFormSchema;
    };
    data?: ILooseObject;
    onChange: (data: ILooseObject) => void;
}
declare class FormBuilder extends React.Component<IFormBuilderProps> {
    constructor(props: IFormBuilderProps);
    handleChange(e: React.ChangeEvent | any): void;
    mediaLibraryChange(media: {
        value: object;
        name: string;
    }): void;
    renderElements(schema: IFormSchema): JSX.Element[] | null;
    render(): JSX.Element;
}
export default FormBuilder;
