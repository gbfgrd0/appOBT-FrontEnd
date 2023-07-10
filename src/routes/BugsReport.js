import React from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'

function BugsReport() {

    return (
        <div className='Container'>
            <div className='Topo'>
                <Link to='/reclamar'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto' style={{marginLeft: '26vw'}}>Reclamações</h3>
            </div>
            <div className='content' style={{marginTop:'4vh'}}>
                <div className='boxBug'>
                    <h4 className='boxName'>Problema com Bugs</h4>
                    <input className='boxInput' type='text' placeholder='Escreva aqui sua reclamação!'></input>
                    <Link to='/map'><button className='boxButton'>Enviar</button></Link>
                </div>
            </div>
        </div>
    )
}

export default BugsReport;