import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { bindActionCreators } from 'redux'
import * as cityActionsCreators from '../actions/city'
import * as Utils from "../utils/config.js"

// 存储城市数据(初始化城市数据)


class App extends Component {

  constructor(){
    super();
    this.state = {
      initDone:false
    }
  }

  render() {
    return (
      <div>
        {
          this.state.initDone
          ?
          this.props.children
          :
          <div>初始化程序数据</div>
         }
      </div>
    );
  }

  componentDidMount(){
    let cityName = localStorage.getItem(Utils.CITYNAME)
    if(!cityName){
      cityName = "北京"
    }
    cityName = decodeURIComponent(cityName);
    this.props.cityActions.updateCity({
      cityName:cityName
    })

    this.setState({
      initDone:true
    })
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
)(App))
