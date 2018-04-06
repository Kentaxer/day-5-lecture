import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import HomeContainer from "./app/containers/Home";
import Details from "./app/components/Details";

import { StackNavigator } from 'react-navigation';
import masterReducer from "./app/reducers";

let store = createStore(masterReducer, applyMiddleware(thunk))

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeContainer,
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}


