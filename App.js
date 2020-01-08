import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src//screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);

export default createAppContainer(navigator);

// Client ID
// wgsapj71TaVBhunyNh5gNw

// API Key
// Ja-5MbKrIfhvO7PxZfHK3zmWNpTDYPuvfPtfhQ9k8mCeDShW9FOj9_00mvLzu1XZt664eMx8osadildvsf_GgEGbqwzOoZf44txAU99iWWKr0dLBtI1964qU8SAVXnYx
