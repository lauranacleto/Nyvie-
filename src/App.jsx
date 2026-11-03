
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Splash from './splash/splash';
import Login from './login/login';
import Cadastro from './cadastro/cadastro';
<<<<<<< HEAD
import EditarPerfil from './editarPerfil/editarPerfil';
=======
import HistoricoTicket from './historicoTicket/historicoTicket.jsx';
import HistoricoRecorrentes from './historicoRecorrentes/historicoRecorrentes';
>>>>>>> 27fd40d4d9f595e9be55f4536033a363db6aa904

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
<<<<<<< HEAD
        <Route path="/editarPerfil" element={<EditarPerfil />} />
=======
        <Route path="/historicoTicket" element={<HistoricoTicket />} />
        <Route path="/historicoRecorrentes" element={<HistoricoRecorrentes />} />
>>>>>>> 27fd40d4d9f595e9be55f4536033a363db6aa904
      </Routes>
    </BrowserRouter>
  );
}
