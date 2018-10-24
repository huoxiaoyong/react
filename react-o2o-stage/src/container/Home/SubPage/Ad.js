import React from "react"
import { getAdData } from "../../../fetch/home"
import HomeAd from "../../../components/HomeAd"

export default class Ad extends React.Component{

  constructor(){
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    getAdData().then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        data:data
      })
    })
  }

  render(){
    return(
      <div>
        {
          this.state.data.length > 0
          ?
          <HomeAd data={ this.state.data }/>
          :
          <div>正在加载数据...</div>
        }

      </div>
    )
  }
}
