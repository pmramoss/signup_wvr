import React from 'react';
import InputComp from "../../Components/Input"
import TitleComp from "../../Components/Title"
import ButtonComp from "../../Components/Button"
import CheckboxComp from "../../Components/Checkbox"
import { Container, Form } from './Signup_styles';
import useForm from '../../Hooks/useForm';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [error, setError] = React.useState(false);
  const [check, setCheck] = React.useState(false);
  const fullName = useForm('fullName');
  const email = useForm('email');
  const phone = useForm('phone');
  const password = useForm('password');

  function handleSubmit(e){
    e.preventDefault();

    if(fullName.validate() && email.validate() && phone.validate() && password.validate()){
      if(check === true){
        navigate("/home");
        return;
      } else{
        setError(true);
      }
    }
  }

  console.log(error)

  return (
    <Container>
      <Form>
        <TitleComp text="SignUp" fontWeight={600} color="000" />
        <InputComp
          type="text"
          name="fullName"
          label="Full name *"
          placeholder="Full name"
          width={100}
          {...fullName}
        />
        <InputComp
          type="email"
          name="email"
          label="Email *"
          placeholder={'email@dom.com'}
          width={60}
          {...email}
        />
        <InputComp
          type="tel"
          name="phone"
          label="Phone *"
          placeholder={'Minimum of 6 numbers'}
          width={32}
          {...phone}
        />
        <InputComp
          type="password"
          name="password"
          label="Password *"
          width={60}
          {...password}
        />
        <InputComp
          type="date"
          name="birthday"
          label="Birthday"
          width={32}
        />
        <CheckboxComp name="checkbox" label="I accept the terms and privacy" onChange={() => setCheck(!check)} status={error} />
        <ButtonComp text="Submit" backgroundColor={'000'} color="E84CE8" width={20} onClick={handleSubmit} />
      </Form>
    </Container>
  );
};

export default Signup;
