import React, { useState } from 'react';
import '../all.css';
import Bell from '../images/bell-ring.png';
import Moon from '../images/moon.png';
import Clock from '../images/clock.png';
import Settings from '../images/round-tune.png'
import Home from '../images/round-home.png'
import World from '../images/outline-language.png'
import Chat from '../images/round-question.png'
import User from '../images/user-circle.png'
import { Link } from 'react-router-dom';
import Bueiro from '../images/bueiro-imagem.png'
import Termometro from '../images/termometro.png'
import Flag from '../images/bandeira.png'
import Relogio from '../images/relogio.png'
import Lupa from '../images/lupa.png'
import SettingsSelected from '../images/Vector.png'
import WorldSelected from '../images/WorldSelected.png'


import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";

function Map() {
  const caminho = "M18.6437 12.8764L18.6103 13.1546L18.8301 13.3283L20.82 14.9012L18.9161 18.1974L16.5546 17.2481L16.2922 17.1426L16.0666 17.3132C15.6032 17.6635 15.1007 17.964 14.5592 18.1851L14.2933 18.2936L14.253 18.5779L13.8961 21.1H10.0921L9.73517 18.5779L9.69494 18.2936L9.42906 18.1851C8.88605 17.9634 8.396 17.6746 7.92313 17.3143L7.69717 17.1421L7.43361 17.2481L5.07216 18.1974L3.16825 14.9013L5.17988 13.33L5.41245 13.1484L5.36583 12.857C5.32235 12.5852 5.30011 12.2878 5.30011 12C5.30011 11.7239 5.33219 11.4282 5.37783 11.143L5.42445 10.8516L5.19188 10.6699L3.18025 9.09873L5.08416 5.80258L7.44561 6.75191L7.70804 6.85741L7.93366 6.68682C8.39699 6.3365 8.89955 6.03594 9.44106 5.81492L9.70694 5.70639L9.74717 5.42205L10.1041 2.89999H13.9081L14.265 5.42205L14.3053 5.70639L14.5712 5.81492C15.1142 6.03655 15.6042 6.32543 16.0771 6.68571L16.303 6.85787L16.5666 6.75191L18.9281 5.80258L20.832 9.09873L18.8203 10.6699L18.5878 10.8516L18.6344 11.143C18.6779 11.4152 18.7001 11.7007 18.7001 12C18.7001 12.2994 18.6779 12.5909 18.6437 12.8764Z";
  
  const locaisDF = [
    {lat: -15.642017,lng: -47.796821},
    {lat: -15.642960, lng: -47.788371},
    {lat: -15.646791, lng: -47.786267},
    {lat: -15.632592, lng: -47.795607}
  ]

  const locaisSJ = [
    {lat: -23.200974, lng: -45.903252},
    {lat: -23.198037, lng: -45.907046},
    {lat: -23.204447, lng: -45.905329},
    {lat: -23.198077, lng: -45.899235},
  ]


  const [showTrue, setShowTrue] = useState(false);
  const [showFalse, setShowFalse] = useState(false);
  const [bueiroSelecionado, setBueiroSelecionado] = useState(null);
  const [local, setLocal] = useState(locaisDF);
  const [settings, setSettings] = useState(false);
  const [settingImage, setSettingImage] = useState(Settings)
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [rotas, setRotas] = useState(false)
  const [onde, setOnde] = useState('Sobradinho, DF')
  const [world, setWorld] = useState(World)

  const [originRef, setOriginRef] = useState('')
  const [destino, setDestino] = useState('');

  function showPops(props){
    /* setSettings(false) */
    setShowFalse(props)
    setShowTrue(props)
  }

  const nomesBueiros = ["Bueiro N°A", "Bueiro N°B", "Bueiro N°C", "Bueiro N°D"]

  function Clickado(event) {
    let target = event.target.value
    if(target === 'Sobradinho, DF'){
      setLocal(locaisDF)
      setOriginRef({lat: -15.817050, lng: -47.952598})
      setOnde('Sobradinho, DF')
    }else{
      setLocal(locaisSJ)
      setOriginRef({lat: -23.186803066033555, lng: -45.88523469625803})
      setOnde('São José dos Campos, SP')
    }
}

  function Rotas(){
    setRotas(!rotas)
    if(world === World){
    setWorld(WorldSelected)
    }else{
      setWorld(World)
    }
  }

  function calcularDestino(index){
    let indexReal = index - 1;
    if(onde === 'Sobradinho, DF'){
      setDestino(locaisDF[indexReal])
      setOriginRef({lat: -15.817050, lng: -47.952598})
    }else{
      setDestino(locaisSJ[indexReal])
      setOriginRef({lat: -23.186803066033555, lng: -45.88523469625803})
    }
    
  }

  function showSettings(){
    setSettings(!settings)
    if(settingImage === Settings){
    setSettingImage(SettingsSelected)
    }else{
      setSettingImage(Settings)
    }
  }

  function showPop(index) {
    const nomeBueiro = nomesBueiros[index];
    setBueiroSelecionado(nomeBueiro);
    if(index % 2 === 0){
    setShowTrue(true);
    }else{
      setShowFalse(true);
    }
  }

   async function calcularRota(){
    if(originRef === '' || destino === ''){
      return
    }else{
      // eslint-disable-next-line no-undef
      const directionService = new google.maps.DirectionsService()
      const results = await directionService.route({
        origin: originRef,
        destination: destino,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING
      })
      setDirectionResponse(results)
      setDistance(results.routes[0].legs[0].distance.text)
      setDuration(results.routes[0].legs[0].duration.text)
    }
  }

  function clearRoute(){
    setDirectionResponse(null)
    setDistance('')
    setDuration('')
    setDestino('')
    setOriginRef('')
  }


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBmsW6t6fxuR0RbTCjCV8BKtE85MiR3bVs',
    libraries: ['places']
  })

  return (
    <div className='Map' style={{overflow:'hidden'}}>

      <div className='header'>
        <Link to='/historico-notificar'><img className='iconesCima' style={{ left: '5vw' }} src={Bell} alt='bell'></img></Link>
        <Link><img className='iconesCima' style={{ right: '29vw' }} src={Moon} alt='moon'></img></Link>
        <Link to='/historico-reclamar'><img className='iconesCima' style={{ right: '17vw' }} src={Clock} alt='clock'></img></Link>
       <img onClick={showSettings} className='iconesCima' style={{ right: '5vw'}} src={settingImage} alt='settings'></img>
      </div>

      <div className={settings ? 'select' : 'hidden'} style={{border:'0.5vw black solid', position:'absolute', top:'20vh', left:'10vw',zIndex:'1'}}>
        <select onChange={Clickado} style={{ border: 'none' }}>
          <option>Selecione uma região</option>
          <option>Sobradinho, DF</option>
          <option>São José dos Campos, SP</option>
        </select>
        <img style={{ width: '3vh', marginLeft:'3vw'}} src={Lupa} alt='lupa'></img>
      </div>

      <div className='Mapa'>
        {isLoaded ? (
          <GoogleMap 
            onClick={() => showPops(false)}
            mapContainerStyle={{ width: '100%', height: '100%'}}
            center={local[0]}
            zoom={13.8}
            options={{
              zoomControl: true,
              streetViewControl: true,
              mapTypeControl: false,
              fullscreenControl: false,
              draggableCursor: false
            }}
          > 
         {local.map((local, index) => (
            <Marker key={index} position={{ lat: local.lat, lng: local.lng }} onClick={()=> showPop(index) } icon={{path: `${caminho}`,fillColor: index % 2 === 0 ? 'blue' : 'red' ,fillOpacity: 1}}/>
          ))}
          {directionResponse && <DirectionsRenderer directions={directionResponse}/>}
          </GoogleMap>
        ) : (
          <></>
        )}

         <div className={rotas ? 'rotas' : 'hidden'}> 
        <h4 style={{color: 'purple', marginTop:'3vh'}}>Escolha a rota</h4>
        <select style={{padding:'1vw'}} className='select' onChange={(evento) => calcularDestino(evento.target.selectedIndex)}>
          <option>Selecione um bueiro</option>
          <option>Bueiro N°A</option>
          <option>Bueiro N°B</option>
          <option>Bueiro N°C</option>
          <option>Bueiro N°D</option>
        </select>
        <button onClick={calcularRota} style={{width:'40%', height:'15%', border: '0.5vw purple solid', borderRadius:'10vw', backgroundColor:'white', color:'purple', marginTop:'2vh'}}> Calcular rota </button>
        <button onClick={clearRoute} style={{width:'40%', height:'10%', border: 'none', backgroundColor:'white', color:'purple', marginTop:'1vh', marginBottom:'1vh'}}> Limpar </button>
        <h1 style={{color:'white'}}>---</h1>
        <h5 style={{marginBottom:'1vh'}}>Distância: {distance}</h5>
        <h5 style={{marginBottom:'1vh'}}>Duração: {duration}</h5>
      </div>

        <div className={showTrue ? 'popUp' : 'hidden'}> 
          <div className='itemPop'>
            <img alt='bueiro-imagem' style={{height: '10vh'}} src={Bueiro}></img>
              <div className='itemText'>
               <h3 style={{color: '#0a5327'}}>{bueiroSelecionado}</h3>
                <h6 style={{fontStyle:'italic', fontWeight:'400'}}>Localizado na Quadra 13 - Sobradinho, DF</h6>
             </div>
             <h1 style={{color: '#0a5327', fontWeight: '400'}}>{'{+}'}</h1>
          </div>
          <div className='itemTrue'>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div className='itemInfo'><img alt='relogio' style={{height: '4vh', marginBottom:'1vh'}} src={Relogio}></img><h5>12h</h5></div>
                <div className='itemInfo'><img alt='flag' style={{height: '3.5vh', marginBottom:'1.5vh'}} src={Flag}></img><h5>3l/m³</h5></div>
                <div className='itemInfo'><img alt='termometro' style={{height: '4vh', marginBottom:'1vh'}} src={Termometro}></img><h5>Ótimo</h5></div>
              </div>

              <Link to='/dadosbueiro'>
              <button className='btnPop'>
                  Ver dados
              </button>
              </Link>
          </div>
        </div>

        <div className={showFalse? 'popUp' : 'hidden'}> 
          <div className='itemPop'>
            <img alt='bueiro-imagem' style={{height: '10vh'}} src={Bueiro}></img>
              <div className='itemText'>
               <h3 style={{color: '#830808'}}>{bueiroSelecionado}</h3>
                <h6 style={{fontStyle:'italic', fontWeight:'400'}}>Localizado na Quadra 13 - Sobradinho, DF</h6>
             </div>
             <h1 style={{color: '#830808', fontWeight: '500', textAlign:'center'}}>{'{X}'}</h1>
          </div>
          <div className='itemTrue' style={{backgroundColor:'#830808'}}>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div className='itemInfo'><img alt='relogio' style={{height: '4vh', marginBottom:'1vh'}} src={Relogio}></img><h5>3h</h5></div>
                <div className='itemInfo'><img alt='flag' style={{height: '3.5vh', marginBottom:'1.5vh'}} src={Flag}></img><h5>30l/m³</h5></div>
                <div className='itemInfo'><img alt='termometro' style={{height: '4vh', marginBottom:'1vh'}} src={Termometro}></img><h6>Obstruído</h6></div>
              </div>

              <Link to='/dadosbueiro'>
              <button className='btnPop'>
                  Ver dados
              </button>
              </Link>
          </div>
        </div>

        <div className='footer'>
        <Link to="/map"><img className='iconesBaixo' style={{ left: '8vw' }} src={Home} alt='Home'></img></Link>
        <img onClick={Rotas} className='iconesBaixo' style={{ left: '35vw' }} src={world} alt='World'></img>
        <Link to='/profile/suporte'><img className='iconesBaixo' style={{ left: '60vw', marginBottom: '4.8vh' }} src={Chat} alt='Chat'></img></Link>
        <Link to='/Profile' ><img className='iconesBaixo' style={{ right: '8vw' }} src={User} alt='User'></img></Link>
        </div>
      </div>
    </div>
  )
}

export default Map;

