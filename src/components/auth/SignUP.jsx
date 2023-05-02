import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        style={{
          width: '25rem',
          backgroundColor: '#ffd700',
          padding: '20px',
          borderRadius: '20px',
        }}
      >
        <h1>Create account</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderRadius: '20px 20px 0 0' }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderRadius: '0 0 20px 20px' }}
          />
          <br />
        </Form.Group>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant="primary"
            type="submit"
            style={{ width: 'calc(50% - 10px)', borderRadius: '20px' }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
