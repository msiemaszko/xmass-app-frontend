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
                                {event.completed
                                    ? <>
                                        <h1>Możesz już wziąć udział w losowaniu!</h1>
                                        <p>Kliknij na jeden z poniższych prezentów, aby przekonać się czyim<br/>
                                            Świętym Mikołajem będziesz w tym roku.</p>
                                    </>
                                    : <>
                                        <h1>Losowanie w tym wydarzeniu jeszcze nie jest dostępne.</h1>
                                        {/*<p>Oczekujemy, aż wszyscy zaproszeniu uzupełnią swoje profile...</p>*/}
                                        {/*<p>Wszyscy zaproszeni użytkownicy muszą uzupełnić swoje profile.</p>*/}
                                        {/*<p>Kiedy wszyscy inni użytkownicy będą gotowi, poinformujemy Cię osobnym mailem.</p>*/}
                                        <p>
                                            Mikołaj się cieszy z Twojego udziału w zabawie!<br/>
                                            Oczekuję na zgłoszenia od wszystkich osób, jak tylko je dostanę rozpoczniemy
                                            losowanie. Poinformuję Cię o tym osobnym mailem.<br/>
                                            Do tego czasu bądź cierpliwy, bo będzie ruzga!
                                        </p>
                                    </>
                                }
                        </div>
                    :<Loader/>
                    }
                </div>

                {event && event.completed ?
                    <>
                        {/* gift panel */}
                        <div className="row justify-content-md-center gift_block">

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