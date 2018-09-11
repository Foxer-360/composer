import { ILooseObject } from '../../../../../../../../../../../../types';
import * as React from 'react';
export interface IEditorProps {
    image?: any;
    uploadImage?: (fileList: ILooseObject, mediaData?: ILooseObject) => void;
    loading?: boolean;
    onChange?: (media: object) => void;
    closeEditor?: () => void;
}
export interface IEditorState {
    fileList: any;
    image64: any;
}
declare class Editor extends React.Component<IEditorProps, IEditorState> {
    constructor(props: IEditorProps);
    componentWillUnmount(): void;
    getImageInfo: (image: any) => string;
    render(): JSX.Element;
}
export default Editor;
