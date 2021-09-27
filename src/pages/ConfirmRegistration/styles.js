import styled from 'styled-components';

export const Form = styled.form`
  background: #457b9d;
  width: 500px;
  padding: 15px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  color: #fff;

  input {
    height: 50px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 5px;
    text-align: center;
    -moz-text-blink: unset;

    &::placeholder {
      text-align: center;
      font-size: 20px;
    }
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 100%;
  height: 40px;
  color: #fff;
  background: #e63946;
  font-weight: 700;
  font-size: 17px;
`;
