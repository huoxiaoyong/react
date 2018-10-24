import React from "react"
import "./style.less"
import CityHeader from "../../components/Header"
import CurrentCity from "../../components/CurrentCity"
import CityList from "../../components/CityList"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { bindActionCreators } from 'redux'
import * as cityActionsCreators from '../../actions/city'
import * as Utils from "../../utils/config.js"


class City extends React.Component{

  getCityName(cityName){
    // 修改redux状态中的cityName
    this.props.cityActions.updateCity({
      cityName:cityName
    })
    // 本地存储
    localStorage.setItem(Utils.CITYNAME,encodeURIComponent(cityName));
    // 回到首页
    this.props.history.replace("/"); //  /city -> /   push("/home")
  }

  render(){
    return(
      <div>
        <CityHeader title={this.props.city.cityName} />
        <CurrentCity cityName={this.props.city.cityName} />
        <CityList changeFn={this.getCityName.bind(this)}/>
      </div>
    )
  }
}

// --------------- redux 部分 -----------------

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
)(City))
