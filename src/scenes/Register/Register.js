import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import AuthService from '../../services/auth-service'
import ErrorAlert from "../../components/Alert/ErrorAlert";

const Register = (props) => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    // error states
    const [doesShowError, setDoesShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const hideError = () => setDoesShowError(false);
    const showError = (errorMessage) => {
        setDoesShowError(true);
        setErrorMessage(errorMessage);
    }


    const handleFullNameChange = event => setFullName(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handleFirstPasswordChange = event => setFirstPassword(event.target.value);
    const handleSecondPasswordChange = event => setSecondPassword(event.target.value);

    const handleFormSubmit = event => {
        event.preventDefault();
        if (firstPassword === secondPassword) {

            AuthService.register(fullName, email, firstPassword)
                .then(authResponse => {
                    switch (authResponse.status) {
                        case 200:
                            props.setLogged(true);
                            props.history.push("/")
                            break;

                        case 400:
                            showError(authResponse.data.detail);
                            break;

                        default:
                            showError("Nie udało się zarejestrować.")
                            // console.log("Rejestracja nieudana", authResponse)
                    }
                });
        } else {
            console.log("Hasła się nie zgadzają...");
            return false;
        }
    }

    return (
        <div className="w-50 mx-auto">
            <h3>Join MovieDB</h3>
            <h2 className="w-100 text-center">Create your account</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Full name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="some full name"
                        onChange={handleFullNameChange}
                        value={fullName}
                        required
                    />
                    {/*<Form.Text className="text-muted">*/}
                    {/*    We'll never share your email with anyone else.*/}
                    {/*</Form.Text>*/}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email address"
                        onChange={handleEmailChange}
                        value={email}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="password"
                        onChange={handleFirstPasswordChange}
                        value={firstPassword}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Retype password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="password"
                        onChange={handleSecondPasswordChange}
                        value={secondPassword}
                        required
                    />
                </Form.Group>

                <Form.Group className="w-100 text-center">
                    <Button variant="primary" type="submit">Register</Button>
                </Form.Group>

            </Form>

            <ErrorAlert
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                doesShowError={doesShowError}
                hideError={hideError}
            />
        </div>
    )
}
export default Register;