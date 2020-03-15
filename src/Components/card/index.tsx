import React from "react";

import { Home } from "../../Store/ducks/home/types";

interface OwnProps {
    home: Home
}

const Card = ({home}: OwnProps) => (
    <div className="card">
        <img width="200" className="card-img-top" src={home.background} alt={home.name} title={home.name}/>
        <video width="240" height="180" controls>
            <source src={home.clip} type="video/mp4" />
        </video>
        <div className="card-body">
            <h5 className="card-title">{home.name}</h5>
            <p className="card-text">{home.released}</p>
            <a href={home.slug} className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
);

export default Card
