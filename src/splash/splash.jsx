import { Link, useNavigate } from 'react-router-dom';

import splashStyles from './splashStyles';
import logoNyvie from '../assets/logo.svg';

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div style={splashStyles.container}>
      {/* Formas decorativas do fundo */}
      <div style={splashStyles.blobTopLeft} />
      <div style={splashStyles.blobTopRight} />
      <div style={splashStyles.blobBottomRight} />

      <div style={splashStyles.content}>
        <img src={logoNyvie} alt="Nyvie" style={splashStyles.logo} />

        <div style={splashStyles.buttonsContainer}>
          <button
            type="button"
            style={splashStyles.buttonEntrar}
            onClick={() => navigate('/login', { replace: true })}
          >
            Entrar
          </button>

          <Link to="/cadastro" style={splashStyles.linkCriarConta}>
            Criar conta
          </Link>
        </div>
      </div>
    </div>
  );
}