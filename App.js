import React, { Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import AddViewContainer from './redux/container/AddViewContainer';
import TaskListContainer from './redux/container/TaskListContainer';
import taskListReducer from './redux/reducers';
// import TaskFlatList  from './components/TaskFlatList';
// import AddView from './components/AddView';

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(taskListReducer);

console.log(store.getState());

export default class Todo extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={ styles.container }>
          <AddViewContainer />
          <TaskListContainer />
        </View>   
      </Provider>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE'
  }
});