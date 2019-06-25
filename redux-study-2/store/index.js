// 仓库的主文件
// 1、引入 redux
import {
  createStore
} from 'redux'
// 2、引入 reducer 文件
import reducer from './reducer'
// 3、创建 store 实例对象,并把reducer文件当参数传进去
const store = createStore(reducer);
// 4、把 store 暴露出去
export default store;
