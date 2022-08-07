// import { Box } from '../Box/Box';
import { TableItem } from '../TransactionHistory/Transaction.styled';


export const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
        <tr>
            <TableItem>{type}</TableItem>
            <TableItem>{amount}</TableItem>
            <TableItem>{currency}</TableItem>
        </tr>
    )
};