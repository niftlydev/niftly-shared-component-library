import { Box, Heading, Text } from "@chakra-ui/react"
import React from "react"

export const Testimonial = ({title, description}) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
            <Heading size="lg">{title}</Heading>
            <Text>{description}</Text>
        </Box>
    )
}
