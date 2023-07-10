import { React } from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'
import ChatBubble from '../images/chatBubble.png'

function Historico() {
    return (
        <div className='Container'>
            <div className='Topo'>
                <Link to='/map'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 style={{ marginLeft: '12vw' }} className='TopoTexto'>Notificações</h3>
            </div>
            <div id="main">

                <div class="ballon" style={{backgroundColor:'#6540F5',boxShadow: '6px 8px 8px #8466F7'}}>
                    <img class="imgBL" src={ChatBubble} alt="alert icon"></img>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h1>Cuidado!</h1>
                        <p>O Bueiro N°A acaba de apresentar problemas em seu nível de pluviosidade
                        </p>
                    </div>
                </div>

                <div class="ballon" style={{backgroundColor:'#6540F5',boxShadow: '6px 8px 8px #8466F7'}}>
                    <img class="imgBL" src={ChatBubble} alt="alert icon"></img>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <h1>Cuidado!</h1>
                        <p>O Bueiro N°B acaba de apresentar problemas em seu nível de pluviosidade
                        </p>
                    </div>
                </div>

                <div class="ballon" style={{backgroundColor:'#6540F5',boxShadow: '6px 8px 8px #8466F7'}}>
                    <img class="imgBL" src={ChatBubble} alt="alert icon"></img>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <h1>Cuidado!</h1>
                        <p>O Bueiro N°B acaba de apresentar problemas em seu nível de pluviosidade</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Historico;