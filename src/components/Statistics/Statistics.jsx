import PropTypes from 'prop-types';
import {
  Title,
  StatisticSection,
  StatList,
  StatItem,
  StatLabelSpan,
  StatPercentageSpan,
} from './Statistics.styled';
import { getRandomHexColor } from './randColor';

const Statistics = ({ title, stats }) => {
    return (
      <StatisticSection>
        {title && <Title>{title}</Title>}

        <StatList>
          {stats.map(stat => (
            <StatItem
              key={stat.id} style={{ backgroundColor: getRandomHexColor() }}
            >
              <StatLabelSpan>{stat.label}</StatLabelSpan>
              <StatPercentageSpan>{stat.percentage}%</StatPercentageSpan>
            </StatItem>
          ))}
        </StatList>
      </StatisticSection>
    );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired
};