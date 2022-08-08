import { createContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalBox from './ModalBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

// create context
export const CryptoContext = createContext('Arbitrum Rinkeby')

function NavBar({ setCrypto }) {
    const [modalShow, setModalShow] = useState(false)
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand className='text-success fw-bolder fs-2 '>
                    <Link className='text-decoration-none' to='/'>Faucets</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <select
                            className='px-5 py-1 ms-md-2'
                            onChange={(e) => setCrypto(e.target.options[e.target.selectedIndex].text)}
                            id="select-crypto">
                            <option value="ar-ri">Arbitrum Rinkeby</option>
                            <option value="av-fu">Avalanche Fuji</option>
                            <option value="bnb">BNB Chain Testnet</option>
                            <option value="eth-rin">Ethirium Rinkeby</option>
                            <option value="fan-test">Fantom TestNet</option>
                            <option value="ha-test">Harmony Testnet</option>
                        </select>
                        <button className='ms-md-2 px-5 py-1 bg-transparent border border-success text-success' onClick={() => setModalShow(true)}>
                            Connect Wallet
                        </button>
                        <ModalBox show={modalShow} onHide={() => setModalShow(false)} />

                        <Dropdown className='ms-md-2 rounded-circle'>
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
                                <FontAwesomeIcon icon={faUserCircle} size="2x" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="light">
                                <Dropdown.Item>
                                    <Link className='text-decoration-none text-secondary' to='/log-in'>Log In </Link>
                                </Dropdown.Item>
                                <Dropdown.Item >
                                    <Link className='text-decoration-none text-secondary' to='/register'>Register</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link className='text-decoration-none text-secondary' to='/faq'>FAQ</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse >
            </Container >
        </Navbar >
    );
}

export default NavBar;