import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';


import StartScreen from './tandem/start';
import OtherScreen from './tandem/other';


const AppNavigator = TabNavigator({
            Start: {screen: StartScreen},
            Other: {screen: OtherScreen}
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
                fontSize: 9,
              },
            },
            tabBarPosition: 'bottom',
            swipeEnabled: false,
            animationEnabled: false
});
   


export default AppNavigator;
