import React from "react"
import { getDetailsCommentData } from "../../../fetch/details"
import ListComponent from "../../../components/ListComponent"
import LoadMore from '../../../components/LoadMore'

export default class Comment extends React.Component{

  constructor(){
    super();
    this.state = {
      data:[],
      hasMore: false,
      isLoadingMore: false,
      page: 0
    }
  }

  componentDidMount(){
    this.loadFirstPageData();
  }

  loadFirstPageData() {
    const id = this.props.id
    var result = getDetailsCommentData(0,this.props.id)
    this.resultHandle(result);
  }

  loadMoreData(){
     this.setState({
         isLoadingMore: true
     })
     const id = this.props.id
     const page = this.state.page
     const result = getDetailsCommentData(page, id)
     this.resultHandle(result)
  }

  resultHandle(result){
    result.then(res => {
      return res.json()
    })
    .then(data => {
      // 增加 page 技术
      this.setState({
          isLoadingMore: false,
          page: this.state.page + 1,
          hasMore:data.hasMore
      })
      this.setState({
        data:this.state.data.concat(data.data)
      })
    })
  }

  render(){
    return(
      <div>
        {
          this.state.data.length > 0
          ?
          <ListComponent data={this.state.data}></ListComponent>
          :
          <div>等待加载</div>
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
