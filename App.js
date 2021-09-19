import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, 
{
  initialRouteName:'Search',
  defaultNavigationOptions: { //used to customize header
    title: 'Local Business Search'
  }
});

export default createAppContainer(navigator);