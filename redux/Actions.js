export const deleteTask = (index) => {
    return {
      type: 'DELETE',
      Index: index
    }
}

export const addTask = (name) => {
    return {
      type: 'ADD',
      taskName: name
    }
}
