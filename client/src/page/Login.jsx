import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginFiler, loginStart, loginSuccess } from '../redux/userSlice';
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
  width: 25%;
  padding: 20px;
  background-color: white;
  @media only screen and (max-width: 430px) {
    width: 75%;
  }
`;

const Title = styled.h1`
  font-size: 24;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: red;
    cursor: not-allowed;
  }
  @media only screen and (max-width: 430px) {
    margin: auto;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
`;
const Error = styled.span`
  color: red;
`;
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(
        'https://e-gebiya-k75e.onrender.com/api/auth/signIn',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(loginSuccess(res.data));
      console.log(res);
      navigate('/');
    } catch (error) {
      dispatch(loginFiler());
      setError(error.response.data);
    }
  };

  const user = useSelector((state) => state.user);
  return (
    <Container>
      <Wrapper>
        <Title>well come back</Title>
        <Form>
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {user.error && error.message === 'email is not found' ? (
            <Error>{error.message}</Error>
          ) : (
            ''
          )}
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {user.error && error.message === 'password is inCorrect ' ? (
            <Error>{error.message}</Error>
          ) : (
            ''
          )}

          <Button onClick={handleLogin} disabled={user.loading}>
            SIGN IN
          </Button>
          <Link>Do NoT YOU HAVE REMEMBER YOUR PASSWORD </Link>
          <Link> CREATE NEW ACCOUNT </Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
