import React from "react"
import "./style.less"

export default class Header extends React.Component{

  clickBack(){
    window.history.back(); // BOM history.back(-1)
  }

  render(){
    return(
      <div>
        <div id="common-header">
          <span className="back-icon" onClick={this.clickBack.bind(this)}>
            <i className="icon-chevron-left"></i>
          </span>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    )
  }
}
