import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { 
  signInWithGooglePopup, 
  signInAuthUserWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils'

import { SignInContainer, Header, ButtonContainer } from './sign-in-form.styles.jsx'

import { useState } from 'react';

const defaultFormFields = {
  email:'',
  password:'',
}
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth-user-not-found':
          alert('no useer associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  }

  const handleChange = (event) => {
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