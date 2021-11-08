import React, {useEffect, useState} from 'react';
import MemberHome from "../MemberHome/MemberHome";

import gift from '../../assets/images/gift.gif'
import gift_na from '../../assets/images/gift_na.png'


const Gift = (props) => {
    const [giftImage, setGiftImage] = useState(gift_na)
    const changeGiftImageHandler = () => {
        if (props.animuj === true) {
            props.setAnimuj(false)
            setGiftImage(gift)
        }
    }

    return (
        <div style={{
            float: "left",
            maxWidth: "150px",
            // height: "150px",
            // margin: "0px auto",
            // margin: "10px auto",
            marginBottom: "10px",
            border: "1px solid gray",
        }}>
            <img src={giftImage} alt="" onClick={changeGiftImageHandler} style={{
                width: "100%",
            }}/>
        </div>
    )
}
export default Gift;