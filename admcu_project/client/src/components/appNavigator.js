import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';

import ListScreen from './tandem/list';
import OtherScreen from './tandem/other';
import CardScreen from './tandem/card';

const AppNavigator = StackNavigator({
  tab: {
    screen: TabNavigator({
            Start: {screen: ListScreen},
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
