import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Gallery from './src/pages/gallery';
import Photo from './src/pages/photo';

const createNavigator = (routes, options) => {
  const screens = {};
  Object.keys(routes).forEach(key => {
    // eslint-disable-next-line no-param-reassign
    routes[key].navigationOptions = {
      title: key,
    };
    screens[key] = { screen: routes[key] };
  });
  return createStackNavigator(screens, options);
};

const MainNavigator = createNavigator(
  {
    Gallery,
    Photo,
  },
  {
    initialRouteName: 'Gallery',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2f2f2f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const App = createAppContainer(MainNavigator);

export default App;
