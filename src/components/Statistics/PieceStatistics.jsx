import {Box} from '../Box/Box'

export const PieceStatistics = ({ label, percentage }) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" as="li" flexDirection="column">
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
        </Box>
    )
};