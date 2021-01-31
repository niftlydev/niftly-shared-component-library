import { Box, Heading, Text } from "@chakra-ui/react"
import React from "react"

export const Testimonial = ({title, description}) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
            <Heading size="lg" paddingBottom="5%">{title}</Heading>
            <Text fontSize="24px">{description}</Text>
        </Box>
    )
}
