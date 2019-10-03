import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/Screens/SearchPage';
import DetailScreen from './src/Screens/DetailScreen';

const navigator = createStackNavigator({
  
  Search:SearchScreen,
  Detail:DetailScreen
},
{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title: 'news Search'
  }
}
);

export default createAppContainer(navigator);