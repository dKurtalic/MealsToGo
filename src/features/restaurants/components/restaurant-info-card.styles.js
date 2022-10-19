import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Card } from "react-native-paper";
export const Info = styled.View`
padding: ${(props) => props.theme.space[3]};
`
export const Address = styled(Text)`
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props) => props.theme.fontSizes.caption};
color: ${(props) => props.theme.colors.text.secondary};
`
export const Section = styled.View`
flex-direction: row
padding-bottom: ${(props) => props.theme.space[2]}
padding-top: ${(props) => props.theme.space[2]}
align-items: center
`
export const EndSection = styled.View`
justify-content: flex-end;
flex:1
flex-direction: row
`
export const Icon = styled.Image`
width=15px;
height=15px;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary}
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

