import React from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'
import Sino from '../images/sino.png'


function Suporte(){
    
    return(
       <div className='Container'>
        <div className='Topo'>
                <Link to='/map'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto'>Suporte</h3>
        </div>  
        <div className='main'>
            <img src={Sino} alt="alert" style={{width:'30vw'}}></img>
            <Link to='/reclamar'><button className='inp1'>Fazer uma Reclamação</button></Link>
        </div>
       </div>
    )
}

export default Suporte;