import { ILooseObject } from '../../../../../../../../../../../../types';
import * as React from 'react';
export interface IGalleryProps {
    images?: ILooseObject[];
    placeImg?: any;
    image?: any;
}
export interface IGalleryState {
    isDrawerVisible: boolean;
    selectedImage: object | null;
}
declare class Gallery extends React.Component<IGalleryProps, IGalleryState> {
    constructor(props: IGalleryProps);
    showDrawer: (image?: object | undefined) => void;
    closeDrawer: () => void;
    onClose: () => void;
    render(): JSX.Element;
}
export default Gallery;
