import React, { useState } from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'
import Janeiro from '../images/janeiro.png'
import Fevereiro from '../images/fevereiro.png'
import Março from '../images/março.png'
import Abril from '../images/abril.png'

function DataBueiro(){

    const imagens = [
        Janeiro,
        Fevereiro,
        Março,
        Abril
    ]

    const [clickado, setClickado] = useState(false)
    const [imagem, setImagem] = useState(null)

    function showGraphic(props){
        setClickado(true)
        setImagem(props)
    }

    function hideAll(){
        setClickado(false)
    }

    return(
       <div className='Container'>
        <div className='Topo'>
                <Link to='/map'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto' style={{marginLeft:'16vw'}}>Dados sobre o bueiro</h3>
        </div>
        <div className={clickado ? 'hidden' : ''}>
        <div className='grafico'>
            <div onClick={() => showGraphic(0)} className='graficoColumn' style={{height:'15vh'}}></div>
            <div onClick={() => showGraphic(1)} className='graficoColumn'style={{height:'25vh', backgroundColor:'#830808'}}></div>
            <div onClick={() => showGraphic(2)} className='graficoColumn' style={{height:'5vh'}}></div>
            <div onClick={() => showGraphic(3)} className='graficoColumn'style={{height:'10vh'}} ></div>
        </div>
        <div className='mesesGrafico'>
            <h6 style={{marginRight:'10vw'}}>Jan</h6>
            <h6 style={{marginRight:'10vw'}}>Fev</h6>
            <h6 style={{marginRight:'10vw'}}>Mar</h6>
            <h6 style={{marginRight:'3vw'}}>Abr</h6>
        </div>
        <h5 style={{margin:'auto', textAlign:'center',marginTop:'3vh'}}>Clique no mês que deseja visualizar os dados</h5>
        <Link to='/map'><button className='btnBox' style={{margin:'auto', marginTop:'20vh', backgroundColor:'transparent', border:'1vw black solid', padding:'3vw 10vw 3vw 10vw', borderRadius:'3vw',fontWeight:'500'}}> Voltar </button></Link>
        </div>
        <div className={clickado ? 'graficoFic' : 'hidden'}>
            <img src={imagens[imagem]} alt='grafico' style={{width:'100vw', height:'70vh'}}></img>
            <button onClick={hideAll} className='btnBox' style={{margin:'auto', marginTop:'0vh', backgroundColor:'transparent', border:'1vw black solid', padding:'3vw 10vw 3vw 10vw', borderRadius:'3vw',fontWeight:'500'}}> Voltar </button>
        </div>
       </div>
    )
}

export default DataBueiro;