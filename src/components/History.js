import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TableTemplate from './TableTemplate';

const History = () => {
    const ethHistory = [
        { time: "12:30 AM", amount: 487, hash: "4s8er5s5fe57rjmxnfuewrurks" },
        { time: "10:30 AM", amount: 897, hash: "4s8er5s5fe57rj" },
        { time: "11:30 AM", amount: 578, hash: "rjmxnfuewrurks" }
    ]

    const testLinkHistory = [
        { time: "09:30 PM", amount: 1287, hash: "4s8er5s5fe57rjmxnfuewrurks" },
        { time: "10:30 PM", amount: 197, hash: "4s8er5s5fe57rj" },
        { time: "01:30 PM", amount: 1678, hash: "rjmxnfuewrurks" }
    ]
    return (
        <Tabs
            defaultActiveKey="eth-transaction"
            transition={true}
            id="transaction-history"
            className="my-3"
        >
            <Tab eventKey="eth-transaction" title="ETH Transactio History">
                <TableTemplate data={ethHistory} />
            </Tab>
            <Tab eventKey="test-link-transaction" title="TestLink Transaction History">
                <TableTemplate data={testLinkHistory} />
            </Tab>
        </Tabs>
    );
};

export default History;