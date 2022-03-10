import styled from 'styled-components/native';

export const Container = styled.TextInput`
width: 100%;
padding: 16px;
height: 56px;
/* border: 1px solid #CECECE; */
background-color: ${({theme}) => theme.COLORS.BACKGROUND};
color: ${({theme}) => theme.COLORS.TEXT};
padding: 0 16px
`;