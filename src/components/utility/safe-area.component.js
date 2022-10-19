import styled from "styled-components/native";
import { StatusBar, FlatList, SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
flex: 1;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight} px`};
`;