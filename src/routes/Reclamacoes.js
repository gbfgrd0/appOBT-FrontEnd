import {React} from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'
import Forbiden from '../images/forbiden.png'


function Reclamacoes(){
    return(
       <div className='Container'>
        <div className='Topo'>
                <Link to='/profile'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto' style={{marginLeft: '15vw'}}>Histórico de reclamações</h3>
        </div>
        <div className='ContainerBox'>
            <div>
                <img src={Forbiden} alt='forbiden' style={{width: '20vh', marginLeft: '20%'}}></img>
                <h3 style={{marginTop: '3vh'}}>Seu perfil não possui reclamações</h3>
            </div>
        </div>
       </div>
    )
}

export default Reclamacoes;