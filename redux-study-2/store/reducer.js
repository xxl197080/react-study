import {combineReducers} from 'redux'

import TodoApp from './TodoApp'
import CarApp from './CarApp'

export default combineReducers({
  todo: TodoApp,
  car: CarApp
})

// const initState = {
//   // inputVal: '',
//   // todoList: [],
//   // productList:[
//   //   { id: 1, name: 'apple', price: 5 },
//   //   { id: 2, name: 'banana', price: 12 },
//   //   { id: 3, name: 'orange', price: 8 }
//   // ], // 商品数据
//   // carList: [] // 购物车商品数据
// }

// export default (state = initState, action) => {
//   return {
//     todo: TodoApp(state.todo, action),
//     car: CarApp(state.car, action)
//   }

  // switch (action.type) {
  //   case INPUTVAL:
  //   return Object.assign({}, state, { inputVal: action.value })

  //   case ADDTODO:
  //     return Object.assign({}, state, {
  //       todoList: [...state.todoList, state.inputVal]
  //     })
  //     // 添加商品
  //     case ADDCAR:
  //       // 0.要添加的商品
  //       let goods = action.goods;
  //       // 1.判断商品是否存在购物车中
  //       let goodsId = state.carList.findIndex(item => {
  //         return item.id === goods.id
  //       })
  //       if (goodsId > -1) {
  //         // 该商品存在
  //         let newCarList = JSON.parse(JSON.stringify(state.carList))
  //         newCarList[goodsId].num ++;
  //         newCarList[goodsId].total = newCarList[goodsId].price * newCarList[goodsId].num
  //         return Object.assign({}, state, {
  //           carList: newCarList
  //         })
  //       } else {
  //         // 该商品不存在
  //         let newGoods = Object.assign({}, goods, { num: 1, total: goods.price })
  //         return Object.assign({}, state, {
  //           carList: [...state.carList, newGoods]
  //         })
  //       }
  //     case REDUCECAR:
  //       // 0.要减少的商品
  //       let product = action.goods;
  //       // 1.判断商品是否存在购物车中
  //       let index = state.carList.findIndex(item => {
  //         return item.id === product.id
  //       })
  //       if (index > -1) {
  //         // 购物车中有这个商品，再判断该商品数量是否大于1，大于1 num-- ，等于 1 就删除
  //         let reducrCarList = JSON.parse(JSON.stringify(state.carList))
  //         if (state.carList[index].num > 1) {
  //           reducrCarList[index].num --;
  //           reducrCarList[index].total -= reducrCarList[index].price
  //         } else {
  //           reducrCarList.splice(index, 1)
  //         }
  //         return Object.assign({}, state, {
  //           carList: reducrCarList
  //         })
  //       } else {
  //         return state;
  //       }
  //   default:
  //     return state;
  // }
// }
