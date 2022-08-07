import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import { ProfileAvatar, ProfileTitle, ProfileUserText, ProfileStatisticTitle, ProfileStatisticText } from '../Profile/Profile.styled';



export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Box width="300px" border="normal" borderColor="text" borderRadius="md">
            <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" p={5}>
                <ProfileAvatar
                src={avatar}
                alt="User avatar"
                />
                <ProfileTitle>{username}</ProfileTitle>
                <ProfileUserText>@{tag}</ProfileUserText>
                <ProfileUserText>{location}</ProfileUserText>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center" as="ul" bg="twoBackground" m={0} borderBottomLeftRadius="md" borderBottomRightRadius="md">
                <Box borderTop="normal" borderRight="normal" borderColor="text" display="flex" alignItems="center" justifyContent="center" as="li" flexDirection="column" width="100px" height="70px">
                    <ProfileStatisticTitle>Followers</ProfileStatisticTitle>
                    <ProfileStatisticText>{stats.followers}</ProfileStatisticText>
                </Box>
                <Box borderTop="normal" borderRight="normal" borderColor="text" display="flex" alignItems="center" justifyContent="center" as="li" flexDirection="column" width="100px" height="70px">
                    <ProfileStatisticTitle>Views</ProfileStatisticTitle>
                    <ProfileStatisticText>{stats.views}</ProfileStatisticText>
                </Box>
                <Box borderTop="normal" borderColor="text" display="flex" alignItems="center" justifyContent="center" as="li" flexDirection="column" width="100px" height="70px">
                    <ProfileStatisticTitle>Likes</ProfileStatisticTitle>
                    <ProfileStatisticText>{stats.likes}</ProfileStatisticText>
                </Box>
            </Box>
        </Box>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
}




