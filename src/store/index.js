import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import todoReducer from '../TodoApp/store/reducer'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
// 1.引入 saga
import createSagaMiddleware from 'redux-saga'
// 2. 引入 saga 的处理文件
import todoSaga from '@/TodoApp/store/todoSaga'
// 3. 创建 saga 中间件
const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  todo: todoReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  // 4. 使用 saga 中间件
  composeEnhancers(applyMiddleware(sagaMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// 5. run todoSaga 需要处理的异步代码的文件
sagaMiddleware.run(todoSaga)
export default store;

