
 import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
 import Profile from './profile';
 import CardScreen from './card';
 import ListScreen from './list';
 import MenuScreen from './menu';
 import LoginNew from './login_new';
 

 
 export default LoggedInStack = StackNavigator({

  MenuScreen: { screen:MenuScreen, navigationOptions: { headerTitle: 'Select languages' } , screenProps: { email: 'ljupka@yahoo.com' }},
  CardScreen: { screen:CardScreen, navigationOptions: { headerTitle: 'Map' } },
     Profile: { screen: Profile, navigationOptions: { headerTitle: 'Profile' } },
     LoginNew: { screen: LoginNew, navigationOptions: { headerTitle: 'Login'}  },
     
     
   });
 