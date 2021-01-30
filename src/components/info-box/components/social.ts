export enum SocialPlatform {
    Instagram,
    Twitter,
    Facebook,
    YouTube
}

export interface ISocialItems {
    platform: SocialPlatform
    link: string
}

export class SocialItem implements ISocialItems {
    platform: SocialPlatform;
    link: string;

    constructor(platform: SocialPlatform, link: string) {
        this.platform = platform
        this.link = link
    }
}
