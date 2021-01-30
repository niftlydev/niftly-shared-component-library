/// <reference types="react" />

import { IInfoBox, Info } from '../info-box/info-box';

export interface IListingItem {

    infoBox: IInfoBox;

    image?: any;

    imageAlt?: string;

}

export declare type ListingProps = {

    listing: IListingItem;

};

export declare class ListingItem implements IListingItem {

    infoBox: Info;

    image?: any;

    imageAlt?: string;

    constructor(info: IInfoBox, listImage?: string, imageAlt?: string);

}

export declare const Listing: ({ listing }: ListingProps) => JSX.Element;

