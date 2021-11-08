import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useHistory} from "react-router-dom";
import {Button, Image} from "react-bootstrap";


import gift from '../../assets/images/gift.gif'
import gift_na from '../../assets/images/gift_na.png'
import footer from '../../assets/images/footer.png'
import bg from '../../assets/images/top-bg.png'
import Gift from "../Gift/Gift";

const MemberHome = (props) => {

    // const user = AuthService.getUser();

    const history = useHistory();
    const logOutHandler = () => {
        // AuthService.logout(history);
        props.setLogged(false);
        history.push("/");
    }

    // console.log("zalogowany:", user);
    // console.log("type:", AuthService.getType());
    // console.log("token", AuthService.genAuthHeader())
    // console.log("token", AuthService.genAuthHeader())

    const [event, setEvent] = useState(null);
    useEffect(()=>{
        // ApiService.getWithAuthorization("/api/events/details")
        //     .then(result => {
        //         console.log(result)
        //         if (result.status === 200) {
        //             setEvent(result.data);
        //         }})
    }, [])


    const [animuj, setAnimuj] = useState(true)

    return (
        <div style={{
            // border: "1px solid blue",
            background: "lightgray",
            width: "100vw",

            // height: "205px"

        }}>

            <div className="container_" style={{
                // width: "100vw",
                // background: "blue",

            }}>
                <div className="row" style={{
                    // height: "80vh",
                    // height: 'calc(100vw - 400px)',
                    height: "25vw",
                    // border: "1px solid yellow",
                    margin: "0px",

                    // height: "calc('600px - 150px');"
                }}>
                    top
                </div>
                {/*<div className="row">*/}
                {/*    <div className="col-sm">*/}
                {/*        One of three columns*/}
                {/*    </div>*/}
                {/*    <div className="col-sm">*/}
                {/*        One of three columns*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="row" style={{
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: "repeat-x",
                    // height: "470px",
                    height: "25vw",
                    backgroundSize: "110%",
                    // border: "1px solid red",
                    width: "100vw",
                    margin: "0px",


                    // width: "100vw",
                }}>
                    ee
                    {/* snieżek */}
                    {/*<div className="col-sm" style={{*/}
                    {/*    // border: "1px solid red",*/}
                    {/*}}/>*/}
                </div>


                <div className="row" style={{
                    background: "white",
                    padding: "0px 20vw",
                    // border: "1px solid green",
                    width: "100vw",
                    height: "150px",
                    overflow: "hidden",
                    margin: "0px",
                }}>
                    <div className="col-sm">
                        <Gift animuj={animuj} setAnimuj={setAnimuj}/>
                    </div>
                    <div className="col-sm">
                        <Gift animuj={animuj} setAnimuj={setAnimuj}/>
                    </div>
                    <div className="col-sm">
                        <Gift animuj={animuj} setAnimuj={setAnimuj}/>
                    </div>
                    <div className="col-sm">
                        <Gift animuj={animuj} setAnimuj={setAnimuj}/>
                    </div>
                    <div className="col-sm">
                        <Gift animuj={animuj} setAnimuj={setAnimuj}/>
                    </div>
                    <div className="col-sm">
                        <Gift animuj={animuj} setAnimuj={setAnimuj}/>
                    </div>
                </div>

            </div>

                {/*<div style={{*/}
                {/*    height: "205px",*/}
                {/*    border: "1px solid red",*/}
                {/*    backgroundImage: `url(${footer})`,*/}
                {/*    backgroundRepeat: "repeat-x",*/}
                {/*    // backgroundSize: "100%",*/}
                {/*    paddingTop: "40px",*/}
                {/*    // background: `url(${footer}) 0px 0px 100% no-repeat`*/}

                {/*}}>*/}
                {/*    <div style={{*/}
                {/*        // border: "1px solid green",*/}
                {/*        // clear: "both"*/}
                {/*    }}>*/}
                {/*        <Gift animuj={animuj} setAnimuj={setAnimuj}/>*/}
                {/*        <Gift animuj={animuj} setAnimuj={setAnimuj}/>*/}
                {/*        <Gift animuj={animuj} setAnimuj={setAnimuj}/>*/}
                {/*        <Gift animuj={animuj} setAnimuj={setAnimuj}/>*/}
                {/*        <div style={{float: "top"}}>xx</div>*/}
                {/*        /!*<Gift animuj={animuj} setAnimuj={setAnimuj}/>*!/*/}
                {/*        /!*<Gift animuj={animuj} setAnimuj={setAnimuj}/>*!/*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        xx*/}
                {/*    </div>*/}
                {/*</div>*/}
        </div>
    )
}

export default MemberHome;