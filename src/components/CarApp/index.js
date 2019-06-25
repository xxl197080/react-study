import React from 'react'
import './index.css'
import store from '../../store'
import {addCar, reduceCar} from '../../store/actionCreat'

class CarApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      productList: store.getState().car.productList,
      carList: store.getState().car.carList
    }
    store.subscribe(() => {
      this.setState({
        productList: store.getState().car.productList,
        carList: store.getState().car.carList
      })
    })
  }
  render () {
    console.log(store.getState())
    return (
      <div className="box">
        <ul className="left">
          {
            this.state.productList.map(item => {
              return (
                <li key={item.id}>
                  <p>商品名称：{item.name} </p>
                  <p>商品单价：{item.price} </p>
                  <button onClick={store.dispatch.bind(this,addCar(item))}>+</button>
                  <button onClick={store.dispatch.bind(this,reduceCar(item))}>-</button>
                </li>
              )
            })
          }
        </ul>
        <ul className="right">
          {
            this.state.carList.map(item => {
              return (
                <li key={item.id}>
                  <p>商品名称：{item.name} </p>
                  <p>商品单价：{item.price} </p>
                  <p>购买数量：{item.num} </p>
                  <p>总价：{item.total} </p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default CarApp
