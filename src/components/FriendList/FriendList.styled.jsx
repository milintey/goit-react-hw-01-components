import styled from 'styled-components';

export const FriedsOnline = styled.span`
    width: 15px;
    height: 15px;
    background-color: ${p => p.theme.colors.green};
    border-radius: ${p => p.theme.radii.round};
    margin-left: ${p => p.theme.space[3]}px;
`

export const FriedsOfline = styled.span`
    width: 15px;
    height: 15px;
    background-color: ${p => p.theme.colors.red};
    border-radius: ${p => p.theme.radii.round};
    margin-left: ${p => p.theme.space[3]}px;
`

export const UserName = styled.p`
    color: ${p => p.theme.colors.taxt};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.theme.fontWeights.normal};
`