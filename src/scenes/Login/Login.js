import React, {useState} from 'react';

import {Form, Button} from 'react-bootstrap';
import AuthService from '../../services/auth-service'
import ErrorAlert from "../../components/Alert/ErrorAlert";

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // error states
    const [doesShowError, setDoesShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const hideError = () => setDoesShowError(false);
    const showError = (errorMessage) => {
        setDoesShowError(true);
        setErrorMessage(errorMessage);
    }
    const handleFormSubmit = event => {
        event.preventDefault();

        // AuthService.login(email, password)
        //     .then(authResponse => {
        //         switch (authResponse.status) {
        //             case 200:
        //                 props.setLogged(true);
        //                 props.history.push("/")
        //                 break;
        //
        //             case 400:
        //                 showError(authResponse.data.detail);
        //                 break;
        //
        //             default:
        //                 showError("Logowanie nie udane.")
        //                 console.log("Logowanie nie udane", authResponse)
        //         }
        //     });
    }

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    return (
        <>
        <div className="w-50 mx-auto">
            <h2 className="w-100 text-center">Sign in to MovieDB</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email address"
                        onChange={handleEmailChange}
                        value={email}
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="password"
                        onChange={handlePasswordChange}
                        value={password}
                        required
                    />
                </Form.Group>

                <Form.Group className="w-100 text-center">
                    <Button variant="primary" type="submit">Let me in!</Button>
                </Form.Group>
            </Form>

            <ErrorAlert
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                doesShowError={doesShowError}
                hideError={hideError}
            />
        </div>
        </>
    )
}

export default Login;