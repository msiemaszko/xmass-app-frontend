import React, { useEffect, useState } from 'react';
import ApiService from '../../services/api-service'

import GiftBox from "../GiftBox/GiftBox";
import './MemberHome.css'
import Loader from "../../components/Loader/Loader";
import Card from "../Card/Card";


const MemberHome = (props) => {

    const [event, setEvent] = useState(null);
    const [cardShow, setCardShow] = useState(false);

    useEffect(() => {
        ApiService.getWithAuthorization("/api/events/details")
            .then(result => {
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
                        {event ?
                            <>
                                <h1>{event.name}</h1>
                                <p>{event.description}</p>
                                {/*        kiedy to nastąpi: <h4>{event.date}</h4>*/}
                                {/*        /!*autorem wydarzenia jest: <h4>{event.user_created.full_name}, {event.user_created.email}</h4>*!/*/}
                                {/*        {event.completed ?*/}
                                {/*            <div>Wylosowałeś takiego typa: {event.member_to.full_name} ({event.member_to.email})</div>*/}
                                {/*            : <div>Losowanie w tym wydarzeniu jeszcze się nie odbyło.</div>*/}
                                {/*        }*/}
                            </>
                            : ''
                        }
                        {/*    <div>loading</div>*/}
                        {/*}*/}
                    </div>
                </div>
                <div className="row santa-background">
                    {/*<p>Hoł hoł hoł...</p>*/}
                    {event ?
                        <div className="child event-data">
                            {/*<p>Twoje wydarzenie: {event.name}</p>*/}
                            {/*{event.description}*/}
                            <h1>
                                {event.completed
                                ? "Możesz już wziąć udział w losowaniu :)"
                                : "Losowanie nie jest jeszcze gotowe."
                                }
                            </h1>
                        </div>
                    :<Loader/>
                    }
                </div>

                {event && event.completed ?
                    <>
                        {/* gift panel */}
                        <div className="row justify-content-md-center" style={{
                            padding: "0px 5vw"
                        }}>

                            {/*TODO: Sprawdzic to mapowanie*/}
                            {[...Array(10)].map((x, i) =>
                                <GiftBox clickOnGiftHandler={() => setCardShow(true)} animuj={animuj} setAnimuj={setAnimuj} no={i}/>
                            )}
                        </div>

                        <Card
                            show={cardShow}
                            onHide={() => setCardShow(false)}
                            member_to={event.member_to}
                        />
                    </>
                    : ""
                }
            </div>
        </>
    )
}

export default MemberHome;