import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';

import ListScreen from './tandem/list';
import StartScreen from './tandem/start'; 
import CardScreen from './tandem/card';
import TandemScreen from './tandem/tandem';

import Register from './tandem/register';
import LoginNew from './tandem/login_new';
import MenuScreen from  './tandem/menu';


const AppNavigator = StackNavigator({
  tab: {
    screen: TabNavigator({
            //Start: {screen: ListScreen},
            Start: {screen: StartScreen},
            Tandem: {screen: TandemScreen},
            LoginNew: { screen: LoginNew, navigationOptions: { headerTitle: 'Login' } },
            Register: { screen: Register, navigationOptions: { headerTitle: 'Register' } },
            MenuScreen: { screen: MenuScreen, navigationOptions: { headerTitle: 'Start your search for tandems!' } }
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


export default AppNavigator;
