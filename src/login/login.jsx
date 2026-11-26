import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import { perfilStyles } from "./perfilStyles";
import { jwtDecode } from "jwt-decode";
import logo from "../assets/logo.svg";
import api from "../../services/services";

export default function LoginUsuario() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { token, setToken } = useContext(UsuarioContext);

  useEffect(() => {
    checarToken(token);
}, []);

  const checarToken = (tokenRecebido) => {
    if (!tokenRecebido) {
      return
    }

    console.log(jwtDecode(tokenRecebido));

    navigate('/Overview');
  }

  const funcEntrar = async () => {
    console.log("Email:", email);
    console.log("Senha:", senha);

    try {
      const objLogin = {
        email: email,
        senha: senha
      }

      const response = await api.post('/Login', objLogin);
      console.log("Resposta do login:", response.data.token);

      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);

      navigate('/Overview');
    }
    catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <div style={perfilStyles.container} >

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

        <form
          style={perfilStyles.formulario}
        >

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

         

          <button
            type="button"
            style={perfilStyles.botaoEntrar}
            onClick={funcEntrar}
          >
            Entrar
          </button>

        </form>
      </div>
    </div>
  );
}
