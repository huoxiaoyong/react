import React from "react"
import { getSearchData } from "../../../fetch/search"
import SearchListItem from "../../../components/List"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import LoadMore from "../../../components/LoadMore"

const initialState = {
  data:[],
  hasMore:false,
  isLoadingMore:false,
  page:0
}

class SearchList extends React.Component{

  constructor(){
    super();
    this.state = initialState
  }

  componentDidMount(){
    this.loadFirstPageData()
  }

  // 第一次
  loadFirstPageData(){
    var city = this.props.city.cityName;
    var category = this.props.category;
    var keyword = this.props.keyword;
    var result = getSearchData(city,0,category,keyword)
    this.resultHandle(result)
  }

  resultHandle(result){
    this.setState({
      page:this.state.page+1 // 页码累加
    })
    result.then(res => {
      return res.json();
    })
    .then(data => {
      // 运行点击加载更多
      this.setState({
          isLoadingMore: false
      })
      console.log(data);
      this.setState({
        hasMore:data.hasMore,
        data:this.state.data.concat(data.data)
      })
    })
  }

  // 加载更多事件
  loadMoreData(){
    // 正在加载数据  按钮将呈现不可点击状态
     this.setState({
         isLoadingMore: true
     })

     var page = this.state.page;
     var city = this.props.city.cityName;
     var category = this.props.category;
     var keyword = this.props.keyword;
     var result = getSearchData(city,page,category,keyword)
     this.resultHandle(result)
  }

  // 重新渲染
  componentDidUpdate(prevProps, prevState){ //prevProps:上一次的状态 prevState：上一次的state
    // 如果两次的值一样，则不再重新执行
    const keyword = this.props.keyword
    const category = this.props.category
    if(keyword === prevProps.keyword && category === prevProps.category){
      // 重复了
      return;
    }

    this.setState(initialState)
    // 渲染
    this.loadFirstPageData()
  }

  render(){
    return(
      <div>
        {
          this.state.data.length >0
          ?
          <SearchListItem data={this.state.data} />
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

function mapStateToProps(state){
  return {
    city:state.city
  }
}


export default withRouter(connect(
  mapStateToProps
)(SearchList))
