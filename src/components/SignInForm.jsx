import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react';
const SignInForm = (props) => {
    const axios = require('axios');
    const emailInput = useRef();
    const passwordInput = useRef();

    // add signin/signup axios calls
    const signIn = () => {
        axios.post('https://healer-clicker.herokuapp.com/api/signin', {
            email: emailInput.current,
            password: passwordInput.current
        })
        .then(response=>{
            props.setToken(old => response.data.token);
        }).catch(error=>{
            // setConfirmation(old =>'Sign In Failed, try again!');
        });
    }

    const signUp = () => {
        axios.post('https://healer-clicker.herokuapp.com/api/signup', {
            email: emailInput.current,
            password: passwordInput.current
        });
    }

    const buttonType = () => {
        if (props.signInButton.current===true) {
        return <Button variant="primary" type="submit" onClick={(e) => {
                e.preventDefault();
                signIn()
            }} >
                SignIn
            </Button>
        } else {
            return <Button variant="primary" type="submit" onClick={(e) => {
                e.preventDefault();
                signUp()
            }} >
                SignUp
            </Button>
        }
    }

    return (
        <div className='signInForm'>
        <Form>
            <Form.Group>
                <Form.Control 
                type="text"
                placeholder="Email *"
                onChange={(e)=>emailInput.current = e.target.value}
                required
                />

                <Form.Control 
                    type="password"
                    placeholder="Password *"
                    onChange={(e)=>passwordInput.current = e.target.value}
                    required
                />
            {buttonType()}

            </Form.Group>
        </Form>
        </div>
    )
}

export default SignInForm;