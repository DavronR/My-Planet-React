import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlanetCard from './PlanetCard';

function PlanetList({ planets }) {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {planets.map((planet, idx) => (
                <Col key={idx}>
                    <PlanetCard 
                        name={planet.name} 
                        image={planet.image}
                        description={planet.description}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default PlanetList;
