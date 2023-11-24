import SplashScreen from '../pages/SplashScreen';
import OnBoardingScreen from '../pages/OnBoardingScreen';
import TaskListScreen from '../pages/TaskListScreen';
import AddTaskScreen from '../pages/AddTaskScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from '../themes/Colors';

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background.primary,
        },
        headerTintColor: colors.text,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen
        name="Onboarding"
        options={{headerShown: false}}
        component={OnBoardingScreen}
      />
      <Stack.Screen
        name="TaskList"
        options={{headerShown: false}}
        component={TaskListScreen}
      />
      <Stack.Screen name="AddTask" component={AddTaskScreen} />
    </Stack.Navigator>
  );
}
