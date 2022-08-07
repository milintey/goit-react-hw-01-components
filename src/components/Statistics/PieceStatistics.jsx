// import { Box } from '../Box/Box';
import { StatisticsItem, StatisticdLabel, StatisticsPercentage } from '../Statistics/Statistics.styled';

export const PieceStatistics = ({ label, percentage, id }) => {
    return (
        <StatisticsItem>
            <StatisticdLabel>{label}</StatisticdLabel>
            <StatisticsPercentage>{percentage}</StatisticsPercentage>
        </StatisticsItem>
    )
};