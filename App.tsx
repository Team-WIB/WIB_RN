import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screen/HomeScreen/HomeScreen";
import DetailScreen from "./src/screen/DetailScreen/DetailScreen";
import { QueryClient, QueryClientProvider } from "react-query";

const Tab = createStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={() => {
            return { headerShown: false };
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Detail" component={DetailScreen} />
          <Tab.Screen name="Settings" component={DetailScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
