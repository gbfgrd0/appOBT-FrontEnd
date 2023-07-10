import React, { Component } from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import FotoPerfil from '../images/do-utilizador.png'
import Voltar from '../images/seta-esquerda.png'
import Alerta from '../images/alerta.png'
import Sair from '../images/sair.png'
import Suporte from '../images/apoio-suporte.png'
import About from '../images/informacoes.png'


export default class UserDetails extends Component{

    constructor(props){
        super(props);
        this.state = {
            userData: ""
        }
    }

    componentDidMount(){
        fetch("http://15.228.57.175:5000/userData", {
            method: "POST",
            crossDomain: "true",
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json",
                "Acess-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token")
            })
        }).then((res) => res.json())
        .then((data)=>{
            console.log(data, "userData")
        })
    }

    
    render(){
    return (
        <div className='Container'>
            <div className='Topo'>
                <Link to='/map'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto'>Meu Perfil</h3>
            </div>
            <div className='Perfil'>
                <div className='MeuPerfil'>
                    <img className='FotoPerfil' src={FotoPerfil} alt='perfil-foto'></img>
                    <div className='miniContainer'>
                        <h5 className='TextoPerfil'>User</h5>
                        <h6 className='TextoPerfil' style={{ fontWeight: '400' }} >ID: 0000</h6>
                    </div>
                </div>
                <div className='PerfilFuncoes'>
                <h5 style={{marginLeft:'3vw'}}>Minha Conta</h5>
                <h6 style={{marginLeft:'4vw', color: 'grey', fontWeight:'400'}}>Faça mudanças na sua conta</h6>
                    <div className='minhaConta'>
                        
                        <Link to='/profile/dados' style={{textDecoration:'none', color: 'black'}}>
                        <div className='Dados'>
                            <img style={{height: '4vh', marginRight: '3vw'}} src={FotoPerfil} alt='perfil-detalhes'></img>
                            <div>
                            <h5 className='textoDetalhes' style={{fontWeight: 600}}>Dados Pessoais</h5>
                            <h6 className='textoDetalhes'>Faça mudanças em seus dados pessoais</h6>
                            </div>
                        </div>
                        </Link>
                        <Link style={{textDecoration:'none', color: 'black'}} to='/profile/reclamacoes'>
                        <div className='Dados'>
                        <img style={{height: '3.5vh', marginRight: '3vw', marginLeft: '0.5vw'}} src={Alerta} alt='perfil-alerta'></img>
                            <div>
                            <h5 className='textoDetalhes' style={{fontWeight: 600}}>Reclamações</h5>
                            <h6 className='textoDetalhes'>Vejo o seu histórico</h6>
                            </div>
                        </div>
                        </Link>
                        <Link style={{textDecoration:'none', color: 'black'}} to='/'>
                        <div className='Dados'>
                        <img style={{height: '3.5vh', marginRight: '3vw',  marginLeft: '0.5vw'}} src={Sair} alt='perfil-sair'></img>
                            <h5 style={{display:'inline-block'}}>Sair</h5>
                        </div>
                        </Link>
                    </div>
                    <h5 style={{marginLeft:'3.5vw', marginTop: '3vh'}}>Mais...</h5>
                    <div className='minhaConta'>
                        <Link style={{textDecoration:'none', color: 'black'}} to='/profile/suporte'>
                        <div className='Dados'>
                        <img style={{height: '4vh', marginRight: '3vw',  marginLeft: '0.5vw'}} src={Suporte} alt='perfil-suporte'></img>
                            <h5 style={{display:'inline-block'}}>Suporte/ Relatar Bugs</h5>
                        </div>
                        </Link>
                        <Link to='/profile/sobre' style={{textDecoration:'none', color: 'black'}}>
                        <div className='Dados'>
                        <img style={{height: '3.5vh', marginRight: '3vw',  marginLeft: '1vw'}} src={About} alt='perfil-sair'></img>
                            <h5 style={{display:'inline-block'}}>Sobre o App</h5>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}
