import React from "react"
import { Link } from "react-router-dom"
import "./style.less"

export default class Navs extends React.Component{
  render(){
    return(
      <ul className="nav">
        <Link to="/">首页</Link>
        <Link to="/order">订单</Link>
        <Link to="/mine">我的</Link>
      </ul>
    )
  }
}
