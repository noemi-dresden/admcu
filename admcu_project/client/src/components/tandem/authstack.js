import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import Register from './register';
import LoginNew from './login_new';


export default AuthStack = StackNavigator({
 
  LoginNew: { screen: LoginNew, navigationOptions: { headerTitle: 'Login'}  },
  Register: { screen: Register, navigationOptions: { headerTitle: 'Register' } },

});