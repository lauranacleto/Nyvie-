
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Splash from './splash/splash';
import Login from './login/login';
import Cadastro from './cadastro/cadastro';
import EditarPerfil from './editarPerfil/editarPerfil';
import HistoricoTicket from './historicoTicket/historicoTicket.jsx';
import HistoricoRecorrentes from './historicoRecorrentes/historicoRecorrentes';
import Detalhes from './detalhes/detalhes.jsx';
import Overview from './telaOverview/TelaOverview.jsx';
import HistoricoEquipe from './historicoEquipe/historicoEquipe.jsx';
import CriarTicket from './criarTicket/criarTicket.jsx';
import EditarTicket from './editarTicket/editarTicket.jsx';
import TelaN3 from './components/telaN3/telaN3.jsx';
import TelaN2 from './components/telaN2/telaN2.jsx';

export default function App() {

  return (
    // <UsuarioProvider>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/editarPerfil" element={<EditarPerfil />} />
        <Route path="/criarTicket" element={<CriarTicket />} />
        <Route path="/editarTicket/:id" element={<EditarTicket />} />
        <Route path="/historicoTicket" element={<HistoricoTicket />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="/historicoRecorrentes" element={<HistoricoRecorrentes />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/criarTicket" element={<CriarTicket />} />
        <Route path="/Overview" element={<TelaOverview />} />
        <Route path="/overviewN2" element={<TelaN2 />} />
        <Route path="/overviewN3" element={<TelaN3 />} />
        <Route path="/historicoEquipe" element={<HistoricoEquipe />} />
      </Routes>
    </BrowserRouter>
    // </UsuarioProvider>
  );
}
