import React from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'

function Reclamar() {

    return (
        <div className='Container'>
            <div className='Topo'>
                <Link to='/map'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto' style={{marginLeft: '26vw'}}>Reclamações</h3>
            </div>
            <div className="content">
                <Link to='/reclamar/sinalizar'><button className='inp1' style={{marginTop: '4vh', width:'70vw'}}>Sinalizar bueiro obstruído</button></Link>
                <Link to='/qualidade'><button className='inp1' style={{marginTop: '4vh', width:'70vw'}}>Qualidade do serviço</button></Link>
                <Link to='/reports'><button className='inp1' style={{marginTop: '4vh', width:'70vw'}}>Bugs ou problemas com o App</button></Link>
            </div>
        </div>
    )
}

export default Reclamar;