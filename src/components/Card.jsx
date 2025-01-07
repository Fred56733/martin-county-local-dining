import React from "react";

const Card = ({ image, name, cuisine, price, location, description, link }) => {
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <h3>{name}</h3>
            <p><strong>Cuisine: </strong> {cuisine}</p>
            <p><strong>Price: </strong>{price}</p>
            <p><strong>Location: </strong>{location}</p>
            <p><strong>Summary: </strong>{description}</p>
            <a href={link} className="btn" target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
    );
};

export default Card;