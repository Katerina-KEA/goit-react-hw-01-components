import PropTypes from 'prop-types';
import {
    TransactionHistoryTable,
    HeaderTable,
    TableRow,
    TableData} from './Transactions.styled';

const TransactionHistory = ({ items }) => {
    return (
      <TransactionHistoryTable>
        <thead>
          <tr>
            <HeaderTable>Type</HeaderTable>
            <HeaderTable>Amount</HeaderTable>
            <HeaderTable>Currency</HeaderTable>
          </tr>
        </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                   <TableRow key={id}>
                        <TableData>{type}</TableData>
                        <TableData>{amount}</TableData>
                        <TableData>{currency}</TableData>
          </TableRow> 
                ))}
        </tbody>
      </TransactionHistoryTable>
    );
};
export default TransactionHistory;
 
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};