import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddTriviaForm({ setTriviaData }) {
    const [userName, setUserName] = useState('');
    const [planetName, setPlanetName] = useState('');
    const [trivia, setTrivia] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTrivia = {
            userName,
            planetName,
            trivia,
            date: new Date().toISOString().split('T')[0] // Format date as YYYY-MM-DD
        };
        setTriviaData(prevData => [...prevData, newTrivia]);
        setUserName('');
        setPlanetName('');
        setTrivia('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1 className='text-center'>Add Trivia</h1>
            <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control 
                    type="text" 
                    value={userName}
                    onChange={e => setUserName(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Planet Name</Form.Label>
                <Form.Control 
                    type="text" 
                    value={planetName}
                    onChange={e => setPlanetName(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Trivia</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    value={trivia}
                    onChange={e => setTrivia(e.target.value)} 
                    required 
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Trivia
            </Button>
        </Form>
    );
}

export default AddTriviaForm;
