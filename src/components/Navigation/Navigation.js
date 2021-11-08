import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import './Navigation.css'
import AuthService from '../../services/auth-service'

const Navigation = (props) => {

    const history = useHistory();
    const logOutHandler = () => {
        AuthService.logout(history);
        props.setLogged(false);
        history.push("/");
    }

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className={"my-navbar"}>
            <Container>
                <Navbar.Brand as={Link} to="/" className={"logo"}>xmass app</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
                        {/*<Nav.Link eventKey={2} href="#memes">*/}
                        {/*    Dank memes*/}
                        {/*</Nav.Link>*/}
                        <Nav.Link as={Link} to="/login">Sing in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <Navbar bg="dark" variant="dark" expand="sm">
        //     <Navbar.Brand as={Link} to="/">MovieDB</Navbar.Brand>
        //
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             {/*<Nav.Link to="#" as={Link} onClick={props.testMethod}>Test API</Nav.Link>*/}
        //             {props.isLogged
        //                 ? <>
        //                     {/*<Nav.Link as={Link} to="/secret">Secret</Nav.Link>*/}
        //                     <Nav.Link as={Link} to="/movies">Browse Movies</Nav.Link>
        //                     <Nav.Link as={Link} to="/recommended">Recommendations</Nav.Link>
        //                 </>
        //                 : <></>
        //             }
        //         </Nav>
        //     </Navbar.Collapse>
        //
        //
        //     <Navbar.Collapse className="justify-content-end">
        //         {/*<Nav className="mr-auto">*/}
        //         {props.isLogged
        //             ? <>
        //                 <Navbar.Text>Signed in as: {AuthService.getUser().full_name}</Navbar.Text>
        //                 <Nav.Link as={Link} to="#" onClick={logOutHandler}>Logout</Nav.Link>
        //             </>
        //             : <>
        //                 <Nav.Link as={Link} to="/login">Sing in</Nav.Link>
        //                 <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
        //             </>
        //         }
        //         {/*</Nav>*/}
        //     </Navbar.Collapse>
        // </Navbar>
    )
}

export default Navigation;