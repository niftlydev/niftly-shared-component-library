import React from 'react';
import { Column, ColumnType } from '../footer';
import FooterColumnInfo from './footer-column-info';
import FooterColumnLinks from './footer-column-links';
import FooterColumnSocial from './footer-column-social';

const FooterColumnParent = ({column}: {column: Column}) => {
    if (column.type === ColumnType.Info) {
        return <FooterColumnInfo columnDetailsInfo={column.columnDetailsInfo} />
    }
    else if (column.type === ColumnType.Links) {
        return <FooterColumnLinks columnDetailsLinks={column.columnDetailsLinks} />
    }
    else if (column.type === ColumnType.Social) {
        return <FooterColumnSocial columnDetailsSocial={column.columnDetailsSocial} />
    }
}

export default FooterColumnParent;