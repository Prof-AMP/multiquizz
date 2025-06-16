import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './screens/DashboardScreen';
import Quiz1 from './screens/Quiz1';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="QuizGrupo1" component={Quiz1} />
        {/* Adicione outras telas de quiz aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
