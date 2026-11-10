
import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";

import { editarTicketStyles } from "./editarTicket.js";
import iconeTicket from "../assets/ticket.svg";
import api from "../../services/services";

import Header from "../components/header/header.jsx";
import Aside from "../components/aside/aside.jsx";

async function buscarDepartamentos() {
  try {
    const response = await api.get("/departamentos");
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar departamentos:", error);
    return [];
  }
}

// telefone
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

// comprimir imagem 
function converterImagem(arquivo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();

    leitor.onload = () => {
      const foto = new Image();

      foto.onload = () => {
        const canvas = document.createElement("canvas");

        let largura = foto.width;
        let altura = foto.height;

        // limitar o tamanho da imagem
        if (largura > 600 || altura > 600) {
          const proporcao = Math.min(600 / largura, 600 / altura);

          largura = Math.round(largura * proporcao);
          altura = Math.round(altura * proporcao);
        }

        canvas.width = largura;
        canvas.height = altura;

        const contexto = canvas.getContext("2d");

        contexto.drawImage(foto, 0, 0, largura, altura);

        let qualidade = 0.7;

        let imagemBase64 = canvas.toDataURL("image/jpeg", qualidade);

        while (imagemBase64.length > 75000 && qualidade > 0.2) {
          qualidade -= 0.1;
          imagemBase64 = canvas.toDataURL("image/jpeg", qualidade);
        }

        while (imagemBase64.length > 75000) {
          largura = Math.round(largura * 0.8);
          altura = Math.round(altura * 0.8);

          canvas.width = largura;
          canvas.height = altura;

          contexto.drawImage(foto, 0, 0, largura, altura);

          imagemBase64 = canvas.toDataURL("image/jpeg", 0.5);
        }

        resolve(imagemBase64);
      };

      foto.onerror = () => reject(new Error("Erro ao carregar imagem."));

      foto.src = leitor.result;
    };

    leitor.onerror = () => reject(new Error("Erro ao ler imagem."));

    leitor.readAsDataURL(arquivo);
  });
}

export default function EditarTicket() {
  const { id } = useParams();
  const navigate = useNavigate();

  const inputArquivoRef = useRef(null);

  const [titulo, setTitulo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [cliente, setCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);
  const [previa, setPrevia] = useState(null);

  const [departamentos, setDepartamentos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  const s = editarTicketStyles;

  // carregar ticket e departamentos
  useEffect(() => {
    async function carregarDados() {
      try {
        const response = await api.get(`/tickets/${id}`);

        const dados = response.data;

        setTitulo(dados.titulo || "");
        setDepartamento(dados.departamento || "");
        setCliente(dados.cliente || "");
        setTelefone(formatarTelefone(dados.telefone || ""));
        setDescricao(dados.descricao || "");
        setPrevia(dados.imagem || null);

        const respostaDepartamentos = await buscarDepartamentos();

        setDepartamentos(respostaDepartamentos);

      } catch (error) {
        console.error("Erro ao carregar ticket:", error);
        alert("Não foi possível carregar o ticket.");
      } finally {
        setCarregando(false);
      }
    }

    carregarDados();
  }, [id]);

  // URL da imagem
  useEffect(() => {
    return () => {
      if (previa && previa.startsWith("blob:")) {
        URL.revokeObjectURL(previa);
      }
    };
  }, [previa]);

  // Selecionar imagem
  function escolherImagem(e) {
    const arquivo = e.target.files?.[0];

    if (!arquivo) return;

    if (!arquivo.type.startsWith("image/")) {
      alert("Selecione uma imagem válida.");
      e.target.value = "";
      return;
    }

    if (arquivo.size > 5 * 1024 * 1024) {
      alert("A imagem deve ter no máximo 5 MB.");
      e.target.value = "";
      return;
    }

    setImagem(arquivo);
    setPrevia(URL.createObjectURL(arquivo));
  }

  // Salvar alterações
  async function funcSalvar(e) {
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

    if (numeroTelefone.length < 10) {
      alert("Informe um telefone válido.");
      return;
    }

    if (!descricao.trim()) {
      alert("Descreva o problema.");
      return;
    }

    try {
      setSalvando(true);

      const dadosTicket = {
        titulo: titulo.trim(),
        departamento,
        cliente: cliente.trim(),
        telefone: numeroTelefone,
        descricao: descricao.trim(),
      };

      if (imagem) {
        dadosTicket.imagem = await converterImagem(imagem);
      }

      const response = await api.patch(`/tickets/${id}`, dadosTicket);

      console.log("Ticket atualizado:", response.data);

      alert("Ticket atualizado com sucesso!");

      navigate(-1);

    } catch (error) {
      console.error("Erro ao atualizar ticket:", error);
      alert("Não foi possível atualizar o ticket.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <>
      <Header />
      <Aside />

      <main style={s.container}>

        {carregando ? (
          <h2 style={s.bannerTitulo}>Carregando ticket...</h2>
        ) : (

          <>
            {/* banner */}
            <div style={s.banner}>
              <img
                src={iconeTicket}
                alt=""
                style={s.bannerIcone}
              />

              <h1 style={s.bannerTitulo}>
                Editar Ticket
              </h1>
            </div>

            <form style={s.card} onSubmit={funcSalvar}>

              <div style={s.topo}>

                {/* imagem */}
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
                    aria-label="Alterar foto"
                  >
                    <Camera
                      size={20}
                      color="#FFFFFF"
                    />
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

                {/* campos */}
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

                      {departamentos.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.nome}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={s.linhaCampos}>

                    <div style={s.campoCliente}>
                      <label htmlFor="cliente" style={s.label}>
                        Cliente:
                      </label>

                      <input
                        id="cliente"
                        type="text"
                        placeholder="Digite o nome do cliente"
                        style={s.input}
                        value={cliente}
                        onChange={(e) => setCliente(e.target.value)}
                      />
                    </div>

                    <div style={s.campoTelefone}>
                      <label htmlFor="telefone" style={s.label}>
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

              {/* descrição */}
              <div style={s.descricaoContainer}>
                <label htmlFor="descricao" style={s.label}>
                  Descrição
                </label>

                <div style={s.descricaoBox}>
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
                    disabled={salvando}
                  >
                    {salvando ? "Salvando..." : "Salvar alterações"}
                  </button>
                </div>
              </div>

            </form>
          </>
        )}

      </main>
    </>
  );
}
