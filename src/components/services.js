import React from 'react';
import Title from './title';
import {FaCocktail, FaHiking, FaShuttleVan, FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';



class Services extends React.Component {
    state ={
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Shah is the best services providing company in afghanistan if you  want",
                link: "View More"
            },
            {
                icon: <FaHiking />,
                title: 'Haking',
                info: 'Shah is the best services providing company in afghanistan if you  want',
                link: "View More"
            },
            {
                icon: <FaShuttleVan />,
                title: 'Shuttle Van',
                info: 'Shah is the best services providing company in afghanistan if you  want',
                link: "View More"
            },
            {
                icon: <FaHome />,
                title: 'Free Bear',
                info: 'Shah is the best services providing company in afghanistan if you  want',
                link: <Link to='/hahah'> View More </Link>
            }
        ]
    }

    render() {
        return (
        <section className='services'>
        <Title title="Services" />
        <div className='services-center'>
          {this.state.services.map((item, index) =>{
              return <article key={index}  className="service">
                  <span>{item.icon}</span>
                  <h6> {item.title}</h6>
                  <p>{item.info}</p>
                  <div className="btn-primary">{item.link}</div>
              </article>
          })}  
        </div>
        
        </section>
        );
    }
}


export default Services;