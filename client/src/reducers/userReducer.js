import loginService from '../services/login'

const reducer = (state = null, action) => {
  console.log(action.type)
  switch(action.type){
  case 'LOGIN':
    return action.user
  case 'INITUSER':
    return action.user
  default:
    return state
  }
}

export const login = (loginInfo) => {
  return async (dispatch) => {
    const user = await loginService.login({
      username: loginInfo.username,
      password: loginInfo.password
    })
    console.log(user)
    if(user){
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
    }
    dispatch({
      type: 'LOGIN',
      user: user
    })
  }
}

export const initUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: 'INITUSER',
      user: user
    })
  }
}
export const logout = () => {
  return async (dispatch) => {
    window.localStorage.clear()
    dispatch({
      type: 'INITUSER',
      user: null
    })
  }
}

export default reducer

