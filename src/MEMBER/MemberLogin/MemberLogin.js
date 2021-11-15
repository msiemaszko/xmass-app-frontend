import React, {useState} from 'react';
import ErrorAlert from "../../components/Alert/ErrorAlert";
import {Button, Form} from "react-bootstrap";
import AuthService from "../../services/auth-service";
import {useHistory} from "react-router-dom";

import './MemberLogin.css'
import santaImage from '../../assets/images/santa.png'
import ChristmasButton from "../../components/ChristmasButton/ChristmasButton";

const MemberLogin = (props) => {

    const history = useHistory()


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

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        AuthService.member_login(email, password)
            .then(authResponse => {
                switch (authResponse.status) {
                    case 200:
                        props.setLogged(true);
                        history.push("/")
                        break;

                    case 400:
                        showError(authResponse.data.detail);
                        break;

                    default:
                        showError("Logowanie nie udane.")
                        console.log("Logowanie nie udane", authResponse)
                }
            });
    }

    return (
        <div className="form_container col-12 col-lg-5 col-md-6 mx-auto my-3">

            {/*santa image*/}
            <div style={{
                background: `url(${santaImage}) no-repeat center`,
                backgroundSize: "200px",
                height: '200px',
            }}/>

            <h2 className="w-100 text-center">Zaloguj się do xmas-app!</h2>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email address"
                        onChange={handleEmailChange}
                        value={email}
                        required
                    />
                    {/*<Form.Text className="text-muted">*/}
                    {/*    We'll never share your email with anyone else.*/}
                    {/*</Form.Text>*/}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="password"
                        onChange={handlePasswordChange}
                        value={password}
                        required
                    />
                </Form.Group>
                {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                {/*    <Form.Check type="checkbox" label="Check me out" />*/}
                {/*</Form.Group>*/}

                {/*<Form.Group className="w-100 text-center">*/}
                {/*    <Button variant="danger" type="submit">Let me in!</Button>*/}
                {/*</Form.Group>*/}

                <Form.Group className="w-100 text-center" style={{paddingTop: '20px'}}>
                    <ChristmasButton type="submit" value="Let me in!"/>
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

export default MemberLogin;