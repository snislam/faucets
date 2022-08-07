import React from 'react';

const Footer = () => {
    return (
        <section className='py-3 bg-light'>
            <p className='m-0 p-0 text-center'>&copy; Copyright - {new Date().getFullYear()} - All Right Reserved by Faucet</p>
        </section>
    );
};

export default Footer;