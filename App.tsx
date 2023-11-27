import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import  Home  from "./src/home/Home";
import DetailScreen from './src/details/Details';
import {
  createSharedElementStackNavigator,
} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Image Grid">
        <Stack.Screen name="Image Grid" component={Home} />
        <Stack.Screen name="Details" component={DetailScreen} options={{ headerShown: false, presentation: 'modal', animation: 'fade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>   
    </SafeAreaView>
  );
}
export default App;
