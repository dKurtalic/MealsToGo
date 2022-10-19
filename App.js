import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { restaurantRequest } from "./src/services/restaurants/restaurants.service";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  function MapScreen() {
    return (
      <SafeArea><Text>Mapa</Text></SafeArea>
    )
  }
  function SettingsScreen() {
    return (
      <SafeArea><Text>Postavke</Text></SafeArea>
    )
  }


  const iconsNames = {
    Restaurants: 'restaurant',
    Map: 'map',
    Settings: 'settings'
  }
  function createScreenOptions({ route }) {
    let iconName = iconsNames[route.name];
    return {
      tabBarIcon: ({ focused, color, size }) => {
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    }

  }
  const Tab = createBottomTabNavigator();
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}