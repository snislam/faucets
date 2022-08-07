import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import Alert from "react-bootstrap/Alert"
import ReCAPTCHA from 'react-google-recaptcha';

const FormSection = () => {
    const [verified, setVerified] = useState(false)
    const onChange = (value) => {
        setVerified(true)
    }
    return (
        <div>
            <Alert variant='info'>
                <FontAwesomeIcon icon={faTriangleExclamation} size='md' className='me-2 text-success' />
                Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.
            </Alert>
            <form style={{ maxWidth: "750px" }} >
                <label className='text-success fw-bold' htmlFor="wallet-address">Wallet Address</label> <br />
                <input className='form-control' type="text" id='wallet-address' placeholder='Wallet Address....' />

                <label className='text-success fw-bold pt-3' htmlFor="request-type">Request Type</label> <br />
                <div className="row mb-3">
                    <div className="col-md">
                        <input className='form-control' type="text" id='request-type' placeholder='20 Test Link' />
                    </div>
                    <div className="col-md">
                        <input className='form-control' type="text" id='amount' placeholder='0.5 ETH' />
                    </div>
                </div>
                <ReCAPTCHA
                    sitekey="6LeGrVYhAAAAAFBAF1VRy4cbpeHwx3uK2Xy-dQu_"
                    onChange={onChange}
                />
                <input disabled={!verified} type="submit" value="Send Request" className="btn btn-danger mt-3" />
            </form>
        </div>
    );
};

export default FormSection;
