import React, { useState } from 'react';
import { getCognitoUser } from '../../services/Cognito';

import {
  Container,
  ErrorContainer,
  SuccessContainer,
  Title,
} from '../../global/styles';
import { Form, Button } from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [success, setSuccess] = useState(false);

  function onSubmit(event) {
    event.preventDefault();

    getCognitoUser(email).confirmRegistration(
      code,
      true,
      function (err, result) {
        if (err) {
          setError(true);
          setErrorMessage(err.message);
        } else {
          setSuccess(true);
        }
      }
    );
  }

  return (
    <Container>
      <Title>Confirm Registration</Title>
      <Form onSubmit={onSubmit}>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />

        <input
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="Your Code"
        />

        <Button type="submit">Confirm Registration</Button>
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
          <p>Your account was confirmed!</p>
        </SuccessContainer>
      ) : null}
    </Container>
  );
}
