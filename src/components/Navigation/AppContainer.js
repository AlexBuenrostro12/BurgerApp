import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../../screens/Login';
import BurgerScreen from '../../screens/Burger';
import ContactDataScreen from '../../screens/ContactData';
import OrdersScreen from '../../screens/Orders';

const LoginStack = createStackNavigator({ Login: LoginScreen });
const BurgerStack = createStackNavigator({ Home: BurgerScreen });
const ContactDataStack = createStackNavigator({ ContactData: ContactDataScreen });
const OrdersStack = createStackNavigator({ Orders: OrdersScreen });

export default createAppContainer(
	createSwitchNavigator(
		{
			//App: AppDrawer,
			Login: LoginStack,
			Burger: BurgerStack,
			ContactData: ContactDataStack,
			Orders: OrdersStack,
		},
		{
			initialRouteName: 'Login'
		}
	)
);
