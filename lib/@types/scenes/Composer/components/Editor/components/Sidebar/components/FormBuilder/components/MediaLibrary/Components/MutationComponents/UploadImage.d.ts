import { ILooseObject } from '../../../../../../../../../../../../types';
import * as React from 'react';
export interface IUploadImageProps {
    closeEditor?: () => void;
    onChange?: (media: object) => void;
}
export interface IUploadImageState {
    loading: boolean;
    uploadImage?: (fileList: ILooseObject) => void;
}
declare class UploadImage extends React.Component<IUploadImageProps, IUploadImageState> {
    constructor(props: IUploadImageProps);
    uploadImage: (fileList: ILooseObject, mediaData: ILooseObject) => void;
    render(): JSX.Element;
}
export default UploadImage;
