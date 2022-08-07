import React from 'react';
import InnerBody from './InnerBody';

const MainArea = () => {
    return (
        <div className='bg-warning bg-opacity-10'>
            <div className='container pt-4 pb-3'>
                <h2 className='text-success'>Request testnet LINK</h2>
                <p className='paragraph-text'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
                <InnerBody />
            </div>
        </div>
    );
};

export default MainArea;