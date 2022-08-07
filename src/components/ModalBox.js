import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

const ModalBox = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Connect Your Walllet
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex justify-content-around'>
                <Card className='bg-light border-0 p-3' style={{ width: "40%" }}>
                    <Card.Img variant="top" src="https://faucets.netlify.app/static/media/MetaMask.551edf10.svg" />
                    <Card.Body>
                        <Card.Title className='text-center'>MetaMask</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='bg-light border-0 p-3' style={{ width: "40%" }}>
                    <Card.Img variant="top" src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg" />
                    <Card.Body>
                        <Card.Title className='text-center'>WalletConnect</Card.Title>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal>
    );
}

export default ModalBox;