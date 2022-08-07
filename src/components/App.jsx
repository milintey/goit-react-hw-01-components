import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Container } from '../components/App.styled';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';


export const App = () => {
  return (
    <Container>
      <h2>Задание №1</h2>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />

      <h2>Задание №2</h2>
      <Statistics title="Upload stats" stats={data} />

      <h2>Задание №3</h2>
      <FriendList friends={friends} />;

      <h2>Задание №4</h2>
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
