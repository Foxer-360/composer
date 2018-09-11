import * as React from 'react';
export interface IGalleryCardProps {
    toggleEdit: (image: object) => void;
    placeImg: (image: object) => void;
    key: number;
    image: any;
}
declare const GalleryCard: React.SFC<IGalleryCardProps>;
export default GalleryCard;
