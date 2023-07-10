import React,{ useState }from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'
import Bandeira from '../images/bandeiras.png'

function Qualidade() {

let [nome, setNome] = useState('')

function setarNome(props){
    setNome(props)
}
    return (
        <div className='Container'>
            <div className='Topo'>
                <Link to='/reclamar'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto' style={{marginLeft: '26vw'}}>Reclamações</h3>
            </div>
            <div className={nome === '' ? 'divShow' : 'hidden'} style={{marginTop:'4vh'}}>
                <div className='boxBug' style={{padding: '5vw'}}>
                    <div className='boxName' style={{width:'70vw', display: 'flex', justifyContent:'center', backgroundColor:'white', color: 'black', fontWeight: '500', border: '1vw solid black', alignItems:'center'}}><img style={{height: '7vh'}} src={Bandeira} alt='flag'></img><h4>Qual seria seu tipo de reclamação?</h4></div>
                    <button onClick={() => setarNome('Bueiro entupido')} className='boxName' style={{backgroundColor: 'white', color: 'black', border: '0.5vw solid black', width:'60vw', height: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '500', marginTop: '3vh'}}>Bueiro entupido</button>
                    <button onClick={() => setarNome('Bueiro com mal cheiro forte')} className='boxName' style={{backgroundColor: 'white', color: 'black', border: '0.5vw solid black', width:'60vw', height: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '500', marginTop: '1.5vh'}}>Bueiro com mal cheiro forte</button>
                    <button onClick={() => setarNome('Obstrução no bueiro')} className='boxName' style={{backgroundColor: 'white', color: 'black', border: '0.5vw solid black', width:'60vw', height: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '500', marginTop: '1.5vh'}}>Obstrução no bueiro</button>
                    <button onClick={() => setarNome('Personalizado')} className='boxName' style={{backgroundColor: 'white', color: 'black', border: '0.5vw solid black', width:'60vw', height: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '500', marginTop: '1.5vh'}}>Personalizado</button>
                    <h1>...</h1>
                </div>
            </div>
            <div className={nome === '' ? 'hidden' : 'divShow'}>
                 <div className='boxBug' style={{padding: '10vw'}}>
                    <h4 className='boxName'>{nome}</h4>
                    <input className='boxInput' type='text' placeholder='Escreva aqui sua reclamação!'></input>
                    <Link to='/map'><button className='boxButton'>Enviar</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Qualidade;