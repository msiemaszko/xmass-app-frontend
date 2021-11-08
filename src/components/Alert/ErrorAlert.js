import React from 'react'
import { Alert } from 'react-bootstrap';

const ErrorAlert = props => {

    return (
        <div className="mx-auto my-3">
            <Alert variant='danger' show={props.doesShowError} onClose={props.hideError} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    {props.errorMessage}
                </p>
            </Alert>
        </div>
    )
}

export default ErrorAlert;