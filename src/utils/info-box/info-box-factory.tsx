import React from 'react';
import { ISocialItems, SocialItem, SocialPlatform } from "../../components/info-box/components/social"
import { Info } from "../../components/info-box/info-box"

var social: Array<ISocialItems> = [
    new SocialItem(SocialPlatform.Facebook, "link"),
    new SocialItem(SocialPlatform.Instagram, "link"),
    new SocialItem(SocialPlatform.YouTube, "link"),
    
]

var lastpart = <div>
            <p>Phone: (405) 111-1111</p>
            <p>Email: bdaneshmand@gmail.com</p>
            </div>

export const infobox = new Info("Bianca Daneshmand", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", 
lastpart, social)