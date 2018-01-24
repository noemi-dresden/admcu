import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import CardScreen from './card';
import ListScreen from './list';
import MenuScreen from './menu';
import LoginNew from './login_new';
import StartScreen from './start'; 
import TandemScreen from './tandem';



export default LoggedInStack = StackNavigator({

 tab: {
    screen: TabNavigator({
            Start: {screen: StartScreen},
            card: {screen: CardScreen},
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
    
    Tandem: {screen: TandemScreen},
    LoginNew: { screen: LoginNew, navigationOptions: { headerTitle: 'Login' } },
    MenuScreen: { screen: MenuScreen, navigationOptions: { headerTitle: 'Start your search for tandems!' } }
});

  