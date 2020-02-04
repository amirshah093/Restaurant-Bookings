import React from 'react'
import Hero from '../components/hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return <Hero>
    <Banner title="404" subtitle="Page not found">
        <Link to="/" className="btn-primary">Go to Home</Link>
    </Banner>
    </Hero>
};


export default ErrorPage;
