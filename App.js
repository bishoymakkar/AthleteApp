import React, {Component} from 'react';
import {View, } from 'react-native';
import {Provider} from 'mobx-react';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import SplashScreen from 'react-native-splash-screen';

import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';

import AppNavigator from './src/AppNavigator';
import NavigationService from './src/NavigationService';


class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <Provider>
            <View style={{flex: 1}}>
              <AppNavigator
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />
            </View>
          </Provider>
        </ApplicationProvider>
      </>
    );
  }
}

export default App;
