import styled from 'styled-components';

export const TableItem = styled.td`
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.text};
    padding: ${p => p.theme.space[0]}px;
    border-collapse: collapse;
    height: ${p => p.theme.space[5]}px;
    color: ${p => p.theme.colors.twoText};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.theme.fontWeights.normal};
    text-align: center;
`

export const Table = styled.table`
    border-collapse: collapse;
`


export const TableTitle = styled.th`
    color: ${p => p.theme.colors.white};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.theme.fontWeights.bold};
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.text};

    width: 200px;
    height: 50px;
`




