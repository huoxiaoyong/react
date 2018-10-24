import React from "react"
import { Route,Switch } from "react-router-dom"
import Home from "../container/Home"
import Mine from "../container/Mine"
import Order from "../container/Order"
import NotFound from "../container/404"
import City from "../container/City"
import Search from "../container/Search"
import Details from "../container/Details"
import Login from "../container/Login"
import User from "../container/User"

export default class SubRouter extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route path="/mine" component={ Mine }></Route>
        <Route path="/order" component={ Order }></Route>
        <Route path="/city" component={ City }></Route>
        {/* ? 可选参数 */}
        <Route path="/search/:type/:keyword?" component={ Search }></Route>
        <Route path="/details/:id" component={ Details }></Route>
        <Route path="/login/:router?" component={ Login }></Route>
        <Route path="/user" component={ User }></Route>
        <Route component={ NotFound }></Route>
      </Switch>
    )
  }
}
