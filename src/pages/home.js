import React from 'react';
import Hero from '../components/hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import Services from '../components/services';
import FuturedRoom from '../components/FuturedRoom';



const Home = () => {
    return <div>
    <Hero>
        <Banner title="Luxurius Rooms" subtitle="Deluxe Rooms Starting at $299">
            <Link to="/rooms" className="btn-primary"> Gor to Rooms </Link>
        </Banner>
    </Hero>
    <Services />
    <FuturedRoom />
    </div>;


}


export default Home;