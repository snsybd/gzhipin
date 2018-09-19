//   注册路由

import React from 'react'
import  {NavBar,WingBlank,InputItem,Radio,List,Button,WhiteSpace} from  'antd-mobile'
import logo from './img/logo.png'
import './logo.less'
import {connect} from 'react-redux'
import {reqister} from '../../redux/action'

 class Register extends React.Component{
  state = {
    username: '',
    password: '',
    password2: '',
    type: 'dashen'
  }
  handechange(name,value){
    this.setState({
      [name]:value
    })
  }
  register=()=>{
    this.props.reqister(this.state)
  }
  skip=()=>{
    this.props.history.replace('./login')
  }
  render(){
    return(
      <div>
        <NavBar>硅谷招聘</NavBar>
        <div className='logo-connent'>
          <img src={logo} alt="" className='logo-img'/>
        </div>
        <div style={{ padding: '15px 0' }}>
          <WingBlank>
            <List>
              <InputItem placeholder='输入用户名'
              onChange={val=> this.handechange('username',val)}>
                <span>用戶名：</span>
              </InputItem>
              <WhiteSpace/>

              <InputItem  placeholder='請輸入密碼'
              onChange={val=> this.handechange('password',val)}>
                <span>密碼：</span>
              </InputItem>
              <WhiteSpace/>

          <InputItem  placeholder='输入確認密碼'
          onChange={val=> this.handechange('password2',val)}>
            <span>確認密碼：</span>
          </InputItem>
              <WhiteSpace/>
            <List.Item>
              <span>用戶類型：</span>&nbsp;&nbsp;&nbsp;
              <Radio checked={this.state.type==='dashen'}  onClick={()=> this.handechange('type','dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={this.state.type==='laoban'}  onClick={()=> this.handechange('type','laoban')}>老闆</Radio>
            </List.Item>
            <Button type='primary' onClick={this.register }>注冊</Button>
            <Button  onClick={this.skip}>已有賬戶</Button>
            </List>
          </WingBlank>

        </div>
      </div>
    )
  }
}
export default connect(
  state=>({}),
  {reqister}
)(Register)