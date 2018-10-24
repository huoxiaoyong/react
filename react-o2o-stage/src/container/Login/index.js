import React from 'react'
import LoginComponent from "../../components/Login"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { bindActionCreators } from 'redux'
import * as userinfoActionsCreators from '../../actions/userinfo'

class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            checking:false
        }
    }

    componentDidMount(){
        this.doCheck()
    }

    doCheck(){
        const username = this.props.userinfo.username;
        if(username){
            // 登录过了
            this.setState({
                checking:true
            })
            // 回到首页
            this.props.history.push("/user")
        }else{
            // 未登录
            this.setState({
                checking:false
            })
        }
    }

    // 登录事件
    loginHandle(username){
        // 存储用户信息
        this.props.userinfoActions.updateUser({
            username:username
        })

        // 登录判断去哪
        const params = this.props.match.params
        const router = params.router
        // 有来源
        if(router){
            this.props.history.push(router);
        }else{
        // 没来源
            this.props.history.push("/")
        }

    }

    render(){
        return(
            <div>
                {
                    this.state.checking
                    ?
                    <div>已登录</div>
                    :
                    <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
                
            </div>
        )
    }
}

// ------------------------redux部分--------------------------------

function mapStateToProps (state){
    return{
        userinfo:state.userinfo
    }
}
function mapDispatchToProps (dispatch){
    return{
        userinfoActions:bindActionCreators(userinfoActionsCreators,dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login))

