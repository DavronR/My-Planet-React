import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1 className='text-center'>Contact Us</h1>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required 
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ContactForm;
