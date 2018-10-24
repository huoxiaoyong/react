import React ,{Component} from "react"
import "./style.less"

export default class CurrentCity extends Component{
  render(){
    return(
      <div className="current-city">
          <h2>{ this.props.cityName }</h2>
      </div>
    )
  }
}
