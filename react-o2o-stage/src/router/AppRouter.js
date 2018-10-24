import React from "react"
import { Route,BrowserRouter } from "react-router-dom"
import App from '../container/App';
import SubRouter from "./SubRouter.js"

export default class AppRouter extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <App>
          <Route path="/" component={ SubRouter }></Route>
        </App>
      </BrowserRouter>
    )
  }
}
