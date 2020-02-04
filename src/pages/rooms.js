import React from 'react'
import Hero from '../components/hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';

const Rooms = () => {
    return <Hero hero="roomsHero">
        <Banner title="Rooms" subtitle="find the best rooms for your Dream" >
            <Link to="/" className="btn-primary">Back to Home</Link>
        </Banner>
    </Hero>
};


export default Rooms;
