import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

const TableTemplate = ({ data }) => {
    return (
        <Table style={{ maxWidth: "750px" }} className='text-center' bordered hover size="lg">
            <thead>
                <tr>
                    <th>Sr</th>
                    <th>Time</th>
                    <th>Amount</th>
                    <th>Hash</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((d, i) => <TableRow key={i} data={d} index={i} />)
                }
            </tbody>
        </Table>
    );
}

export default TableTemplate;