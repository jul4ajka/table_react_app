import { all } from 'redux-saga/effects'
import usersSaga from '../sagas/saga'

export default function* rootSaga() {
  yield all([usersSaga()])
}
