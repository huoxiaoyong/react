import React from "react"
import { getDetailsInfoData } from "../../../fetch/details"
import DetailsInfo from "../../../components/DetailsInfo"

export default class Info extends React.Component{

  constructor(){
    super();
    this.state = {
      data:{}
    }
  }

  componentDidMount(){
    getDetailsInfoData(this.props.id)
    .then(res => {
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
            this.state.data
            ?
            <DetailsInfo data={ this.state.data }/>
            :
            <div>正在加载数据。。。</div>
          }
      </div>
    )
  }
}
