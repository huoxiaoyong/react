import React from "react"
import "./style.less"
import HomeHeader from "../../components/HomeHeader"
import Carousel from "../../components/Carousel"
import Ad from "./SubPage/Ad"
import HomeList from "./SubPage/List"
import Nav from "../../components/Nav"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { bindActionCreators } from 'redux'
import * as cityActionsCreators from '../../actions/city'

class Home extends React.Component{

  render(){
    return(
      <div>
        <HomeHeader city={this.props.city.cityName} history={this.props.history} />
        <Carousel />
        <div style={{height: '15px'}}>{/* 分割线 */}</div>
        <Ad />
        <div style={{height: '15px'}}>{/* 分割线 */}</div>
        <HomeList city={this.props.city.cityName} />
        <Nav />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    city:state.city
  }
}

function mapDispatchToProps(dispatch){
  return {
    cityActions:bindActionCreators(cityActionsCreators,dispatch)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home))
