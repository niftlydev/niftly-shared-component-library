import * as React from 'react';
import { Testimonial } from '../../../components/testimonial/testimonial';

export const ServicesBoxFactory = () => {
    const tests: Array<any> = [];

    const test1 = <Testimonial title="Test 1" description="Description, this is some text. Some test text which is weird because test and text only have 1 letter difference."/>
    const test2 = <Testimonial title="Test 2" description="Description, this is some text. Some test text which is weird because test and text only have 1 letter difference."/>
    const test3 = <Testimonial title="Test 3" description="Description, this is some text. Some test text which is weird because test and text only have 1 letter difference."/>

    tests.push(test1);
    tests.push(test2);
    tests.push(test3);

    return tests;
}

