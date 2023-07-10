
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home.js'
import Login from './routes/Login.js'
import Register from './routes/Register.js'
import Map from './routes/Map.js'
import Profile from './routes/Profile.js'
import Dados from './routes/Dados.js'
import Nome from './routes/Nome.js'
import Senha from './routes/Senha.js'
import Email from './routes/Email.js'
import Telefone from './routes/Telefone.js'
import Data from './routes/Data.js'
import Sobre from './routes/Sobre.js'
import Suporte from './routes/Suporte.js'
import Reclamacoes from './routes/Reclamacoes.js'
import Sobre2 from './routes/Sobre2.js'
import Reclamar from './routes/Reclamar.js'
import Reports from './routes/BugsReport.js'
import Qualidade from './routes/Qualidade.js'
import Sinalizar from './routes/Sinalizar.js'
import DadosBueiro from './routes/DadosBueiro.js'
import HistoricoReclamar from './routes/HistoricoReclamacao.js'
import HistoricoNotificar from './routes/Historico.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/map",
    element: <Map/>
  },
  {
    path:"/profile",
    element: <Profile/>
  },
  {
    path: "/profile/dados",
    element: <Dados/>
  },
  {
    path: '/profile/dados/nome',
    element: <Nome/>
  },
  {
    path: '/profile/dados/email',
    element: <Email/>
  },
  {
    path: '/profile/dados/senha',
    element: <Senha/>
  },
  {
    path: '/profile/dados/telefone',
    element: <Telefone/>
  },
  {
    path: '/profile/dados/data',
    element: <Data/>
  },
  {
    path: '/profile/reclamacoes',
    element: <Reclamacoes/>
  },
  {
    path: 'profile/suporte',
    element: <Suporte/>
  },
  {
    path: 'profile/sobre',
    element: <Sobre/>
  },
  {
    path: 'profile/sobre2',
    element: <Sobre2/>
  },
  {
    path: '/reclamar',
    element: <Reclamar/>
  },
  {
    path: '/reports',
    element: <Reports/>
  },
  {
    path: '/qualidade',
    element: <Qualidade/>
  },
  {
    path: '/reclamar/sinalizar',
    element: <Sinalizar/>
  },
  {
    path: '/dadosbueiro',
    element: <DadosBueiro/>
  },
  {
    path: '/historico-reclamar',
    element: <HistoricoReclamar/>
  },
  {
    path:'/historico-notificar',
    element: <HistoricoNotificar/>
  }
])

function App() {
  return(
    <RouterProvider router={router}/>
  )
}


export default App;
