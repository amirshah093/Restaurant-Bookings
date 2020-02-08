import React from 'react';
import {RoomContext} from '../contaxt'
import Room from '../pages/room';
import Title from './title';


class FuturedRoom extends React.Component {
    static contextType = RoomContext;

    render() {
        let { featuredRooms: rooms } = this.context;
        rooms = rooms.map(room =>{
            return <Room key={room.id} room = {room} />;
        });

        return (
        <section className='featured-rooms'>
        <Title title='Featured Rooms' />
            <div className="featured-rooms-center">
                {rooms}
            </div>

             
        </section>
    )}
}


export default FuturedRoom;