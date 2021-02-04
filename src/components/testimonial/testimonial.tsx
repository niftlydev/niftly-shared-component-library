import { Box, Heading, Text } from "@chakra-ui/react"
import React from "react"

type TestimonialProps = {
    title: string,
    description: string
}

export const Testimonial = ({title, description}: TestimonialProps) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
            <Heading size="lg" paddingBottom="5%">{title}</Heading>
            <Text fontSize="24px" whiteSpace="pre-line">{description}</Text>
        </Box>
    )
}
