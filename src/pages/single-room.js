import React from 'react';
import Hero from '../components/hero';
import Banner from '../components/banner';
import {RoomContext} from '../contaxt';
import {Link} from 'react-router-dom';
import defaultBcg from '../images/defaultBcg.jpeg'




class SingleRoom extends React.Component {
    constructor(props){
        super(props);
     //   console.log(this.props);
        this.props ={
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
   // componentDidMount() {}


    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if ( ! room ) {
            return <div className="error">
                <h3> No Such room found  </h3>
                <Link to="/rooms" className='btn-primary'>back to rooms</Link>
            </div>
        }
        console.log(room);
        return <div> Hello from Shah Single room {room.name} </div>;
    }
};


export default SingleRoom;
