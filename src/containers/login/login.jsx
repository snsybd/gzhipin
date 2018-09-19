//  登录路由
import React from 'react'
import {NavBar,WingBlank,InputItem,WhiteSpace,List,Button} from 'antd-mobile'
import logo from '../register/img/logo.png'
import '../register/logo.less'

export default class Login extends React.Component{

  state={
    username: '',
    password: '',
  }
  handechange(name,value){
    this.setState({
      [name]:value
    })
}
  login=()=>{
    console.log(this.state)
}
  skip=()=>{
    this.props.history.replace('./register')
  }
    render(){
      return(
            <div>
              <NavBar>硅谷招聘</NavBar>
              <div className='logo-connent'>
                <img src={logo} alt="logo" className='logo-img'/>
                <div style={{ padding: '15px 0' }}>
                  <WingBlank>
                    <List>
                      <InputItem onChange={val=> this.handechange('username',val)}>用戶名：</InputItem>
                      <WhiteSpace/>
                      <InputItem onChange={val=> this.handechange('password',val)}>密碼：</InputItem>
                      <WhiteSpace/>
                      <Button type='primary' onClick={this.login }>登录</Button>
                      <Button  onClick={this.skip}>還沒有賬戶</Button>
                    </List>
                  </WingBlank>

                </div>
              </div>
            </div>
      )
    }
}