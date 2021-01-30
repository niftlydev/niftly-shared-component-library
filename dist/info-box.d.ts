/// <reference types="react" />

import { ISocialItems } from './components/social';

export interface IInfoBox {

    heading: string;

    description: string;

    highlight?: string;

    social?: Array<ISocialItems>;

}

export declare class Info implements IInfoBox {

    heading: string;

    description: string;

    highlight?: string;

    social?: Array<ISocialItems>;

    constructor(heading: string, description: string, highlight?: string, social?: Array<ISocialItems>);

}

export declare const InfoBox: (info: IInfoBox) => JSX.Element;

