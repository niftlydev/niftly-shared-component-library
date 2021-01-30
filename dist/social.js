export var SocialPlatform;

(function (SocialPlatform) {

    SocialPlatform[SocialPlatform["Instagram"] = 0] = "Instagram";

    SocialPlatform[SocialPlatform["Twitter"] = 1] = "Twitter";

    SocialPlatform[SocialPlatform["Facebook"] = 2] = "Facebook";

    SocialPlatform[SocialPlatform["YouTube"] = 3] = "YouTube";

})(SocialPlatform || (SocialPlatform = {}));

export class SocialItem {

    constructor(platform, link) {

        this.platform = platform;

        this.link = link;

    }

}

