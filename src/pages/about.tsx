import * as React from "react"
import { infobox } from "../utils/info-box/info-box-factory";
import {InfoBox, IInfoBox, Info} from '../components/info-box/info-box';
import { HighlightBox, HighlightSize, PaddingSize } from "../components/highlight-box/highlight-box";
import {highlightBoxFactory} from '../utils/highlight-box/highlight-box-factory';
import Layout from '../components/layout/layout';
import {AboutUs} from '../components/about-us/about-us';
import {Box, Image, Text, Center, Heading} from '@chakra-ui/react';
import { useAboutData } from "../queries/about-query";
import { ISocialItems, SocialItem, SocialPlatform } from "../components/info-box/components/social";
import { Testimonial } from '../components/testimonial/testimonial';
import { IListingItem, Listing, ListingItem } from "../components/listing/listing";
import { Gsap } from "../components/gsap/gsap";
import {Power3} from 'gsap';
import Img from 'gatsby-image';

// markup
const AboutPage = () => {

  const {intro_list, jumbo_image, team_member, testimonial, title, fileAbsolutePath} = useAboutData();  

  let tests = [];
  testimonial.forEach(t => {
    tests.push(<Testimonial title={t.customer} description={t.body}/>)
  });

  let sourceUri = `${jumbo_image}`;


  const vars = [
    {duration: 1.2, method: "from", vars: {y:1280, ease: Power3.easeOut}},
    {duration: 1.2, method: "from", vars: {scale:.8, ease: Power3.easeOut}, delay: .2}
  ]

  const renderDescription = (desc) => {
    if(desc.length > 300) {
        let shortened = desc.substring(0, 300);
        shortened += "..."
        return shortened
    }

    return desc
}



  return (
    <main>
      <title>{title}</title>

        <Layout>
          <AboutUs>
            <Box m="5%" flex="1 0 25%" backgroundColor="rgba(50,50,50, .4)">
              <Center>
                <Image w="30%" objectFit="cover" src={sourceUri}/>
              </Center>
            </Box>
            <Box flex="1 0 25%" p="1% 2.5% 1% 2.5%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                {intro_list.map(intro => {
                    let highlights = [<Text fontSize="24px">{intro.intro_item}</Text>]
                    return (
                      <HighlightBox highlights={highlights} withBorder={false} size={HighlightSize.xl} padding={PaddingSize.md}/>
                    )
                })}
            </Box>
            <Box flex="1 0 25%" display="flex" flexDirection="row" justifyContent="space-between" p="2.5%">
              {team_member.map(member => {
                let highlight = <div>
                  {member.position ? <p style={{fontWeight: 'bold'}}>{member.position}</p> : <></>}
                  <p>{member.email}</p>
                  <p>{member.phone_number}</p>
                </div>

                let socials: Array<ISocialItems> = [];
                let facebook: ISocialItems = new SocialItem(SocialPlatform.Facebook, member.facebook);
                let instagram: ISocialItems = new SocialItem(SocialPlatform.Instagram, member.instagram);
                socials.push(facebook);
                socials.push(instagram);
                
                let heading = <Heading as="h2" size="lg" paddingBottom="2px">{member.name}</Heading>
                let image = <Img style={{height: "23em", width: "23em"}} fluid={member.photo.childImageSharp.fluid}/>
                let description = <Text fontSize="18px" paddingBottom="5%">{renderDescription(member.description)}</Text>                

                const info: IInfoBox = new Info(
                  heading,
                  description,
                  highlight,
                  socials,
                  image
                );

                return (
                  <Box p="10px" flex="0 1 45%">
                    <InfoBox info={info} border={true}/>
                  </Box>
                )
              })
              }
            </Box>
            <Box flex="1 0 25%" p="5%">
              <HighlightBox highlights={tests} withBorder={true} size={HighlightSize.sm} padding={PaddingSize.xl}/>
            </Box>
          </AboutUs>
        </Layout>
    </main> 
  )
}

export default AboutPage