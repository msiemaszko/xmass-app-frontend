import React, { useEffect, useState } from 'react';
import AuthService from '../../services/auth-service'
import ApiService from '../../services/api-service'

import Gift from "../Gift/Gift";
import './MemberHome.css'
import Loader from "../../components/Loader/Loader";


const MemberHome = (props) => {

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
            <div className="container-fluid">
                <div className="row red-background">
                    <div className="col-12 text-center event-data">
                        {/* <p>member home</p> */}
                        {/*{event ?*/}
                        {/*    <div>*/}
                        {/*        <p>Twoje wydarzenie: {event.name}, {event.description}</p>*/}
                        {/*        kiedy to nastąpi: <h4>{event.date}</h4>*/}
                        {/*        /!*autorem wydarzenia jest: <h4>{event.user_created.full_name}, {event.user_created.email}</h4>*!/*/}
                        {/*        {event.completed ?*/}
                        {/*            <div>Wylosowałeś takiego typa: {event.member_to.full_name} ({event.member_to.email})</div>*/}
                        {/*            : <div>Losowanie w tym wydarzeniu jeszcze się nie odbyło.</div>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*    :*/}
                        {/*    <div>loading</div>*/}
                        {/*}*/}
                    </div>
                </div>
                <div className="row santa-background">
                    {/*<p>Hoł hoł hoł...</p>*/}
                    {event ?
                        <div className="child event-data">
                            <p>Twoje wydarzenie: {event.name}</p>
                            {event.description}
                            <p>
                                {event.completed
                                ? "Możesz już wziąć udział w losowaniu :)"
                                : "Losowanie nie jest jeszcze gotowe."
                                }
                            </p>
                        </div>
                    :<Loader/>
                    }
                </div>

                {event && event.completed ?
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
                    : ""
                }
            </div>

            
        </>
    )
}

export default MemberHome;