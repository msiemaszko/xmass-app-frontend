import React from 'react';
import {Button} from "react-bootstrap";

import './ChristmasButton.css'

const ChristmasButton = (props) => {

    return (
        <Button
            // href="#"
            className="button"
            type={props.type}
        >
            {props.value}
        </Button>
    )
}

export default ChristmasButton;

