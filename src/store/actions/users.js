import {
  DELETE_USER,
  GET_ALL_USERS,
  SET_ALL_USERS,
  UPDATE_USER,
} from './actionTypes'

export function setAllUsers(users) {
  return {
    type: SET_ALL_USERS,
    payload: users,
  }
}

export default function getAllUsers() {
  return {
    type: GET_ALL_USERS,
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user,
  }
}

export function deleteUser(userID) {
  return {
    type: DELETE_USER,
    payload: userID,
  }
}
