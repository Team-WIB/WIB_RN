import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen/DetailScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import CreateScreen from './src/screen/CreateScreen/CreateScreen';
import { Feather, Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function StackNavigator2() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={CreateScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={StackNavigator}
            options={{
              headerShown: false,
              tabBarLabel: '홈',
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Feather name="home" size={24} color="black" />
                ) : (
                  <Feather name="home" size={24} color="gray" />
                ),
            }}
          />
          <Tab.Screen
            name="Create"
            component={StackNavigator2}
            options={{
              tabBarLabel: '작성',
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="create" size={24} color="black" />
                ) : (
                  <Ionicons name="create" size={24} color="gray" />
                ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
