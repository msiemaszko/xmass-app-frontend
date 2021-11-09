import React, {useEffect, useState} from 'react';

import './Gift.css'
import gift from '../../assets/images/gift.gif'
import gift_na from '../../assets/images/gift_na.png'
import ReactDOM from "react-dom";

const random_item = (items) => {
    return items[Math.floor(Math.random() * items.length)];
}

const animation_style = [
    "wobble-hor-bottom",
    "rotate-vert-center",
    "flip-vertical-right",
    "flip-vertical-left",

    // "flip-2-ver-right-2",
    // "flip-2-ver-left-2"
]


const Gift = (props) => {
    const [giftImage, setGiftImage] = useState(gift_na)
    const [faded, setFaded] = useState(false)
    setTimeout(() => {
        setFaded(true)
    }, 1500);

    const changeGiftImageHandler = (event) => {
        event.preventDefault()
        if (props.animuj === true) {
            props.setAnimuj(false)
            setGiftImage(gift)

            // turn off after 2.5s
            setTimeout(() => {
                setGiftImage(gift_na)
            }, 2500)

        }
    }

    return (

        <div className={"gift_box"}>
            <img src={giftImage} alt=""
                 onClick={changeGiftImageHandler}
                 className={`gift ${
                     faded 
                         ? (props.animuj ? random_item(animation_style) : "") // jeżeli faded to animuj losowo
                         : 'scale-up-center'    // jeżeli nie faded to animuj powiększanie
                 }`}
                 style={{animationDelay: `0.${props.no*2}`}}

            />
        </div>
    )
}
export default Gift;