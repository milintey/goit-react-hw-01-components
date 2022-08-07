import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendList/FriendListItem';
import { Box } from '../Box/Box';

export const FriendList = ({ friends }) => {
    return (
        <Box display="flex" flexDirection="column" as="ul" gridGap={3}>
            {friends.map(({ avatar, name, isOnline, id }) => <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)}
        </Box>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))
}