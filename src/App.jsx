
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Splash from './splash/splash';
import Login from './login/login';
import Cadastro from './cadastro/cadastro';
import EditarPerfil from './editarPerfil/editarPerfil';
import HistoricoTicket from './historicoTicket/historicoTicket.jsx';
import HistoricoRecorrentes from './historicoRecorrentes/historicoRecorrentes';
<<<<<<< HEAD
import TelaOverview from './telaOverview/TelaOverview.jsx';
import telaOverview from './telaOverview/TelaOverview.jsx'
import HistoricoEquipe from './historicoEquipe/historicoEquipe.jsx';
import CriarTicket from './criarTicket/criarTicket.jsx';

import { UsuarioProvider } from './context/UsuarioProvinder.jsx';
=======
import TelaOverview from './telaOverview/TelaOverview.jsx'
import HistoricoEquipe from './historicoEquipe/historicoEquipe.jsx';
import TelaN2 from './components/telaN2/telaN2.jsx'
>>>>>>> n2


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
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/telaOverview" element={<TelaOverview />} />
=======
        <Route path="/telaOverview" element={<telaOverview />} />
=======
        <Route path="/Overview" element={<TelaOverview />} />
        <Route path="/tela2" element={<TelaN2 />} />

>>>>>>> n2

>>>>>>> historicoEquipe
        <Route path="/historicoEquipe" element={<HistoricoEquipe />} />
      </Routes>
    </BrowserRouter>
    </UsuarioProvider>
  );
}
