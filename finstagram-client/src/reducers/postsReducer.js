const initialState = {
  current: {},
  all: []
}

export default function postsReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_POSTS':
      return { ...state, all: action.payload }
    case 'CREATE_POST':
      return { ...state, all: [...state.all, action.payload] }
    case 'DELETE_POST':
      return { ...state, all: state.all.filter(todo => todo.id !== action.payload.id) }
    default: return state
  }
}
