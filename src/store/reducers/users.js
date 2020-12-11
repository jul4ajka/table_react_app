import { SET_ALL_USERS } from '../actions/actionTypes'

const initialState = {
  users: null,
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      }
  }
}
