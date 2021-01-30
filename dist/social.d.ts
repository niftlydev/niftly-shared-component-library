export declare enum SocialPlatform {

    Instagram = 0,

    Twitter = 1,

    Facebook = 2,

    YouTube = 3

}

export interface ISocialItems {

    platform: SocialPlatform;

    link: string;

}

export declare class SocialItem implements ISocialItems {

    platform: SocialPlatform;

    link: string;

    constructor(platform: SocialPlatform, link: string);

}

