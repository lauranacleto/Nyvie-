
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Splash from './splash/splash';
import Login from './login/login';
import Cadastro from './cadastro/cadastro';
import EditarPerfil from './editarPerfil/editarPerfil';
import HistoricoTicket from './historicoTicket/historicoTicket.jsx';
import HistoricoRecorrentes from './historicoRecorrentes/historicoRecorrentes';
import HistoricoEquipe from './historicoEquipe/historicoEquipe.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/editarPerfil" element={<EditarPerfil />} />
        <Route path="/historicoTicket" element={<HistoricoTicket />} />
        <Route path="/historicoRecorrentes" element={<HistoricoRecorrentes />} />
        <Route path="/historicoEquipe" element={<HistoricoEquipe />} />
      </Routes>
    </BrowserRouter>
  );
}
