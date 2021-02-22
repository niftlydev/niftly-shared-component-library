import * as React from 'react';
import { Testimonial } from '../../../components/testimonial/testimonial';

export const ServicesBoxFactory = (data) => {
    const tests: Array<any> = [];

    data.forEach(e => {
        tests.push(<Testimonial title={e.title} description={e.description} />);
    });

    return tests;
}

