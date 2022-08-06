import { Box } from '../Box/Box';
import { ProfileAvatar } from '../Profile/Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Box width="400px" border="normal" borderColor="text">
            <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
                <ProfileAvatar
                src={avatar}
                alt="User avatar"
                class="avatar"
                />
                <p class="name">{username}</p>
                <p class="tag">@{tag}</p>
                <p class="location">{location}</p>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center" as="ul" bg="muted"  gridGap={6}>
                <Box display="flex" alignItems="center" justifyContent="center" as="li" flexDirection="column">
                    <span class="label">Followers</span>
                    <span class="quantity">{stats.followers}</span>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" as="li" flexDirection="column">
                    <span class="label">Views</span>
                    <span class="quantity">{stats.views}</span>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" as="li" flexDirection="column">
                    <span class="label">Likes</span>
                    <span class="quantity">{stats.likes}</span>
                </Box>
            </Box>
        </Box>
    )
};