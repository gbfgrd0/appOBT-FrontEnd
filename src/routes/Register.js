import React, { Component, Redirect} from 'react';
import '../all.css'

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault()
        const {name, email, password} = this.state;
        console.log(name, email, password)
        fetch("http://15.228.57.175:5000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json",
                "Acess-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
    
        }).then((res) => res.json())
        .then((data)=>{
            console.log(data, "userRegister")
            if(data.status === "Ok"){
                <Redirect to="/login"/>
            }
        })
    }

    render(){
    return(
       <div className='Home' style={{overflow:'hidden'}}>
        <div className='items'>
            <h1 className='textoEntrada' style={{position:'unset', marginBottom: '1vh'}}>Register</h1>
            <h5 className='textoH5'>Olá, Seja bem-vindo!</h5>
        </div>
        <form onSubmit={this.handleSubmit}>
        <section id='box' style={{height:'50vh'}}>
            <div className='inputs'>
                <h5 style={{color: 'black', fontWeight:'400'}} >Nome</h5>
                <input onChange={(e)=> this.setState({name: e.target.value})} style={{width:'65vw', height: '5vh', borderRadius: '2vw', border: '1.5px solid black'}} type='text'/>
            </div>
            <div className='inputs'>
                <h5 style={{color: 'black', fontWeight:'400'}} >Email</h5>
                <input onChange={(e)=> this.setState({email: e.target.value})} style={{width:'65vw', height: '5vh', borderRadius: '2vw', border: '1.5px solid black'}} type='email'/>
            </div>
            <div className='inputs'>
                <h5 style={{color: 'black', fontWeight:'400'}}>Senha</h5>
                <input onChange={(e)=> this.setState({password: e.target.value})} style={{width:'65vw', height: '5vh', borderRadius: '2vw', border: '1.5px solid black'}} type='password'/>
            </div>
            <button className='btn' style={{width: '65vw', marginTop: '1vh', fontSize: '2.5vh', height: '7vh'}}>Registrar</button>
        </section>
        </form>
       </div>
    )
    }
}
