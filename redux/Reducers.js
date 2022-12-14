let appState = {
    data : [
      { title: 'Go to the office', isFinished: true },
      { title: 'Prepare tasks for today', isFinished: false },
      { title: 'Team meeting', isFinished: false },
      { title: 'Commit tasks changed', isFinished: false },
    ]
}

const taskListReducer = (state = appState, action) => {
    let newTaskList = state.data;
  
    switch(action.type) {
        case 'ADD':
            const newTask = { title: action.taskName, isFinished: false }
            return { ...state, data: [...newTaskList, newTask] }
  
        case 'DELETE':
            newTaskList = newTaskList.filter((item, i) => i !== action.Index);
            return { data: newTaskList};
        default:
            return state;
    }
}

export default taskListReducer;