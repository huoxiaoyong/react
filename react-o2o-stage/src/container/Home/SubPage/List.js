import React from "react"
import { getListData } from "../../../fetch/home"
import ListItem from "../../../components/List"
import LoadMore from "../../../components/LoadMore"

export default class List extends React.Component{

  constructor(){
    super();
    this.state = {
      data:[],
      hasMore:false,
      isLoadingMore:false,
      page:0
    }
  }


  // 网络请求数据
  resultHandle(city,page){
    getListData(city,page).then(res => {
      return res.json();
    })
    .then(data => {
      // 重置isLoadingMore
      this.setState({
        isLoadingMore:false
      })
      this.setState({
        // 拿到数据之后，数据合并
        data:this.state.data.concat(data.data),
        hasMore:data.hasMore, // 数据驱动页面渲染
        page:this.state.page+1
      })
    })
  }

  componentDidMount(){
    this.loadFirstPageData();
  }
  // 第一次调用
  loadFirstPageData(){
    this.resultHandle(this.props.city,0);
  }

  //加载更多数据
  loadMoreData(){
    this.setState({
      isLoadingMore: true
    })
    console.log(this.state.page);
    this.resultHandle(this.props.city,this.state.page);
  }

  render(){
    return(
      <div>
        {
          this.state.data.length > 0
          ?
          <ListItem data={this.state.data} />
          :
          <div>正在加载数据...</div>
        }
        {
          this.state.hasMore
          ?
          <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
          :
          ""
        }
      </div>
    )
  }
}
