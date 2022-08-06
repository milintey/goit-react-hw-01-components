import { FriendListItem } from '../FriendList/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)}
        </ul>
    )
};