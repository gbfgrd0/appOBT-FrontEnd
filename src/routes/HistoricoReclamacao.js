import { React } from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'
import AlertCircle from '../images/alertaCircle.png'

function HistoricoReclamar() {
    return (
        <div className='Container'>
            <div className='Topo'>
                <Link to='/map'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 style={{ marginLeft: '12vw' }} className='TopoTexto'>Histórico de reclamações</h3>
            </div>
            <div id="main">

                <div class="ballon">
                    <img class="imgBL" src={AlertCircle} alt="alert icon"></img>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h1>Reclamação N°1</h1>
                        <p>Sua reclamação foi recebida com sucesso no dia 16/04/23 pela empresa responsável
                        </p>
                    </div>
                </div>

                <div class="ballon">
                    <img class="imgBL" src={AlertCircle} alt="alert icon"></img>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h1>Reclamação N°2</h1>
                        <p>Sua reclamação foi recebida com sucesso no dia 17/04/23 pela empresa responsável
                        </p>
                    </div>
                </div>

                <div class="ballon">
                    <img class="imgBL" src={AlertCircle} alt="alert icon"></img>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <h1>Reclamação N°3</h1>
                        <p>Sua reclamação foi recebida com sucesso no dia 18/04/23 pela empresa responsável</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HistoricoReclamar;