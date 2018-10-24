import React from 'react'
import './style.less'

export default class LoadMore extends React.Component {
  render(){
    return(
      <div className="load-more" ref="wrapper">
         {
             this.props.isLoadingMore
             ? <span>加载中...</span>
             : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
         }
      </div>
    )
  }

  // 点击加载更多事件
  loadMoreHandle(){
    this.props.loadMoreFn();
  }

  componentDidMount(){
    var that = this;
    var loadMoreFn = this.props.loadMoreFn;
    // 触底
    const wrapper = this.refs.wrapper
    var timeoutId;
    function callback(){
      // getBoundingClientRect:用于获得页面中某个元素的左，
      // 上，右和下分别相对浏览器视窗的位置
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      if (top && top < windowHeight) {
         // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
         loadMoreFn();
      }
    }

    // 进来就要注册
    window.addEventListener("scroll",function(){
      // 同时加载只一个在执行就行了
      if (that.props.isLoadingMore) {
        return
      }

      // timeoutId
      if(timeoutId){
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(callback,50)
    })
  }
}
