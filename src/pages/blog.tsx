import React, { useEffect } from 'react';
import Layout from '../components/layout/layout';
import {navigate} from 'gatsby';

const BlogPage = () => {

    useEffect(() => {
        navigate("/blog/selling-your-home");
    })

    return (
        <Layout>
            <div>
                Blog Page
            </div>
        </Layout>
        
    )
}

export default BlogPage;