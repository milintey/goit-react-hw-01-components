import styled from 'styled-components';

export const ProfileAvatar = styled.img`
    display: blok;
    width: 150px;
    height: 100%;
    margin-bottom: ${p => p.theme.space[5]}px;
`;

export const ProfileTitle = styled.p`
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.body};
    margin-bottom: ${p => p.theme.space[3]}px;
    font-weight: ${p => p.theme.fontWeights.bold};
`

export const ProfileUserText = styled.p`
    color: ${p => p.theme.colors.twoText};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.theme.fontWeights.normal};

    :not(:last-child) {
        margin-bottom: ${p => p.theme.space[3]}px;
    }
`

export const ProfileStatisticTitle = styled.span`
    color: ${p => p.theme.colors.twoText};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: ${p => p.theme.lineHeights.body};
    margin-bottom: ${p => p.theme.space[1]}px;
    font-weight: ${p => p.theme.fontWeights.normal};
`

export const ProfileStatisticText = styled.span`
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.theme.fontWeights.bold};
`