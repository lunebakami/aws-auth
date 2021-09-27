import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { authenticateUser } from '../../services/Cognito';

import {
  Container,
  Title,
  Form,
  Button,
  ErrorContainer,
} from '../../global/styles';
import { Span } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('aaa');

  function onSubmit(event) {
    event.preventDefault();

    authenticateUser(email, password);
  }

  return (
    <Container>
      <Title>Sign In</Title>
      <Form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />

        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />

        <Button type="submit">Sign Up</Button>
      </Form>

      {error ? (
        <ErrorContainer>
          <button onClick={() => setError(false)}>
            <AiOutlineCloseCircle />
          </button>
          <p>{errorMessage}</p>
        </ErrorContainer>
      ) : null}

      <Span>
        <Link to="/confirm">FIRST ACCESS?</Link>
      </Span>
    </Container>
  );
}
