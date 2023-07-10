import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screen/HomeScreen/HomeScreen";
import DetailScreen from "./src/screen/DetailScreen/DetailScreen";
import { QueryClient, QueryClientProvider } from "react-query";

const Stack = createStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={() => {
            return { headerShown: false };
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Settings" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
