import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button, Logo, Actions } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo src="https://miro.medium.com/max/800/1*6GwF_Ln58TJELUbb1n9poA.jpeg"></Logo>
      <Actions>
        <Link to="/">
          <Button>Register</Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </Actions>
    </Container>
  );
}
