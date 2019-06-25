import {ADDCAR, REDUCECAR} from '../actionTypes'

const initState = {
  productList:[
    { id: 1, name: 'apple', price: 5 },
    { id: 2, name: 'banana', price: 12 },
    { id: 3, name: 'orange', price: 8 }
  ], // 商品数据
  carList: [] // 购物车商品数据
}


export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
      // 添加商品
      case ADDCAR:
        // 0.要添加的商品
        let goods = action.goods;
        // 1.判断商品是否存在购物车中
        let goodsId = state.carList.findIndex(item => {
          return item.id === goods.id
        })
        if (goodsId > -1) {
          // 该商品存在
          newState.carList[goodsId].num ++;
          newState.carList[goodsId].total = newState.carList[goodsId].price * newState.carList[goodsId].num
        } else {
          // 该商品不存在
          // let newGoods = Object.assign({}, goods, { num: 1, total: goods.price })
          newState.carList.push({ ...goods, num: 1, total: goods.price })
        }
        return newState

      case REDUCECAR:
        // 0.要减少的商品
        let product = action.goods;
        // 1.判断商品是否存在购物车中
        let index = state.carList.findIndex(item => {
          return item.id === product.id
        })
        if (index > -1) {
          // 购物车中有这个商品，再判断该商品数量是否大于1，大于1 num-- ，等于 1 就删除
          if (newState.carList[index].num > 1) {
            newState.carList[index].num --;
            newState.carList[index].total -= newState.carList[index].price
          } else {
            newState.carList.splice(index, 1)
          }
        }
        return newState;

    default:
      return newState;
  }
}
