import {React} from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'
import Name from '../images/pencil.png'

function Nome(){
    return(
       <div className='Container'>
        <div className='Topo'>
                <Link to='/profile/dados'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto'>Meu Perfil</h3>
        </div>
        <div className='boxPerfil' style={{width: '85vw', margin: 'auto', height:'50vh'}}>
            <div className='form'>
            <div className='boxAbout' style={{flexDirection:'row', width: '70vw'}}><input placeholder='Nome atual'className='inputForm' type='text'></input><img style={{width: '3vh'}} src={Name} alt='name'></img></div>
            <div className='boxAbout' style={{flexDirection:'row', width: '70vw'}}><input placeholder='Escreva aqui seu novo nome' className='inputForm' type='text'></input><img style={{width: '3vh'}} src={Name} alt='name'></img></div>
            <Link to='/profile/dados' style={{width: '80vw', display: 'flex', justifyContent:'center', textDecoration:'none'}}><button className='inputForm' style={{marginTop: '15vh', fontSize:'4.5vw', backgroundColor:'white', fontStyle: 'normal', borderRadius: '10vw'}}> Alterar informações </button></Link>
            </div>
        </div>
       </div>
    )
}

export default Nome;