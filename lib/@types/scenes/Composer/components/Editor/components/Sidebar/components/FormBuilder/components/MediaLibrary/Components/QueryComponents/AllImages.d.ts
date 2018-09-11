import * as React from 'react';
export interface IAllImagesState {
    images: any[];
}
declare class AllImages extends React.Component<{}, IAllImagesState> {
    constructor(props: {});
    componentDidMount(): void;
    render(): JSX.Element;
}
export default AllImages;
