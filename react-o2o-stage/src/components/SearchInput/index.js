import React ,{Component}  from "react"
import './style.less'

export default class SearchInput extends Component{

  constructor() {
     super();
     this.state = {
         value: ''
     }
  }

  componentDidMount() {
      // 默认值
      this.setState({
          value: this.props.value || ''
      })
  }

  changeHandler(event){
    this.setState({
        value: event.target.value
    })
  }

  KeyUpHandle(event){
    // 监听回车键
    if(event.keyCode !== 13){
      return;
    }
    // 跳转到search
    this.props.enterHandle(event.target.value)
  }

  render(){
    return(
      <input
        onChange={ this.changeHandler.bind(this) }
        onKeyUp={ this.KeyUpHandle.bind(this) }
        className="search-input"
        type="text"
        placeholder="请输入关键字"
        value={this.state.value}
      />
    )
  }
}
