import PropTypes from 'prop-types';
import { PieceStatistics } from '../Statistics/PieceStatistics';
import { StatisticsTitle } from '../Statistics/Statistics.styled';
import { Box } from '../Box/Box';

export const Statistics = ({ title, stats }) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" as="section" flexDirection="column" bg="twoBackground" width="500px">
            {title && <StatisticsTitle>{title}</StatisticsTitle>}

            <Box display="flex" alignItems="center" as="ul" flexWrap="wrap">
                {stats.map(({ label, percentage, id }) => <PieceStatistics key={id} label={label} percentage={percentage} />)}
            </Box>
        </Box>
    )
};


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }))
}


