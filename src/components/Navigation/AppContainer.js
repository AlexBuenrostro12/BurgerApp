import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../../screens/Login';
import HomeScreen from '../../screens/Home';
import OrderScreen from '../../screens/Order';

const LoginStack = createStackNavigator({ Login: LoginScreen });
const HomeStack = createStackNavigator({ Home: HomeScreen });
const OrderStack = createStackNavigator({ Order: OrderScreen });

export default createAppContainer(
	createSwitchNavigator(
		{
			//App: AppDrawer,
			Login: LoginStack,
			Home: HomeStack,
			Order: OrderStack
		},
		{
			initialRouteName: 'Login'
		}
	)
);
