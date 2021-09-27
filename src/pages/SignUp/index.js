import React, { useState } from 'react';
import { UserPool } from '../../services/Cognito';

import { AiOutlineCloseCircle } from 'react-icons/ai';

import {
  Container,
  Title,
  Form,
  Button,
  ErrorContainer,
  SuccessContainer,
} from '../../global/styles';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [success, setSuccess] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        setError(true);
        setErrorMessage(err.message);
      } else {
        setSuccess(true);
      }
    });
  }

  return (
    <Container>
      <Title>Sign Up</Title>
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
      {success ? (
        <SuccessContainer>
          <button onClick={() => setSuccess(false)}>
            <AiOutlineCloseCircle />
          </button>
          <p>
            Your account was created! Check the code in your email and activate
            your account!
          </p>
        </SuccessContainer>
      ) : null}
    </Container>
  );
}
