import React from 'react';
import {Property} from '../../components/property/property';

export const propertyFactory = (data) => {

    const arr: Array<any> = [];

    data.forEach(e => {
        arr.push(<Property image={e.photo} imageAlt="alt" address={e.address} price={e.price} />)
    });

    return arr;
}