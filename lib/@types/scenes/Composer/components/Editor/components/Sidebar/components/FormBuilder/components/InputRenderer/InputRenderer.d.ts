import * as React from 'react';
import { IFormSchemaElement } from '../../FormBuilder';
interface InputRendererProps {
    name: string;
    value?: string;
    onChange: (e: React.ChangeEvent | any) => void;
    mediaLibraryChange: (value: any) => void;
}
declare class InputRenderer extends React.Component<InputRendererProps & IFormSchemaElement, {}> {
    render(): JSX.Element | null;
}
export default InputRenderer;
