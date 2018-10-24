import React from "react"
import Header from "../../components/Header"
import Info from "./SubPage/info.js"
import Comment from "./SubPage/Comment.js"
import Buy from "./SubPage/Buy.js"

export default class Details extends React.Component{


  /*
    两条信息
      1.商品详情
      2.商品评论
  */

  render(){
    var id = this.props.match.params.id;
    return(
      <div> 
        <Header title="详情"/>
        <Info id={id}/>
        <Buy />
        <Comment id={id} />
      </div>
    )
  }
}
