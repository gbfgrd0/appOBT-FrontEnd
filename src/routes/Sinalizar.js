import React, { useState } from 'react';
import '../all.css'
import { Link } from 'react-router-dom';
import Voltar from '../images/seta-esquerda.png'
import Lupa from '../images/lupa.png'
import Engrenagem from '../images/engrenagem.png'
import Carro from '../images/car.png'
import Caixa from '../images/caixa.png'
import Bandeira from '../images/bandeiras.png'

function Sinalizar() {

    let [valor, setValor] = useState('')
    let [nome, setNome] = useState('')
    let [verdadeiro, setVerdadeiro] = useState(false)

    function Clickado(event) {
        let target = event.target.value
        setValor(target)
    }

    function setarNome(props){
         setNome(props)
    }

    function clickTrue(){
        setVerdadeiro(true)
    }

    return (
        <div className='Container'>
            <div className='Topo'>
                <Link to='/reclamar'><img className='TopoSeta' src={Voltar} alt='seta'></img></Link> <h3 className='TopoTexto' style={{ marginLeft: '26vw' }}>Reclamações</h3>
            </div>
            <div className={valor === '' ? 'boxBug' : 'hidden'} style={{ padding: '5vw', width: '85vw', margin: 'auto', height: '10vh' }}>
                <div className='select'>
                    <select onChange={Clickado} style={{ border: 'none' }}>
                        <option>Selecione uma opção</option>
                        <option>Sobradinho, DF </option>
                        <option>São José dos Campos, SP</option>
                    </select>
                    <img style={{ width: '3vh' }} src={Lupa} alt='lupa'></img>
                </div>
            </div>
            <div className={valor === '' ? 'styleBack' : 'hidden'}>
                <h5 style={{ display: 'block' }}>Escolha o local do bueiro que deseja reportar!</h5>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <img alt='car' style={{ width: '3.5vh', marginRight: '2vw' }} src={Carro}></img>
                    <img alt='caixa' style={{ width: '3vh', marginRight: '2vw' }} src={Caixa}></img>
                    <img alt='engrenagem' style={{ width: '3vh', marginRight: '2vw' }} src={Engrenagem}></img>
                </div>
            </div>
            <div className={valor ==='' || verdadeiro ? 'hidden' : 'boxBug'} style={{padding: '5vw 1vw 5vw 1vw', width:'80vw', margin: 'auto'}}>
                <h3 style={{ color: 'white', backgroundColor: '#160A62', padding: '4vw 15vw 4vw 15vw', borderRadius: '5vw', fontWeight: '500' }}>{valor}</h3>
                <div className='btnBox'>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <button onClick={clickTrue} style={{width:'25vw'}} className='btnReclama'>Bueiro A</button>
                        <button onClick={clickTrue} style={{width:'25vw'}} className='btnReclama'>Bueiro B</button>
                    </div>
                    <div>
                        <button onClick={clickTrue} style={{width:'25vw'}} className='btnReclama'>Bueiro C</button>
                        <button onClick={clickTrue} style={{width:'25vw'}} className='btnReclama'>Bueiro D</button>
                    </div>
                </div>
                <h1>...</h1>
            </div>
            <div className={verdadeiro && nome === '' ? 'divShow' : 'hidden'} style={{marginTop:'4vh'}}>
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

export default Sinalizar;