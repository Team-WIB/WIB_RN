import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <Text>Home</Text>;
}

function SearchScreen() {
  return <Text>Search</Text>;
}

function BottomTabNavigationApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="left" size={30} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: '알림',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="left" size={30} color="white" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabNavigationApp;
