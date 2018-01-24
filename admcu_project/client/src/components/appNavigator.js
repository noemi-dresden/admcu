import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';

//import StartScreen from './tandem/start';
//import OtherScreen from './tandem/other';
import CardScreen from './tandem/card';
import Login from './tandem/login';
import {LoginForm} from './tandem/loginForm.js';
import Register from './tandem/register';
import LoginNew from './tandem/login_new';
import Profile from './tandem/profile';
import ListScreen from './tandem/list';
import MenuScreen from  './tandem/menu';



const AppNavigator = StackNavigator({
  tab: {
    screen: TabNavigator({
            Start: {screen: ListScreen},
            Other: {screen: Login},
            Register: { screen: Register, navigationOptions: { headerTitle: 'Register' } },
            LoginNew: { screen: LoginNew, navigationOptions: { headerTitle: 'Login' } },
            Profile: { screen: Profile, navigationOptions: { headerTitle: 'Profile' } },
            MenuScreen: { screen: MenuScreen, navigationOptions: { headerTitle: 'Start your search for tandems!' } },
          },{
            tabBarOptions:{
              style:{
              backgroundColor: "white",
              borderTopColor: '#808080'
              },
            showIcon: true,
            indicatorStyle:{
              backgroundColor: 'white',
            },
            activeTintColor: '#6a1b9a',
            inactiveTintColor:'#757575',
             labelStyle: {
                fontSize: 6,
              },
            },
            tabBarPosition: 'bottom',
            swipeEnabled: false,
            animationEnabled: false
          })
    },
    card: {screen: CardScreen},
});

/*
export default AuthStack = StackNavigator({
   
    LoginNew: { screen: LoginNew, navigationOptions: { headerTitle: 'Login' } },
    Register: { screen: Register, navigationOptions: { headerTitle: 'Register' } },
  });
*/


export default AppNavigator;

