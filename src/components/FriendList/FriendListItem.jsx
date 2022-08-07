import { FriedsOnline, FriedsOfline, UserName } from '../FriendList/FriendList.styled';
import { Box } from '../Box/Box';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Box display="flex" alignItems="center" as="li" bg="twoBackground" gridGap={3} width="200px" height="70px" borderRadius="md">
            {isOnline ? <FriedsOnline>{isOnline}</FriedsOnline> : <FriedsOfline>{isOnline}</FriedsOfline>}

            <img src={avatar} alt="User avatar" width="48" />
            <UserName>{name}</UserName>
        </Box>
    )
};