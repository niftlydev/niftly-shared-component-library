import React from 'react';
import { ISocialItems, SocialItem, SocialPlatform } from "../../components/social-item/social-item"
import { Info } from "../../components/info-box/info-box"
import { Heading, Text } from '@chakra-ui/react';

var social: Array<ISocialItems> = [
    new SocialItem(SocialPlatform.Facebook, "link"),
    new SocialItem(SocialPlatform.Instagram, "link"),
    new SocialItem(SocialPlatform.YouTube, "link"),
    
]

var lastpart = <div>
            <p>Phone: (405) 111-1111</p>
            <p>Email: bdaneshmand@gmail.com</p>
            </div>

var heading = <Heading>Bianca Daneshhmand</Heading>
var description = <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>

export const infobox = new Info(heading, description, lastpart, social)


export const renderDescription = (desc) => {
    if(desc.length > 300) {
        let shortened = desc.substring(0, 300);
        shortened += "..."
        return shortened
    }

    return desc
}
