import sagaApp from '../../config/base'
import { takeEvery, put, call } from 'redux-saga/effects'
import setAllUsers from '../actions/users'
import { GET_ALL_USERS, UPDATE_USER, DELETE_USER } from '../actions/actionTypes'

export function* handleUsersLoad() {
  const snapshot = yield call(sagaApp.firestore.getCollection, 'users')
  let users
  snapshot.forEach(user => {
    users = {
      ...users,
      [user.id]: user.data(),
    }
  })
  yield put(setAllUsers(users))
}

function* handleUserEdit(user) {
  yield call(sagaApp.firestore.setDocument, `users/${user.id}`, user)
}

export function* handleUserRemove(userID) {
  yield call(sagaApp.firestore.deleteDocument, `users/${userID}`)
}

export default function* usersSaga() {
  yield takeEvery(GET_ALL_USERS, handleUsersLoad)
  yield takeEvery(UPDATE_USER, handleUserEdit)
  yield takeEvery(DELETE_USER, handleUserRemove)
}
