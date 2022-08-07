import PropTypes from 'prop-types';
import { TransactionHistoryItem } from '../TransactionHistory/TransactionHistoryItem';
import { Box } from '../Box/Box';
import { TableTitle, Table } from '../TransactionHistory/Transaction.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Box as="thead" bg="secondary">
                <tr>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </tr>
            </Box>

            <tbody>
                {items.map(({ type, amount, currency, id }) => <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />)}
            </tbody>
        </Table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }))
}