import React from 'react'
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import { SafeAreaView,
  FlatList,
  StatusBar,
  Platform, StyleSheet } from 'react-native';
  import { RFValue } from 'react-native-responsive-fontsize';
import BottomTabNavigator from './src/navigation/TabNavigator';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from './src/navigation/DrawerNavigator'
import DetailScreen from './src/screens/DetailScreen';

export default function App() {
  return (
    <Provider theme={theme}>
     <SafeAreaView style={styles.droidSafeArea}/>
      <NavigationContainer>
          <DrawerNavigation/>
      </NavigationContainer> 
   </Provider>
  )
}


const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight + RFValue(15)
        : RFValue(35),
  },
})