import Button from 'react-bootstrap/Button'
import { useRef, useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal'
import SignInForm from './SignInForm';
import UserContext from './UserContext';

const Header = () => {
    const [show, setShow] = useState(false);
    const token = useContext(UserContext);
    const signInButton = useRef();

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);
    return(
        <div className="header">
            <h1>Healing Clicker</h1>
            {/* ADD SAVE BUTTON HERE */}
            <div className='login-container'>
            <Button className="signin"
            onClick={()=>{
                signInButton.current = true;
                handleShow();
            }}
            >
                Sign In
            </Button>
            <Button className="signup"
            onClick={()=>{
                signInButton.current = false;
                handleShow();
            }}
            >
                Sign Up
            </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                {signInButton.current?"Sign In":"Sign Up"}
                </Modal.Header>
                <Modal.Body>
                <SignInForm 
                signInButton={signInButton}
                />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Header;