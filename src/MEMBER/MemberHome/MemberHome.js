import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import AuthService from '../../services/auth-service'
import { useHistory } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import ApiService from '../../services/api-service'

import Gift from "../Gift/Gift";


import ReactDOM from 'react-dom'
import Snowfall from 'react-snowfall'

// ReactDOM.render(
//     <div style={{ height: 400, width: 400, background: '#282c34' }}>
//         <Snowfall />
//     </div>,
//     document.querySelector('#app')
// )

const MemberHome = (props) => {

    const user = AuthService.getUser();

    const history = useHistory();
    const logOutHandler = () => {
        AuthService.logout(history);
        props.setLogged(false);
        history.push("/");
    }

    const [event, setEvent] = useState(null);
    useEffect(() => {
        ApiService.getWithAuthorization("/api/events/details")
            .then(result => {
                console.log(result)
                if (result.status === 200) {
                    setEvent(result.data);
                }
            })
    }, [])


    const [animuj, setAnimuj] = useState(true)

    return (
        <>
            <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example" style={{ background: "linear-gradient(to bottom, #a42121 0, #941e1e 100%)" }} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Witaj, {user.full_name}</a>

                    <div className="col-md-3 text-end">
                        <Button onClick={logOutHandler} className="btn-danger">Logout</Button>
                    </div>

                </div>
            </nav>
            <Snowfall />

            <div className="container-fluid">
                <div className="row red-background">
                    <div className="col-12">
                        <p>member home</p>
                        {event ?
                            <div>
                                <p>Twoje wydarzenie {event.name}</p>
                                <p>{event.description}</p>
                                <p>kiedy to nastąpi: {event.date}</p>
                                <p>autorem wydarzenia jest: {event.user_created.full_name}, {event.user_created.email}</p>
                                {event.completed ?
                                    <div>Wylosowałeś takiego typa: {event.member_to.full_name} ({event.member_to.email})</div>
                                    : <div>Losowanie w tym wydarzeniu jeszcze się nie odbyło.</div>
                                }
                            </div>
                            :
                            <div>loading</div>
                        }
                    </div>
                </div>
                <div className="row santa-background">
                    {/*<p className="child">box</p>*/}
                    <p>Hoł hoł hoł...</p>
                </div>
                <div className="row justify-content-md-center" style={{
                    padding: "0px 5vw"
                }}>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={1}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={2}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={3}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={4}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={5}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={6}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={7}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={8}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={9}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={10}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={11}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={12}/></div>
                    <div className="col-4 col-md-2"><Gift animuj={animuj} setAnimuj={setAnimuj} no={13}/></div>
                </div>
            </div>

            
        </>
    )
}

export default MemberHome;