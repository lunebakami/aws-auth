import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 700;
`;

export const Form = styled.form`
  background: #457b9d;
  width: 300px;
  padding: 15px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  color: #fff;

  input {
    height: 30px;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 15px;
    border-radius: 5px;
    text-align: center;

    &::placeholder {
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 100%;
  height: 40px;
  color: #fff;
  background: #e63946;
`;

export const ErrorContainer = styled.div`
  background: #ff6b6b;
  width: 300px;
  margin-top: 20px;
  border-radius: 5px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 20px;
    align-self: flex-end;
    margin: 5px 5px 0 0;
    background: transparent;
    font-size: 20px;
  }

  p {
    margin-bottom: 10px;
    width: 80%;
    text-align: center;
    background: #f08080;
    border-radius: 5px;
  }
`;

export const SuccessContainer = styled.div`
  background: #76c893;
  width: 300px;
  margin-top: 20px;
  border-radius: 5px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 20px;
    align-self: flex-end;
    margin: 5px 5px 0 0;
    background: transparent;
    font-size: 20px;
  }

  p {
    margin-bottom: 10px;
    width: 80%;
    text-align: center;
    background: #52b69a;
    border-radius: 5px;
  }
`;
