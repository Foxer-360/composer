import * as React from 'react';
export interface IMediaLibraryProps {
    onChange?: any;
    mediaData: any;
    name: string;
}
export interface IMediaLibraryState {
    visible: boolean;
    drawerType: string;
}
declare class MediaLibrary extends React.Component<IMediaLibraryProps, IMediaLibraryState> {
    constructor(props: IMediaLibraryProps);
    showDrawer: (type: string) => void;
    closeDrawer: () => void;
    onClose: () => void;
    onChangeAlt: (altValue: string) => void;
    dropImage(): void;
    render(): JSX.Element;
}
export default MediaLibrary;
