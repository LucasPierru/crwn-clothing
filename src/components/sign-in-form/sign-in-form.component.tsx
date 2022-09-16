import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, Header, ButtonContainer } from './sign-in-form.styles'

import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from "react-redux";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
import { AuthError, AuthErrorCodes } from 'firebase/auth';

const defaultFormFields = {
  email:'',
  password:'',
}
const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  }
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields();
    } catch(error) {
      switch((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert('incorrect password');
          break;
        case AuthErrorCodes.USER_DELETED:
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]:value})
  }

  return(
    <SignInContainer>
      <Header>Already have an account?</Header>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button 
            buttonType={BUTTON_TYPE_CLASSES.google} 
            type='button' 
            onClick={signInWithGoogle} 
          >
            Google Sign In
          </Button>  
        </ButtonContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm;