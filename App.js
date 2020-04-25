import React, { useState } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import MovieInfo from './screens/MovieInfo'

const Stack = createStackNavigator()

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState({})

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name='Home'>
          {props => <Home {...props} setSelectedMovie={setSelectedMovie} />}
        </Stack.Screen>
        <Stack.Screen
          name='Info'
          component={MovieInfo}
          options={{ title: selectedMovie.Title }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
