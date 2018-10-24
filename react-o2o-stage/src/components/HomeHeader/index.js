import React ,{Component}  from "react"
import "./style.less"
import SearchInput from "../SearchInput"
import { Link } from "react-router-dom"

export default class HomeHeader extends Component{

  enterHandle(value){
    // 跳转
    this.props.history.push('/search/all/' + encodeURIComponent(value) );
  }

  render(){
    return(
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
             <span>{ this.props.city }</span>
             &nbsp;
             <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div className="home-header-right float-right">
           <Link to="/login">
                <i className="icon-user"></i>
           </Link>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
              <i className="icon-search"></i>
              &nbsp;
              <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}
