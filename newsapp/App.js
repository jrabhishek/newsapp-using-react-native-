import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/Screens/SearchPage';

const navigator = createStackNavigator({
  
  Search:SearchScreen
},
{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title: 'news Search'
  }
}
);

export default createAppContainer(navigator);