import {Button} from "react-bootstrap";
import React from "react";
import AuthService from "../../services/auth-service";
import {useHistory} from "react-router-dom";

import './MemberNav.css'

const MemberNav = (props) => {

    const history = useHistory();
    const user = AuthService.getUser();

    const logOutHandler = () => {
        AuthService.logout(history);
        props.setLogged(false);
        history.push("/");
    }


    return (
        <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example" style={{ background: "linear-gradient(to bottom, #a42121 0, #941e1e 100%)" }} >
            <div className="container-fluid">
                {
                    user ?
                        <>
                            <a className="navbar-brand" href="#">Witaj, {user.full_name}</a>

                            <div className="col-md-3 text-end">
                                <Button onClick={logOutHandler} className="btn-danger">Logout</Button>
                            </div>
                        </>
                        : ""
                }
            </div>
        </nav>
    )
}

export default MemberNav;