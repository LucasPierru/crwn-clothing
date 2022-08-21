import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { SignUpContainer, Header } from './sign-up-form.styles.jsx'
import { signUpStart } from '../../store/user/user.action';

const defaultFormFields = {
  displayName:'',
  email:'',
  password:'',
  confirmPassword:''
}

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords are different');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch(error) {
      if(error.code === 'auth/email-already-in-use') alert('Cannot create user, email already in use');
      else console.log('Error creating a user:', error.message)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:value})
  }

  return(
    <SignUpContainer>
      <Header>Don't have an account?</Header>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          type="text"
          required 
          onChange={handleChange} 
          name="displayName" 
          value={displayName}
        />
        <FormInput 
          label="Email"
          type="email"
          required 
          onChange={handleChange} 
          name="email" 
          value={email}
        />
        <FormInput 
          label="Password"
          type="password"
          required 
          onChange={handleChange} 
          name="password" 
          value={password}
        />
        <FormInput 
          label="Confirm Password"
          type="password"
          required 
          onChange={handleChange} 
          name="confirmPassword" 
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
}

export default SignUpForm;