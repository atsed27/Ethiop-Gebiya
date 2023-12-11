import styled from 'styled-components';

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
  @media only screen and (max-width: 430px) {
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
function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE NEW ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="conform password" />
          <Agreement>
            By creating a new account,I consist to the processing of my personal
            data in according with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>SING UP</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
