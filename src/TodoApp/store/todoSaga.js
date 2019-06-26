import { takeEvery, put } from 'redux-saga/effects'
import { FETCH_TODO_LIST } from './actionTypes'
import { getTodoList } from './actionCreates'

function * fetchTodoList () {
  let response = yield fetch('http://localhost:3001/todos')
  let res = yield response.json()
  yield put(getTodoList(res))
}

// 暴露出去一个 generator 函数
const todoSaga = function * () {
  /**
   * takeEvery(action.type， 需要执行什么)
   * 监听某个 action, store.dispatch 派发的那个动作
   */
  yield takeEvery(FETCH_TODO_LIST, fetchTodoList)
}
export default todoSaga;
