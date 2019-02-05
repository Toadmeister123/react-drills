import React, {Component} from 'react'

class Login extends Component{
    constructor(){
    super()

    this.state = {
        userName: '',
        passWord: ''
    }
}

handleChangeUserName(value){
    this.setState({
        userName: value
    })
}

handleChangePassWord(value){
    this.setState({
        passWord: value
    })
}

handleLogin(){
    alert(`Username: ${this.state.userName} Passsword: ${this.state.passWord}`)
}


 render() {
     return(
         <div>
             <input onChange={(e) => this.handleChangeUserName(e.target.value)}></input>
             <input onChange={(e) => this.handleChangePassWord(e.target.value)}></input>
             <button onClick={() => this.handleLogin()}>Login</button>
         </div>
     )
 }
}
export default Login