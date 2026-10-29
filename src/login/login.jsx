
import logo from '../assets/logo.svg';
import { perfilStyles } from './perfilStyles';

export default function LoginUsuario() {
  return (
    <div style={perfilStyles.container}>
      <div style={perfilStyles.ladoEsquerdo}>
        <div style={perfilStyles.bolaSE} />
        <div style={perfilStyles.bolaSD} />
        <div style={perfilStyles.bolaIE} />

        <img
          src={logo}
          width={400}
          height={500}
          alt="Logo Nyvie"
          style={perfilStyles.logo}
        />

        <div style={perfilStyles.boasVindas}>
          <h2 style={perfilStyles.titulo}>
            Bem-vinda de volta!
          </h2>

          <p style={perfilStyles.subtitulo}>
            Entre para acessar seus tickets
            <br />
            e acompanhar suas demandas
          </p>
        </div>
      </div>

      <div style={perfilStyles.ladoDireito}>
        <div style={perfilStyles.formulario}>
          <div style={perfilStyles.campoContainer}>
            <label
              htmlFor="email"
              style={perfilStyles.label}
            >
              E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              style={perfilStyles.input}
              autoComplete="email"
            />
          </div>

          <div style={perfilStyles.campoContainer}>
            <label
              htmlFor="senha"
              style={perfilStyles.label}
            >
              Senha
            </label>

            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              style={perfilStyles.input}
              autoComplete="current-password"
            />
          </div>

          <div style={perfilStyles.cadastroContainer}>
            <p style={perfilStyles.textoCadastro}>
              Não tem uma conta?
            </p>

            <a
              href="/cadastro"
              style={perfilStyles.linkCadastro}
            >
              Cadastre-se
            </a>
          </div>

          <button
            type="button"
            style={perfilStyles.botaoEntrar}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
