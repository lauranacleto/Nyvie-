
import { useContext, useState, useEffect } from 'react';
import cadastroStyles from './cadastroStyles';
import { UsuarioContext } from '../context/UsuarioContext';
import api from '../../services/services';
import seta from "../assets/setaB.svg"
import { Link } from "react-router-dom";


export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [imagem, setImagem] = useState(null);

  const [previewUrl, setPreviewUrl] = useState(null);
  const [modalImagem, setModalImagem] = useState(false);

  const { setUsuario } = useContext(UsuarioContext);

  const [departamentos, setDepartamentos] = useState([]);
  const [cargos, setCargos] = useState([]);

  const [idDepartamento, setIdDepartamento] = useState('');
  const [idCargo, setIdCargo] = useState('');

  // Buscar departamentos e cargos
  useEffect(() => {
    const buscarDados = async () => {
      try {
        const respostaDepartamento = await api.get('/Departamento');
        const respostaCargo = await api.get('/Cargo');

        setDepartamentos(respostaDepartamento.data);
        setCargos(respostaCargo.data);

      } catch (error) {
        console.error(
          "Erro ao buscar departamentos e cargos:",
          error
        );
      }
    };

    buscarDados();
  }, []);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const funcCadastro = async (e) => {
    e.preventDefault();

    try {
      const dados = new FormData();

      dados.append("Nome", nome);
      dados.append("Telefone", telefone);
      dados.append("Email", email);
      dados.append("Senha", senha);
      dados.append("IdDepartamento", idDepartamento);
      dados.append("IdCargo", idCargo);

      if (imagem) {
        dados.append("Imagem", imagem);
      }

      const resposta = await api.post('/Usuario', dados);

      console.log("Resposta do cadastro:", resposta.data);
      console.log("SetUsuario:", setUsuario);

      setUsuario(resposta.data);

      alert("Colaborador cadastrado com sucesso!");

      setNome('');
      setTelefone('');
      setEmail('');
      setSenha('');
      setImagem(null);
      setPreviewUrl(null);
      setModalImagem(false);
      setIdDepartamento('');
      setIdCargo('');

      e.target.reset();

    } catch (erro) {
      console.log("Erro completo:", erro);
      console.log("Código do erro:", erro.code);
      console.log("Mensagem:", erro.message);
      console.log("Resposta da API:", erro.response?.data);
      console.log("Status:", erro.response?.status);
    }
  };

  const selecionarImagem = (e) => {
    const arquivo = e.target.files[0];

    if (arquivo) {
      if (!arquivo.type.startsWith('image/')) {
        alert('Selecione um arquivo de imagem.');
        e.target.value = '';
        return;
      }

      setImagem(arquivo);

      const url = URL.createObjectURL(arquivo);
      setPreviewUrl(url);
      setModalImagem(false);
    }
  };

  return (
    <div style={cadastroStyles.container}>

      {/* Lado esquerdo */}
      <div style={cadastroStyles.ladoE}>

        <Link to="/overview" style={cadastroStyles.setaE}>
        <img
          src={seta}
          width={40}
          height={40}
          alt="seta sair"
          style={cadastroStyles.seta}
        />
        </Link>
        
          
        
        <div style={cadastroStyles.bolaSE} />
        <div style={cadastroStyles.bolaSD} />
        <div style={cadastroStyles.bolaIE} />


        <div style={cadastroStyles.boasVindas}>

          <h2 style={cadastroStyles.titulo}>
            Cadastro de colaboradores
          </h2>

          <p style={cadastroStyles.subtitulo}>
            Adicione novos membros à equipe.
          </p>

          <br />

          <p style={cadastroStyles.subtitulo1}>
            Preencha as informações do colaborador
            <br />
            para criar seu acesso à plataforma.
          </p>

        </div>
      </div>

      {/* Lado direito */}
      <div style={cadastroStyles.ladoD}>

        <form
          style={cadastroStyles.inputContainer}
          onSubmit={funcCadastro}
        >

          <div style={cadastroStyles.inputDuo}>

            <label
              htmlFor="nome"
              style={cadastroStyles.inputText}
            >
              Nome Completo
            </label>

            <input
              id="nome"
              type="text"
              placeholder="Digite o nome do colaborador"
              style={cadastroStyles.input}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

          </div>

          <div style={{ display: "flex", gap: 15 }}>

            <div
              style={{
                ...cadastroStyles.inputDuo,
                flex: 1,
                minWidth: 0
              }}
            >

              <label
                htmlFor="telefone"
                style={cadastroStyles.inputText}
              >
                Número de Telefone
              </label>

              <input
                id="telefone"
                type="tel"
                placeholder="Digite o número"
                style={cadastroStyles.input}
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />

            </div>

            <div
  style={{
    ...cadastroStyles.inputDuo,
    flex: 1,
    minWidth: 0
  }}
>
  <label
    htmlFor="imagem"
    style={cadastroStyles.inputText}
  >
    Foto de Perfil
  </label>

  <div style={cadastroStyles.inputImagemContainer}>

    <input
      id="imagem"
      type="file"
      accept="image/*"
      style={{ display: 'none' }}
      onChange={selecionarImagem}
    />

    <label
      htmlFor="imagem"
      style={cadastroStyles.campoImagem}
    >
      <span style={cadastroStyles.nomeArquivo}>
        {imagem
          ? imagem.name
          : 'Escolher imagem'}
      </span>
    </label>

    {imagem && (
      <button
        type="button"
        style={cadastroStyles.botaoVisualizar}
        onClick={() => setModalImagem(true)}
      >
        Visualizar
      </button>
    )}

  </div>
</div>

          </div>

          <div style={{ display: "flex", gap: 15 }}>

            <div
              style={{
                ...cadastroStyles.inputDuo,
                flex: 1
              }}
            >

              <label
                htmlFor="departamento"
                style={cadastroStyles.inputText}
              >
                Departamento
              </label>

              <select
                id="departamento"
                style={cadastroStyles.inputSelect}
                value={idDepartamento}
                onChange={(e) => setIdDepartamento(e.target.value)}
                required
              >

                <option value="">Selecione</option>

                {departamentos.map((departamento) => (
                  <option
                    key={departamento.idDepartamento}
                    value={departamento.idDepartamento}
                  >
                    {departamento.nome}
                  </option>
                ))}

              </select>

            </div>

            <div
              style={{
                ...cadastroStyles.inputDuo,
                flex: 1
              }}
            >

              <label
                htmlFor="cargo"
                style={cadastroStyles.inputText}
              >
                Cargo
              </label>

              <select
                id="cargo"
                style={cadastroStyles.inputSelect}
                value={idCargo}
                onChange={(e) => setIdCargo(e.target.value)}
                required
              >

                <option value="">Selecione</option>

                {cargos.map((cargo) => (
                  <option
                    key={cargo.idCargo}
                    value={cargo.idCargo}
                  >
                    {cargo.nome}
                  </option>
                ))}

              </select>

            </div>

          </div>

          <div style={cadastroStyles.inputDuo}>

            <label
              htmlFor="email"
              style={cadastroStyles.inputText}
            >
              E-mail:
            </label>

            <input
              id="email"
              type="email"
              placeholder="Digite o e-mail"
              style={cadastroStyles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div style={cadastroStyles.inputDuo}>

            <label
              htmlFor="senha"
              style={cadastroStyles.inputText}
            >
              Senha
            </label>

            <input
              id="senha"
              type="password"
              placeholder="Digite a senha"
              style={cadastroStyles.input}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

          </div>

          <button
            type="submit"
            style={cadastroStyles.botao}
          >
            Cadastrar 
          </button>

        </form>
      </div>

      {modalImagem && previewUrl && (
        <div
          style={cadastroStyles.modalImagem}
          onClick={() => setModalImagem(false)}
        >

          <div
            style={cadastroStyles.conteudoModal}
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              style={cadastroStyles.fecharModal}
              onClick={() => setModalImagem(false)}
            >
              ✕
            </button>

            <h3 style={{ color: '#04224A', marginTop: 0 }}>
              Visualização da foto
            </h3>

            <img
              src={previewUrl}
              alt="Foto de perfil selecionada"
              style={cadastroStyles.imagemModal}
            />

            <button
              type="button"
              style={cadastroStyles.botaoFechar}
              onClick={() => setModalImagem(false)}
            >
              Fechar
            </button>

          </div>

        </div>
      )}

    </div>
  );
}
