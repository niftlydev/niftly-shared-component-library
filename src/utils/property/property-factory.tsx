import React from 'react';
import {Property} from '../../components/property/property';

export const propertyFactory = () => {
    var link = "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg" 

    const arr: Array<any> = [];

    const x = <Property image={link} imageAlt="alt" address="1111 some address, city, state zipcode" price="$100,000"/>
    const y = <Property image={link} imageAlt="alt" address="1111 some address, city, state zipcode" price="$100,000"/>
    const z = <Property image={link} imageAlt="alt" address="1111 some address, city, state zipcode" price="$100,000"/>

    arr.push(x);
    arr.push(y);
    arr.push(z);

    return arr;
}