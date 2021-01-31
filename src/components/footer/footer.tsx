import React from 'react';
import { Box, Grid, Center, Text } from '@chakra-ui/react';
import FooterColumnParent from './components/footer-column-parent';

export enum ColumnType {
    Info,
    Links,
    Social
}

export class ColumnDetailsInfo {
    constructor(logo?: any, address?: string, phoneNumber?: string) {
        this.logo = logo;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    logo: any;
    address: string;
    phoneNumber: string;
}

export class ColumnDetailsLinks {
    constructor(text?: string, url?: string) {
        this.text = text;
        this.url = url;
    }
    text: string;
    url: string;
}

export class ColumnDetailsSocial {
    constructor(emailAddress?: string, instagram?: string, facebook?: string, pintrest?: string){
        this.emailAddress = emailAddress;
        this.instagram = instagram;
        this.facebook = facebook;
        this.pintrest = pintrest;
    }
    emailAddress?: string;
    instagram?: string;
    facebook?: string;
    pintrest?: string;
}

export class Column {
    constructor(type: ColumnType, title: string, columnDetailsInfo?: ColumnDetailsInfo, columnDetailsLinks?: Array<ColumnDetailsLinks> , columnDetailsSocial?: ColumnDetailsSocial){
        this.type = type;
        this.title = title;
        this.columnDetailsInfo = columnDetailsInfo;
        this.columnDetailsLinks = columnDetailsLinks;
        this.columnDetailsSocial = columnDetailsSocial;
    }
    type: ColumnType;
    title: string;
    columnDetailsInfo?: ColumnDetailsInfo;
    columnDetailsLinks?: Array<ColumnDetailsLinks>;
    columnDetailsSocial?: ColumnDetailsSocial;
}

export const Footer = ({columns}: {columns: Array<Column>}) => {
    return (
        <Box bg="brand.footbarColor">
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {columns.map(column => 
                    <Box w="100%" h="200px">
                        <Box><Center><Text color="brand.footbarTitleColor" as="u" fontSize="3xl">{column.title}</Text></Center></Box>
                        <Box padding="10px" color="white"><Center><FooterColumnParent column={column} /></Center></Box>                    
                    </Box>
                )}               
            </Grid>
        </Box>
    )
};

