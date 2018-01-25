import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import ListScreen from './list';
import MenuScreen from './menu';
import CardScreen from './card';
import LoginNew from './login_new';
import StartScreen from './start'; 
import TandemScreen from './tandem';



export default LoggedInStack = StackNavigator({
    Start: {screen: StartScreen},
    Tandem: {screen: TandemScreen},
    card: {screen: CardScreen},
    LoginNew: { screen: LoginNew, navigationOptions: { headerTitle: 'Login' } },
    MenuScreen: { screen: MenuScreen, navigationOptions: { headerTitle: 'Start your search for tandems!' } }
});

  