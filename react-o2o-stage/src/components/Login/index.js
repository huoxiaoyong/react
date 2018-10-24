import React ,{Component} from "react"
import "./style.less"

export default class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            username:''
        }
    }

    changeHandler(event){
        this.setState({
            username: event.target.value
        })
    }
    
    clickHandler(event){
        const username = this.state.username
        const loginHandle = this.props.loginHandle

        /**
         验证登陆的过程，登录成功，loginHandle。否则给出用户提示
            网络请求：post
        */
    loginHandle(username);
    }

    render(){
        return(
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.changeHandler.bind(this)}
                        value={this.state.username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" onClick={this.clickHandler.bind(this)}>登录</button>
            </div>
        )
    }
}