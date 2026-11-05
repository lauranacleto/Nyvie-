import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import { perfilStyles } from "./perfilStyles";
import api from "../../services/services";

export default function LoginUsuario() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const funcEntrar = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await api.get(
        `/usuarios?email=${encodeURIComponent(email)}`
      );

      const usuarioEncontrado = response.data.find(
        (item) => item.senha === senha
      );

      if (!usuarioEncontrado) {
        alert("E-mail ou senha incorretos!");
        return;
      }

      localStorage.setItem(
        "usuario",
        JSON.stringify(usuarioEncontrado)
      );

      alert("Login realizado com sucesso!");
      navigate("/home");

    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao conectar com o servidor!");
    }
  };

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

        <form
          style={perfilStyles.formulario}
          onSubmit={funcEntrar}
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
            type="submit"
            style={perfilStyles.botaoEntrar}
          >
            Entrar
          </button>

        </form>
      </div>
    </div>
  );
}
