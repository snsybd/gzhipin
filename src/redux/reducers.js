import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG}  from './action-type'



const initUser={
  username: '', // 用户名
  type: '', // 类型
  msg: '', // 错误提示信息
  redirectTo: '' // 需要自动跳转的路由path
}

function user( state = initUser ,acticon){
    switch (acticon.type){
      case AUTH_SUCCESS:
        return {...acticon.data,redirectTo:'/'}
      case  ERROR_MSG:
        return {...acticon,msg:acticon.data}
      default:
        return state
    }


}
export default combineReducers({
  user

})