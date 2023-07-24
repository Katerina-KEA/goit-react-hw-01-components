import styled from '@emotion/styled';

export const StatisticSection = styled.section`
  width: 300px;
  margin: 0 auto;
  padding: 35px 30px;
  background-color: #f4f0ec;
  border-radius: 5px;
`
export const Title = styled.h2`
  margin: 0 auto;
  color: #938585;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;
`

export const StatList = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;
export const StatItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 55px;
  align-items: center;
  color: #d1c6bb;
`
export const StatLabelSpan = styled.span`
  font-size: 14px;
  align-items: center;
  padding-top: 5px;
`
export const StatPercentageSpan = styled.span`
  font-size: 20px;
  align-items: center;
  padding-bottom: 5px;
`;