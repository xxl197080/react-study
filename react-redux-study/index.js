import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)

// function step1 (succes) {
//   setTimeout(() => {
//     console.log(123)
//     succes()
//   }, 1000);
// }

// function step2 (succes) {
//   setTimeout(() => {
//     console.log(456)
//     succes()
//   }, 2000);
// }

// function step3 (succes) {
//   setTimeout(() => {
//     console.log(789)
//     succes()
//   }, 3000);
// }

// function* main () {
//   yield step1;
//   yield step2;
//   yield step3;
// }

// /**
//  *
//  * @param {Function} fn generator 函数
//  */
// function run (fn) {
//   let generatorFn = fn()

//   // generator 对象执行 next 方法，会得到一个 value 和一个 done 的对象
//   // console.log(generatorFn.next())  // {value: step1, done: false}
//   //  定义一个next的方法
//   function next () {
//     let result = generatorFn.next()
//     // 如果 done 为 true，则执行完毕，没有需要执行的代码了，直接return
//     if (result.done) return;
//     // 当 done 为 false，还需要继续往下执行，调用value方法，并且把next传递下去，上面需要执行的函数再执行 succes(),相当于又执行了next，又得到一个 {value: step1, done: false} 这样的对象，继续判断执行
//     result.value(next)
//   }
//   next()
// }

// run (main)
