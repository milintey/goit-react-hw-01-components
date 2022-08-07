import styled from 'styled-components';

export const StatisticsTitle = styled.h2`
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.body};
    margin-bottom: ${p => p.theme.space[5]}px;
    margin-top: ${p => p.theme.space[5]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
`

export const StatisticsItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100px;
    height: 100px;
    background-color: ${getRandomHexColor};
`

export const StatisticdLabel = styled.span`
    color: ${p => p.theme.colors.white};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.body};
    margin-bottom: ${p => p.theme.space[1]}px;
    font-weight: ${p => p.theme.fontWeights.normal};
`

export const StatisticsPercentage = styled.span`
    color: ${p => p.theme.colors.white};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.theme.fontWeights.bold};
`


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

