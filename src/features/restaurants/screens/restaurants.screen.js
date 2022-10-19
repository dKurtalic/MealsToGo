import React, { useContext, useEffect } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { FlatList, View } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16
  }
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top:50%;
  left:50%;
`

export const RestaurantsScreen = () => {

  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  return (
    <SafeArea>
      {
        isLoading &&
        (<LoadingContainer>
          <ActivityIndicator
            animating={true}
            size={50}
            color={Colors.red300}
            style={{ marginLeft: -25 }} />
        </LoadingContainer>
        )
      }
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};