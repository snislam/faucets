import React from 'react';
import FormSection from './FormSection';
import History from './History';

const InnerBody = () => {
    return (
        <div className='bg-white p-4'>
            <FormSection />
            <History />
        </div>
    );
};

export default InnerBody;