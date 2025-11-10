import React from 'react';
import './card.css';

function Card(props) {
    return (
        <div id="adi">
            <img src="https://tse3.mm.bing.net/th/id/OIP.j81mPHTGar1SPpQmLXKlEAHaE7?w=1280&h=853&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Placeholder" height={200} width={200} />
            <h2>{props.name}</h2>
            <h4>{props.age}</h4>
        </div>
    );
}
export default Card;