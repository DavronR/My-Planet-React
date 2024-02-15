import React from 'react';
import Card from 'react-bootstrap/Card';

function PlanetCard({ name, image, description }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt={`Image of ${name}`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PlanetCard;
