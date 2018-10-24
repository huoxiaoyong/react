import React from "react"
import "./style.less"
import SearchInput from "../SearchInput"

export default class SearchHeader extends React.Component{

  clickHandle(){
    this.props.history.replace("/")
  }

  enterHandle(value){
    // 路由跳转
    this.props.history.push('/search/all/' + encodeURIComponent(value))
  }

  render(){
    return(
      <div id="search-header" className="clear-fix">
           <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
               <i className="icon-chevron-left"></i>
           </span>
           <div className="input-container">
               <i className="icon-search"></i>
               &nbsp;
               <SearchInput value={this.props.keyword} enterHandle={this.enterHandle.bind(this)}/>
           </div>
       </div>
    )
  }
}
