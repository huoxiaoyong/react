import React from "react"
import SearchHeader from "../../components/SearchHeader"
import SearchList from "./SubPage/searchList.js"

export default class Search extends React.Component{
  render(){

    var keyworks = this.props.match.params;
    return(
      <div>
        <SearchHeader keyword={keyworks.keyword} history={this.props.history}/>
        <SearchList category={ keyworks.type } keyword={ keyworks.keyword } />
      </div>
    )
  }
}
