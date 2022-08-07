import React from 'react';

const TableRow = ({ data, index }) => {
    const { time, amount, hash } = data;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{time}</td>
            <td>{amount}</td>
            <td>{hash}</td>
        </tr>
    );
};

export default TableRow;