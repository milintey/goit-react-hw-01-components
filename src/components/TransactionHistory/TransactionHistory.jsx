import {TransactionHistoryItem} from '../TransactionHistory/TransactionHistoryItem'

export const TransactionHistory = ({ items }) => {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ type, amount, currency, id }) => <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />)}
            </tbody>
        </table>
    )
};