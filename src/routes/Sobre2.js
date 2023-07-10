import React from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'

function Sobre2(){

    return(
       <div className='Container'>
        <div className='Topo'>
                <Link to='/profile'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto'>Sobre o App</h3>
        </div>  
        <div style={{width: '100%', height:'100%'}}>
           <div className='chatResponse'>Para um melhor esclarecimento de nosso objetivo, assista ao nosso vídeo no Youtube:</div>
           <div className='chatResponse'><a style={{color: 'white', fontStyle:'italic'}} target='_blank' rel='noreferrer' href='https://www.youtube.com/watch?v=ygQi3_iWSkE'> Clique aqui para assistir!</a></div>
       </div>
       </div>
    )
}

export default Sobre2;