
import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";
import { useContext } from "react";
import { criarTicketStyles } from "./criarTicket.js";
import iconeTicket from "../assets/ticket.svg";
import api from "../../services/services";

import Header from "../components/header/header.jsx";
import Aside from "../components/aside/aside.jsx";
import { UsuarioContext } from "../context/UsuarioContext.jsx";
import { jwtDecode } from "jwt-decode";

export default function CriarTicket() {

  const [titulo, setTitulo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [cliente, setCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descricao, setDescricao] = useState("");
  const [previa, setPrevia] = useState(null);

  const [departamentos, setDepartamentos] = useState([]);
  const [prioridades, setPrioridades] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [statusTickets, setStatusTicket] = useState([]);

  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [mostrarClientes, setMostrarClientes] = useState(false);
  const [novoCliente, setNovoCliente] = useState("");
  const [mostrarCadastroCliente, setMostrarCadastroCliente] = useState(false);
  const [arquivo, setArquivo] = useState(null);
  const [idPrioridade, setIdPrioridade] = useState("");
  const { token, setToken } = useContext(UsuarioContext)

  const clientesFiltrados = clientes.filter((item) =>
    item.nome?.toLowerCase().includes(cliente.toLowerCase())
  );

  async function buscarDepartamentos() {
    try {
      const response = await api.get("/Departamento");
      const dados = await response.data;

      setDepartamentos(dados);
    } catch (error) {
      console.log("Erro ao buscar departamentos:", error);
    }
  }

  async function buscarClientes() {
    try {
      const response = await api.get("/Cliente");
      const dados = await response.data;

      setClientes(dados);
    } catch (error) {
      console.log("Erro ao buscar clientes:", error);
    }
  }

  async function buscarPrioridades() {
    try {
      const response = await api.get("/Prioridade");
      const dados = await response.data;

      setPrioridades(dados);
    } catch (error) {
      console.log("Erro ao buscar clientes:", error);
    }
  }

  async function buscarStatus() {
    try {
      const response = await api.get("/StatusTicket");
      const dados = await response.data;

      setStatusTicket(dados);
    } catch (error) {
      console.log("Erro ao buscar clientes:", error);
    }
  }

  async function cadastrarCliente() {
    if (!novoCliente.trim()) {
      alert("Informe o nome do cliente.");
      return;
    }

    if (telefoneNumeros.length < 10) {
      alert("Informe um telefone válido.");
      return;
    }

    try {
      const response = await api.post("/Cliente", {
        nome: novoCliente.trim(),
        telefone: telefoneNumeros
      });

      const clienteCriado = response.data;

      setClientes((anteriores) => [...anteriores, clienteCriado]);

      setCliente(clienteCriado.nome);
      setClienteSelecionado(clienteCriado);

      setNovoCliente("");
      setMostrarCadastroCliente(false);
      setMostrarClientes(false);

      alert("Cliente cadastrado com sucesso!");

    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      console.log("Resposta da API:", error.response?.data);

      alert("Não foi possível cadastrar o cliente.");
    }
  }

  useEffect(() => {
    const buscarIdsPadrao = async () => {
      try {
        const [resPrioridades, resStatus] = await Promise.all([
          api.get("/Prioridade"),
          api.get("/StatusTicket")
        ]);

        const prioridadeBaixa = resPrioridades.data.find(
          p => p.nome?.toLowerCase() === "baixa"
        );

        const statusPendente = resStatus.data.find(
          s => s.nome?.toLowerCase() === "pendente"
        );

        if (prioridadeBaixa) {
          setIdPrioridade(prioridadeBaixa.idPrioridade);
        }

        if (statusPendente) {
          setIdStatusPendente(statusPendente.idStatusTicket);
        }

        console.log("PRIORIDADE BAIXA:", prioridadeBaixa);
        console.log("STATUS PENDENTE:", statusPendente);

      } catch (error) {
        console.error("ERRO AO BUSCAR IDs:", error.response?.data || error);
      }
    };

    buscarIdsPadrao();
  }, []);

  // Formatar telefone
  function formatarTelefone(valor) {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);

    if (numeros.length <= 2) return numeros;

    if (numeros.length <= 6) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    }

    if (numeros.length <= 10) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    }

    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
  }

  const inputArquivoRef = useRef(null);

  const s = criarTicketStyles;

  // Buscar departamentos e clientes
  useEffect(() => {
    buscarDepartamentos();
    buscarClientes();
    buscarPrioridades();
    buscarStatus
  }, []);

  // Liberar URL da imagem
  useEffect(() => {
    return () => {
      if (previa) {
        URL.revokeObjectURL(previa);
      }
    };
  }, [previa]);

  // Escolher imagem
  function escolherImagem(e) {
    const imagemSelecionada = e.target.files?.[0];

    if (!imagemSelecionada) return;

    if (!imagemSelecionada.type.startsWith("image/")) {
      alert("Selecione uma imagem válida.");
      e.target.value = "";
      return;
    }

    if (imagemSelecionada.size > 5 * 1024 * 1024) {
      alert("A imagem deve ter no máximo 5 MB.");
      e.target.value = "";
      return;
    }

    setArquivo(imagemSelecionada);
    setPrevia(URL.createObjectURL(imagemSelecionada));
  }

  // Enviar ticket
  async function funcEnviar(e) {
    e.preventDefault();

    const numeroTelefone = telefone.replace(/\D/g, "");

    if (!titulo.trim()) {
      alert("Digite o título do ticket.");
      return;
    }

    if (!departamento) {
      alert("Selecione um departamento.");
      return;
    }

    if (!cliente.trim()) {
      alert("Informe o nome do cliente.");
      return;
    }

    if (!clienteSelecionado) {
      alert("Selecione ou cadastre um cliente válido.");
      return;
    }

    if (numeroTelefone.length < 10) {
      alert("Informe um telefone válido.");
      return;
    }

    if (!descricao.trim()) {
      alert("Descreva o problema.");
      return;
    }

    try {
      const usuario = jwtDecode(localStorage.getItem("token"))
      console.log(localStorage.getItem("token"))
      console.log(usuario)

      const formData = new FormData();
      formData.append("Nome", titulo.trim());
      formData.append("Descricao", descricao.trim());
      formData.append("IdCliente", clienteSelecionado.idCliente);
      formData.append("IdUsuario", usuario.jti);
      formData.append("IdPrioridade", idPrioridade);
      formData.append("IdDepartamento", departamento);
      formData.append("IdStatusTicket", "9c507f87-256c-4865-baf9-2e01195afc82");

      if (arquivo) {
        formData.append("Imagem", arquivo);
      }

      const response = await api.post("/Ticket", formData);

      console.log("Ticket cadastrado:", response.data);
      alert("Ticket cadastrado com sucesso!");

      setTitulo("");
      setDepartamento("");
      setCliente("");
      setClienteSelecionado(null);
      setMostrarClientes(false);
      setMostrarCadastroCliente(false);
      setTelefone("");
      setDescricao("");
      setPrevia(null);
      setArquivo(null);

    } catch (error) {
      console.error("Erro ao cadastrar ticket:", error);
      alert("Não foi possível cadastrar o ticket.");
    }
  }

  return (
    <>
      <Header />
      <Aside />

      <main style={s.container}>

        <div style={s.banner}>
          <img src={iconeTicket} alt="" style={s.bannerIcone} />

          <h1 style={s.bannerTitulo}>
            Criar Ticket
          </h1>
        </div>

        <form style={s.card} onSubmit={funcEnviar}>

          <div style={s.topo}>

            {/* Imagem */}
            <div style={s.fotoWrapper}>

              {previa ? (
                <img
                  src={previa}
                  alt="Foto do problema"
                  style={s.foto}
                />
              ) : (
                <div style={s.fotoVazia}>
                  Adicione uma foto do problema
                </div>
              )}

              <button
                type="button"
                style={s.botaoCamera}
                onClick={() => inputArquivoRef.current?.click()}
                aria-label="Adicionar foto"
              >
                <Camera size={20} color="#FFFFFF" />
              </button>

              <input
                ref={inputArquivoRef}
                type="file"
                accept="image/*"
                capture="environment"
                style={s.inputArquivo}
                onChange={escolherImagem}
              />

            </div>

            <div style={s.campos}>

              <div style={s.campoContainer}>
                <label htmlFor="titulo" style={s.label}>
                  Título:
                </label>

                <input
                  id="titulo"
                  type="text"
                  placeholder="Digite o título do ticket"
                  style={s.input}
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </div>

              <div style={s.campoContainer}>
                <label htmlFor="departamento" style={s.label}>
                  Departamento:
                </label>

                <select
                  id="departamento"
                  style={s.input}
                  value={departamento}
                  onChange={(e) => setDepartamento(e.target.value)}
                >
                  <option value="">
                    Selecione o departamento
                  </option>

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

              <div style={s.linhaCampos}>

                <div style={{ ...s.campoCliente, position: "relative" }}>

                  <label htmlFor="cliente" style={s.label}>
                    Cliente:
                  </label>

                  <input
                    id="cliente"
                    type="text"
                    placeholder="Pesquise o cliente"
                    style={s.input}
                    value={cliente}
                    onChange={(e) => {
                      const valor = e.target.value;

                      setCliente(valor);
                      setClienteSelecionado(null);
                      setMostrarCadastroCliente(false);
                      setMostrarClientes(valor.trim().length > 0);
                    }}
                    onFocus={() => {
                      if (cliente.trim().length > 0) {
                        setMostrarClientes(true);
                      }
                    }}
                  />

                  {/* Sugestões de clientes */}
                  {mostrarClientes &&
                    cliente.trim().length > 0 &&
                    !mostrarCadastroCliente && (
                      <div style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        width: "100%",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #D6E8FA",
                        borderRadius: "6px",
                        zIndex: 10,
                        maxHeight: "180px",
                        overflowY: "auto",
                        boxSizing: "border-box",
                        boxShadow: "0 3px 8px rgba(0,0,0,0.08)"
                      }}>

                        {clientesFiltrados.map((item) => (
                          <div
                            key={item.idCliente}
                            onClick={() => {
                              setCliente(item.nome);
                              setClienteSelecionado(item);
                              setMostrarClientes(false);
                              setMostrarCadastroCliente(false);
                            }}
                            style={{
                              padding: "11px 12px",
                              cursor: "pointer",
                              borderBottom: "1px solid #EEEEEE"
                            }}
                          >
                            {item.nome}
                          </div>
                        ))}

                        {clientesFiltrados.length === 0 && (
                          <>
                            <div style={{
                              padding: "10px 12px",
                              color: "#777777",
                              fontSize: "13px"
                            }}>
                              Nenhum cliente encontrado.
                            </div>

                            <div
                              onClick={() => {
                                setNovoCliente(cliente.trim());
                                setMostrarClientes(false);
                                setMostrarCadastroCliente(true);
                              }}
                              style={{
                                padding: "11px 12px",
                                cursor: "pointer",
                                color: "#245B91",
                                fontSize: "13px",
                                fontWeight: "600",
                                borderTop: "1px solid #EEEEEE"
                              }}
                            >
                              + Cadastrar "{cliente.trim()}" como novo cliente
                            </div>
                          </>
                        )}

                      </div>
                    )}

                  {/* Mini tela de cadastro */}
                  {mostrarCadastroCliente &&
                    cliente.trim().length > 0 &&
                    clientesFiltrados.length === 0 && (

                      <div style={{
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        left: 0,
                        width: "100%",
                        backgroundColor: "#FFFFFF",
                        padding: "16px",
                        border: "1px solid #D6E8FA",
                        borderRadius: "8px",
                        zIndex: 20,
                        boxSizing: "border-box",
                        boxShadow: "0 5px 16px rgba(11, 27, 56, 0.12)"
                      }}>

                        <div style={{
                          borderBottom: "1px solid #E8EEF5",
                          paddingBottom: "10px",
                          marginBottom: "13px"
                        }}>
                          <h4 style={{
                            margin: 0,
                            color: "#1D68BE",
                            fontSize: "15px",
                            fontWeight: "600"
                          }}>
                            Cadastrar novo cliente
                          </h4>

                          <span style={{
                            fontSize: "12px",
                            color: "#233D6A"
                          }}>
                            Preencha os dados para continuar
                          </span>
                        </div>

                        <div style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                          marginBottom: "12px"
                        }}>
                          <label style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "#34445A"
                          }}>
                            Nome
                          </label>

                          <input
                            type="text"
                            style={{
                              ...s.input,
                              width: "100%",
                              height: "36px",
                              fontSize: "13px",
                              boxSizing: "border-box",
                              border: "1px solid #D5DFEA",
                              borderRadius: "5px",
                              padding: "0 10px"
                            }}
                            placeholder="Nome do cliente"
                            value={novoCliente}
                            onChange={(e) => setNovoCliente(e.target.value)}
                          />
                        </div>

                        <div style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px"
                        }}>
                          <label style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "#34445A"
                          }}>
                            Telefone
                          </label>

                          <input
                            type="tel"
                            style={{
                              ...s.input,
                              width: "100%",
                              height: "36px",
                              fontSize: "13px",
                              boxSizing: "border-box",
                              border: "1px solid #D5DFEA",
                              borderRadius: "5px",
                              padding: "0 10px"
                            }}
                            placeholder="(11) 99999-9999"
                            value={novoTelefone}
                            onChange={(e) =>
                              setNovoTelefone(formatarTelefone(e.target.value))
                            }
                          />
                        </div>

                        <div style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: "10px",
                          marginTop: "16px",
                          paddingTop: "11px",
                          borderTop: "1px solid #E8EEF5"
                        }}>


                          <button
                            type="button"
                            onClick={cadastrarCliente}
                            style={{
                              backgroundColor: "#1D68BE",
                              border: "none",
                              borderRadius: "5px",
                              color: "#FFFFFF",
                              fontSize: "12px",
                              fontWeight: "600",
                              cursor: "pointer",
                              padding: "8px 15px"
                            }}
                          >
                            Cadastrar
                          </button>

                        </div>

                      </div>
                    )}

                </div>

                <div style={s.campoTelefone}>
                  <label htmlFor="telefone" style={s.labelMenor}>
                    Telefone:
                  </label>

                  <input
                    id="telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    style={s.input}
                    value={telefone}
                    onChange={(e) =>
                      setTelefone(formatarTelefone(e.target.value))
                    }
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Descrição */}
          <div style={s.descricaoContainer}>
            <div style={s.descricaoBox}>

              <label htmlFor="descricao" style={s.descricaoCabecalho}>
                Descrição
              </label>

              <div style={s.descricaoCorpo}>
                <textarea
                  id="descricao"
                  style={s.textarea}
                  maxLength={512}
                  placeholder="Descreva o problema relatado pelo cliente"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />

                <button
                  type="submit"
                  style={s.botaoEnviar}
                >
                  Enviar
                </button>
              </div>

            </div>
          </div>

        </form>
      </main>
    </>
  );
}
