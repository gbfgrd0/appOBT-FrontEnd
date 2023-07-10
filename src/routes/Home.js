import {React} from 'react';
import '../all.css'
import { Link } from 'react-router-dom';


function Home(){
    return(
        <div className='Home' style={{overflow:'hidden'}}>
            <h1 className='textoEntrada'>Seja Bem-Vindo ao SMART DRAIN</h1>
            <div style={{position:'absolute', bottom: '12vh'}}>
                <Link style={{textDecoration:'none'}} to='/login'>
                <button className='btn'>LOGIN</button>
                </Link>
                <Link style={{textDecoration:'none'}} to='/register'>
                <button className='btn' style={{backgroundColor:'transparent', borderColor:'white', border:'solid 0.8vw'}}>REGISTER</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;