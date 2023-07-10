import { React } from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import FotoPerfil from '../images/do-utilizador.png'
import Voltar from '../images/seta-esquerda.png'
import Name from '../images/pencil.png'
import Senha from '../images/key.png'
import Email from '../images/email.png'
import Telefone  from '../images/telefone.png'
import Date from '../images/datas.png'




function Dados() {
    return (
        <div className='Container'>
            <div className='Topo'>
                <Link to='/profile'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto'>Meu Perfil</h3>
            </div>
            <div className='containerPerfil'>
                <div className='boxPerfil'>
                    <div className='MeuPerfil' style={{marginTop: '3vh'}}>
                        <img className='FotoPerfil' src={FotoPerfil} alt='perfil-foto'></img>
                        <div className='miniContainer'>
                            <h5 className='TextoPerfil'>Nome do usuario</h5>
                            <h6 className='TextoPerfil' style={{ fontWeight: '400' }} >ID: 0000</h6>
                        </div>
                    </div>
                    <div className='form'>
                        <Link to='/profile/dados/nome'style={{width: '80vw', display: 'flex', justifyContent:'center', textDecoration:'none'}}><div className='boxAbout'><button className='inputForm'>Clique aqui para modificar seu nome</button><img style={{width: '3vh'}} src={Name} alt='name'></img></div></Link>
                        <Link to='/profile/dados/email' style={{width: '80vw', display: 'flex', justifyContent:'center', textDecoration:'none'}}><div className='boxAbout'><button className='inputForm'>Clique aqui para modificar seu email</button><img style={{width: '3.5vh'}} src={Email} alt='mail'></img></div></Link>
                        <Link to='/profile/dados/senha' style={{width: '80vw', display: 'flex', justifyContent:'center', textDecoration:'none'}}><div className='boxAbout'><button className='inputForm'>Clique aqui para modificar sua senha</button><img style={{width: '3vh'}} src={Senha} alt='senha'></img></div></Link>
                        <Link to='/profile/dados/telefone' style={{width: '80vw', display: 'flex', justifyContent:'center', textDecoration:'none'}}><div className='boxAbout'><button className='inputForm' style={{fontSize:'2.8vw'}}>Clique aqui para modificar seu telefone</button><img style={{width: '3vh'}} src={Telefone} alt='tel'></img></div></Link>
                        <Link to='/profile/dados/data' style={{width: '80vw', display: 'flex', justifyContent:'center', textDecoration:'none'}}><div className='boxAbout'><button className='inputForm'>Clique aqui para modificar sua data</button><img style={{width: '3vh'}} src={Date} alt='date'></img></div></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dados;