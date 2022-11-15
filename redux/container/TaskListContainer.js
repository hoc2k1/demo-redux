import React, { Component } from 'react';

import { connect } from 'react-redux';
import TaskFlatList from '../../components/TaskFlatList';
import { deleteTask } from '../Actions';

class TaskListContainer extends Component {

  render() {

    console.log(this.props);
    const { data } = this.props.listData;
    
    return(
      <TaskFlatList dataList={data} {...this.props} />
    );
  }
}

export default connect( 
  state => {
    return {
      listData : state.data,
    }
  },
  dispatch => {
    return {
      onDeleteItem: (index) => dispatch( deleteTask(index) )
    }
  }

)(TaskListContainer);