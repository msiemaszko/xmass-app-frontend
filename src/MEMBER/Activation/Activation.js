import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router";
import ApiService from '../../services/api-service'
import {Button, Col, Form, Row} from "react-bootstrap";
import ErrorAlert from "../../components/Alert/ErrorAlert";
import Loader from "../../components/Loader/Loader";
import AuthService from '../../services/auth-service'
import santaImage from "../../assets/images/santa.png";
import ChristmasButton from "../../components/ChristmasButton/ChristmasButton";

const Activation = (props) => {

    const history = useHistory()

    const {activation_code} = useParams();
    const [invitation, setInvitation] = useState(null)

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    // error states
    const [doesShowError, setDoesShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const hideError = () => setDoesShowError(false);
    const showError = (errorMessage) => {
        setDoesShowError(true);
        setErrorMessage(errorMessage);
    }

    const handleNameChange = event => {
        setName(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        ApiService.post("/api/invitation/accept/" + activation_code, {
            "full_name": name,
            "password": password
        })
            .then(result => {
                if (result.status === 200) {
                    const results = result.data.results
                    const response = {
                        status: 200,
                        data: {
                            type: results.type,
                            user: results.user,
                            access_token: results.access_token
                        }
                    }

                    // oszukane logowanie dla membera
                    AuthService.storeLoginDataFromResponse(response);
                    props.setLogged(true);
                    history.push("/");
                }
                else {
                    showError(result.data.detail);
                }
            })
    }

    useEffect(() => {
        ApiService.get("/api/invitation/details/" + activation_code)
            .then(result => {
                if (result.status === 200) {
                    setInvitation(result.data)
                    console.log(result.data)
                }
            });
    }, []);


    return (
        <> {invitation ?
            <div className="form_container col-12 col-lg-6 col-md-8  mx-auto my-3">

                {/*santa image*/}
                <div style={{
                    background: `url(${santaImage}) no-repeat center`,
                    backgroundSize: "200px",
                    height: '200px',
                }}/>
                <h2 className="w-100 text-center">You got event invitation!</h2>


                {/*Witaj {invitation.email} !<br/>*/}
                <p>Zostałeś zaproszony na wspólne wydarzenie prezentowe!</p>
                <p>{invitation.event.name}</p>
                <p>{invitation.event.description}</p>

                <p>Aby wziąć udział w losowaniu musisz uzupełnić dane swojego profilu.
                </p>
                <div> {/*style={{"border": "2px solid blue"}*/}
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">Email</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    plaintext
                                    readOnly={true}
                                    defaultValue={invitation.email}
                                    style={{
                                        padding: '5px',
                                        border: '1px solid lightgray',
                                        borderRadius: '5px',
                                        color: 'gray'
                                    }}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">Nazwa</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    placeholder="Twoja nazwa użytkownika..."
                                    onChange={handleNameChange}
                                    value={name}
                                    required
                                />
                                <Form.Text className="text-muted">
                                    Ta nazwa będzie użyta podczas losowania.
                                    Zadbaj o to, aby osoba, która Cię wylosuje widziała z kim ma do czynienia :)
                                </Form.Text>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">Hasło</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="password"
                                    placeholder="Twoje hasło logowania..."
                                    onChange={handlePasswordChange}
                                    value={password}
                                    required
                                />
                                <Form.Text className="text-muted">
                                    Ustaw hasło do swojego profilu i je zapamiętaj.
                                    Tylko za jego pomocą będziesz mógł wziąć udział w losowaniu.
                                </Form.Text>
                            </Col>
                        </Form.Group>

                        {/*<Form.Group className="w-100 text-center">*/}
                        {/*    <Button variant="danger" type="submit">Let me in!</Button>*/}
                        {/*</Form.Group>*/}

                        <Form.Group className="w-100 text-center" style={{paddingTop: '10px'}}>
                            <ChristmasButton type="submit" value="Aktywuj profil !"/>
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