import React, { useState } from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'

function Sobre(){

    let [box1, setBox1] = useState(false)
    let [box2, setBox2] = useState(false)

    function ifBox1(){
        if(box1 === false){
            setBox1(!box1)
        }
    }

    function ifBox2(){
        if(box2 === false){
            setBox2(!box2)
        }

    }

    return(
       <div className='Container'>
        <div className='Topo'>
                <Link to='/profile'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto'>Sobre o App</h3>
        </div>  
        <div style={{width: '100%', height:'100%'}}>
            <div className={box1 ?'chatQuestion' : 'hidden'}>Quem são?</div>
            <div className={box1 ?'chatResponse' : 'hidden'}>Nós somos o grupo Filho de Ares do Sesi Sobradinho localizado no Distrito Federal</div>
            <div className={box2 ?'chatQuestion' : 'hidden'}>Quais são os seus objetivos?</div>
            <div className={box2 ?'chatResponse' : 'hidden'} style={{width:'80vw', left:'15vw'}}>Nosso principal objetivo é criar um aplicativo que auxiliará as empresas responsáveis pelo saneamento básico, fornecendo informações sobre os bueiros dos locais aos quais ela é responsável. Fazendo com que aconteça um mapeamento dos bueiros e encontrando possíveis obstruções, ajudando e evitando futuros prejuízos por conta disso, tudo isso com o nosso protótipo que irá detectar se o bueiro está cheio e enviará as informações para o nosso banco de dados que fará o processamento do nível por meio de nosso algoritmo.</div>
            <Link to='/profile/sobre2'><div className={box2 ? 'buttonAbout' : 'hidden'}><button style={{color: 'black', border:'none', fontSize: '2.5vh', fontWeight: 500}}> Mais... </button></div></Link>
            <div className='chatbox'>
                <div className={box1 ?'hidden' : 'chatboxes'} onClick={ifBox1} style={{marginRight:'4vw'}}><h4>Quem são?</h4></div>
                <div className={box2 ?'hidden' : 'chatboxes'} onClick={ifBox2}><h4>Quais são os seus objetivos?</h4></div>
            </div>
        </div>
       </div>
    )
}

export default Sobre;