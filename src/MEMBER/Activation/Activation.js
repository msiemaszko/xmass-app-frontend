import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router";
import {Button, Col, Form, Row} from "react-bootstrap";
import ErrorAlert from "../../components/Alert/ErrorAlert";
import Loader from "../../components/Loader/Loader";

const Activation = (props) => {

    const history = useHistory()

    const {activation_code} = useParams();
    const [invitation, setInvitation] = useState(null)

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

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
        // ApiService.post("/api/invitation/accept/" + activation_code, {
        //     "full_name": name,
        //     "password": password
        // })
        //     .then(result => {
        //         if (result.status === 200) {
        //             const results = result.data.results
        //             const response = {
        //                 status: 200,
        //                 data: {
        //                     type: results.type,
        //                     user: results.user,
        //                     access_token: results.access_token
        //                 }
        //             }
        //
        //             // oszukane logowanie dla membera
        //             AuthService.storeLoginDataFromResponse(response)
        //             props.setLogged(true)
        //             history.push("/");
        //         }
        //         else {
        //             showError(result.data.detail)
        //         }
        //     })
    }

    useEffect(() => {
        // ApiService.get("/api/invitation/details/" + activation_code)
        //     .then(result => {
        //         const invitation_ = result.data;
        //         setInvitation(invitation_)
        //     })
        // ;
    }, []);


    return (
        <> {invitation ?
            <div className="w-50 mx-auto">
                Witaj {invitation.email} !<br/>
                Zostałeś zaproszony na wspólne wydarzenie prezentowe
                <div>
                    {invitation.event.name}
                </div>
                invitation.event.opis
                <br/>

                Wypełnij swoje pozostałe dane, aby wziąć udział w losowaniu.
                <br/>
                <br/>
                <div> {/*style={{"border": "2px solid blue"}*/}
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">Email</Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={invitation.email}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">Nazwa</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    placeholder="Koń Rafał"
                                    onChange={handleNameChange}
                                    value={name}
                                    required
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">Hasło</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="password"
                                    placeholder="Ptaki latajo kluczem"
                                    onChange={handlePasswordChange}
                                    value={password}
                                    required
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group className="w-100 text-center">
                            <Button variant="danger" type="submit">Let me in!</Button>
                        </Form.Group>
                    </Form>

                    <ErrorAlert
                        errorMessage={errorMessage}
                        setErrorMessage={setErrorMessage}
                        doesShowError={doesShowError}
                        hideError={hideError}
                    />
                </div>
            </div>

            :
            <Loader/>
        }</>
    );
}

export default Activation;