import axios from 'axios';
import { useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

  @media only screen and (max-width: 630px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 24;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  margin: auto;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Dani = styled.div``;
function Register() {
  const router = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (e) => {
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:9327/api/auth/signup', {
        fName: firstName,
        lName: lastName,
        email,
        username,
        password,
        conformPassword,
      });
      setLoading(false);
      router('/login');
    } catch (error) {
      console.log(error);
      setError(true);
      setErrorMessage(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE NEW ACCOUNT</Title>
        <Form>
          <Input
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            placeholder="conform password"
            onChange={(e) => setConformPassword(e.target.value)}
          />
          <Dani>{error && errorMessage ? 'pass' : ''}</Dani>
          <Agreement>
            By creating a new account,I consist to the processing of my personal
            data in according with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSignUp} disabled={loading}>
            SING UP
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
