import React, { Component } from 'react';
import '../all.css'

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault()
        const {name, email, password} = this.state;
        console.log(name, email, password)
        fetch("http://15.228.57.175:5000/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json",
                "Acess-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
    
        }).then((res) => res.json())
        .then((data)=>{
            console.log(data, "userRegister")
            if(data.status === "Ok"){
                alert("Login feito com sucesso!")
                window.localStorage.setItem("token", data.data);
                
            }else{
                alert("Usuário não encontrado!")
            }
        })
    }

    render(){
    return(
       <div className='Home' style={{overflow:'hidden'}}>
        <div className='items'>
            <h1 className='textoEntrada' style={{position:'unset', marginBottom: '1vh'}}>Login</h1>
            <h5 className='textoH5'>Olá, Bem-vindo De Volta!</h5>
        </div>
        <form onSubmit={this.handleSubmit}>
        <section id='box'>
            <div className='inputs'>
                <h5 style={{color: 'black', fontWeight:'400'}} >Email</h5>
                <input onChange={(e)=> this.setState({email: e.target.value})} style={{width:'65vw', height: '5vh', borderRadius: '2vw', border: '1.5px solid black'}} type='email'/>
            </div>
            <div className='inputs'>
                <h5 style={{color: 'black', fontWeight:'400'}}>Senha</h5>
                <input onChange={(e)=> this.setState({password: e.target.value})} style={{width:'65vw', height: '5vh', borderRadius: '2vw', border: '1.5px solid black'}} type='password'/>
            </div>
            <button className='btn' style={{width: '68vw', marginTop: '4vh', fontSize: '2.5vh'}}>Continuar</button>
        </section>
        </form>
       </div>
    )
}
}
