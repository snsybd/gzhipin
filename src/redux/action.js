import {AUTH_SUCCESS,ERROR_MSG}  from './action-type'
import  {reqRegister,reqLogin} from '../api/index'

export const errorMsg=(msg)=>({type:ERROR_MSG,data:msg})
export const authSuccess =(user)=>({type:AUTH_SUCCESS,data:user})


export function reqister(username,psaaword,type) {
  return dispatch =>{
    reqRegister({username,psaaword,type}).then(respoense=>{
      const result=respoense.data
      if(result.code===0){
        const user=result.data
        dispatch(authSuccess(user))
      }else {
        const msg=result.msg
        dispatch(errorMsg(msg))
      }
    })
  }
  
}




