function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      const i = action.i;
      return [
        ...state.slice(0,i),
        ...state.slice(i+1)
      ]
    default:
      return state;
  }
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      // pass a slice of state (comments for our postId) to a more specific reducer
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
