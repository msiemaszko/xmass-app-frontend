import React from 'react';

import './Card.css'
import christmasBear from '../../assets/images/christmas-bear.png'
import {Button, Modal} from "react-bootstrap";

const Card = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                {/*<Modal.Title id="contained-modal-title-vcenter">*/}
                {/*    Losowanie zakończone!*/}
                {/*</Modal.Title>*/}
            </Modal.Header>
            <Modal.Body
            style={{
                textAlign: 'center'
            }}>
                <div style={{
                    background: `url(${christmasBear}) no-repeat center`,
                    backgroundSize: '130px',
                    height: '130px',
                }}/>
                <h4>Losowanie zakończone!</h4>
                <p>Twoja wylosowana osoba to:</p>
                <h2>{props.member_to ? props.member_to.full_name : ''}</h2>
            </Modal.Body>
            <Modal.Footer>
                {/*<Button onClick={props.onHide}>Close</Button>*/}
            </Modal.Footer>
        </Modal>
    )
}

export default Card;