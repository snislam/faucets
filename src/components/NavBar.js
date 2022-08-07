import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalBox from './ModalBox';

function NavBar() {
    const [crypto, setCrypto] = useState();
    const [modalShow, setModalShow] = useState(false)
    console.log(crypto);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand className='text-success fw-bolder fs-2' href="#home">Faucets</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <select
                            className='px-5 py-1 ms-2'
                            onChange={(e) => setCrypto(e.target.value)}
                            id="select-crypto">
                            <option value="option1">Option1</option>
                            <option value="option2">Option2</option>
                            <option value="option3">Option3</option>
                            <option value="option4">Option4</option>
                            <option value="option5">Option5</option>
                            <option value="option6">Option6</option>
                        </select>
                        <button className='ms-2 px-5 py-1 bg-transparent border border-success text-success' onClick={() => setModalShow(true)}>
                            Connect Wallet
                        </button>
                        <ModalBox show={modalShow} onHide={() => setModalShow(false)} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;