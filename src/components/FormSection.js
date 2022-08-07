import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Alert from "react-bootstrap/Alert"

const FormSection = () => {
    return (
        <div>
            <Alert variant='info'>
                <FontAwesomeIcon icon={faTriangleExclamation} size='md' className='me-2 text-success' />
                Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.
            </Alert>
            <form style={{ maxWidth: "750px" }} action="">
                <label className='text-success fw-bold' htmlFor="wallet-address">Wallet Address</label> <br />
                <input className='form-control' type="text" id='wallet-address' placeholder='Wallet Address....' />

                <label className='text-success fw-bold pt-3' htmlFor="wallet-address">Wallet Address</label> <br />
                <div className="row">
                    <div className="col-md">
                        <input className='form-control' type="text" id='wallet-address' placeholder='Wallet Address....' />
                    </div>
                    <div className="col-md">
                        <input className='form-control' type="text" id='wallet-address' placeholder='Wallet Address....' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormSection;