import React, {useState} from 'react';
import { Box, Center, Heading, Text, Input, Button, Grid, useToast } from '@chakra-ui/react';
import { ISizingWrapperProps, SizingWrapper } from '../sizing-wrapper/sizing-wrapper';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export interface IMailchimpSubscribeProps {
    sizingProps: ISizingWrapperProps
    header: string;
    subHeader: string;
    description: string;
    toastTitle: string;
}

export const MailchimpSubscribe = ({props}: {props: IMailchimpSubscribeProps}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mailchimpResult, setMailchimpResult] = useState(null);

    const toast = useToast();
     
  const _handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email, { NAME: name }, null);
    // I recommend setting `result` to React state
    // but you can do whatever you want

    if (result.result === "success") {
        toast({
            title: props.toastTitle,
            description: result.msg,
            status: "success",
            duration: 9000,
            isClosable: true
        });
        setName("");
        setEmail("");
    }
    else {
        toast({
            title: "Whoops, something went wrong :(",
            description: result.msg,
            status: "warning",
            duration: 9000,
            isClosable: true
        });
    }

    
  }

    return (
        <SizingWrapper props={props.sizingProps}>
            <Box><Center><Heading>{props.header}</Heading></Center></Box>
            <Box pt="25px"><Center><Heading>{props.subHeader}</Heading></Center></Box>
            <Box pt="10px"><Center><Text>{props.description}</Text></Center></Box>

            <Box pt="15px">
                <Center>
                    <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                        <Box><Input onChange={(e) => setName(e.target.value)} placeholder="Name" type="text"/></Box>
                        <Box><Input onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" type="email"/></Box>
                        <Box w="100%"><Button variant="action-link" onClick={(e) => _handleSubmit(e)} w="100%">Subscribe</Button></Box>           
                    </Grid>
                </Center> 
            </Box>

        </SizingWrapper>
    )
}