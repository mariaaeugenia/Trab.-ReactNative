import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import HomeScreen from './screens/Home';
import OptionsMenuScreen from './screens/OptionsMenu';
import RacesScreen from './screens/Races';
import RaceDetails from './screens/RaceDetails';
import DriversScreen from './screens/Drivers';
import DriverDetailsScreen from './screens/DriverDetails';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  OptionsMenu: {
    screen: OptionsMenuScreen
  },
  Races: {
    screen: RacesScreen
  },
  RaceDetails: {
    screen: RaceDetails
  },
  Drivers: {
    screen: DriversScreen
  },
  DriverDetails: {
    screen: DriverDetailsScreen
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#A50202'
    },
    headerTintColor: '#FFFFFF'
  }
});

export default createAppContainer(AppNavigator);