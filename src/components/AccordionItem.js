import React from 'react';

import Accordion from 'react-bootstrap/Accordion';

const AccordionItem = ({ data, index }) => {
    return (
        <Accordion.Item className='border mb-3 border-secondary' eventKey={index}>
            <Accordion.Header>
                <h5>{data.title}</h5>
            </Accordion.Header>
            <Accordion.Body>
                {data.body}
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default AccordionItem;