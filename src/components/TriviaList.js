import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

function TriviaList({ triviaData }) {
    const [filter, setFilter] = useState('');

    const filteredData = filter
        ? triviaData.filter(item => item.planetName.toLowerCase().includes(filter.toLowerCase()))
        : triviaData;

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="filterInput">
                    <Form.Label>Filter by Planet Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter planet name" 
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    />
                </Form.Group>
            </Form>
            {filteredData.map((item, index) => (
                <Card key={index} className="mb-3">
                    <Card.Header className='bg-dark text-white'>{item.planetName}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>User:</strong> {item.userName}</ListGroup.Item>
                        <ListGroup.Item><strong>Trivia:</strong> {item.trivia}</ListGroup.Item>
                        <ListGroup.Item><strong>Date:</strong> {item.date}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </div>
    );
}

export default TriviaList;
