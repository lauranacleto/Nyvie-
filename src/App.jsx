
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Splash from './splash/splash';
import Login from './login/login';
import Cadastro from './cadastro/cadastro';
import EditarPerfil from './editarPerfil/editarPerfil';
import HistoricoTicket from './historicoTicket/historicoTicket.jsx';
import HistoricoRecorrentes from './historicoRecorrentes/historicoRecorrentes';
import TelaOverview from './telaOverview/TelaOverview.jsx';
import HistoricoEquipe from './historicoEquipe/historicoEquipe.jsx';

import { UsuarioProvider } from './context/UsuarioProvinder.jsx';
import Header from './components/header/header.jsx';


export default function App() {
  return (
    <UsuarioProvider>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/editarPerfil" element={<EditarPerfil />} />
        <Route path="/historicoTicket" element={<HistoricoTicket />} />
        <Route path="/historicoRecorrentes" element={<HistoricoRecorrentes />} />
        <Route path="/telaOverview" element={<TelaOverview />} />
        <Route path="/historicoEquipe" element={<HistoricoEquipe />} />
      </Routes>
    </BrowserRouter>
    </UsuarioProvider>
  );
}
