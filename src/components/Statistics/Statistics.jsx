import { PieceStatistics } from '../Statistics/PieceStatistics'
import { Box } from '../Box/Box';

export const Statistics = ({ title, stats }) => {
    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}

            <Box display="flex" alignItems="center" gridGap={4} as="ul">
                {stats.map(({ label, percentage, id }) => <PieceStatistics key={id} label={label} percentage={percentage} />)}
            </Box>
        </section>
    )
};

<section class="statistics">
  <h2 class="title">Upload stats</h2>

  
</section>