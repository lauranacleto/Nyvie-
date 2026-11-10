
import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";
import { criarTicketStyles } from "./criarTicket.js";
import iconeTicket from "../assets/ticket.svg";
import api from "../../services/services";


async function buscarDepartamentos() {
  try {
    const response = await api.get("/departamentos");
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar departamentos:", error);
    return [];
  }
}




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

// Converter imagem para Base64
function converterImagem(arquivo) {
  return new Promise((resolve, reject) => {
    if (!arquivo) {
      resolve(null);
      return;
    }

    const leitor = new FileReader();

    leitor.onload = () => resolve(leitor.result);
    leitor.onerror = () => reject(new Error("Erro ao ler a imagem."));

    leitor.readAsDataURL(arquivo);
  });
}

export default function CriarTicket() {
  const inputArquivoRef = useRef(null);

  const [titulo, setTitulo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [cliente, setCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);
  const [previa, setPrevia] = useState(null);
  const [departamentos, setDepartamentos] = useState([]);

  const s = criarTicketStyles;

  useEffect(() => {
    buscarDepartamentos().then((dados) => {
      setDepartamentos(dados);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (previa) {
        URL.revokeObjectURL(previa);
      }
    };
  }, [previa]);

  // Escolher imagem
  function escolherImagem(e) {
    const arquivo = e.target.files?.[0];

    if (!arquivo) return;

    if (!arquivo.type.startsWith("image/")) {
      alert("Selecione um arquivo de imagem válido.");
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

    if (numeroTelefone.length < 10) {
      alert("Informe um telefone válido com DDD.");
      return;
    }

    if (!descricao.trim()) {
      alert("Descreva o problema relatado pelo cliente.");
      return;
    }

    try {
      const imagemBase64 = await converterImagem(imagem);

      const dadosTicket = {
        titulo: titulo.trim(),
        departamento,
        cliente: cliente.trim(),
        telefone: numeroTelefone,
        descricao: descricao.trim(),
        imagem: imagemBase64,
        status: "Aberto",
        dataCriacao: new Date()
      };

      const response = await api.post("/tickets", dadosTicket);

      console.log("Ticket cadastrado:", response.data);

      alert("Ticket cadastrado com sucesso!");

      // Limpar formulário
      setTitulo("");
      setDepartamento("");
      setCliente("");
      setTelefone("");
      setDescricao("");
      setImagem(null);
      setPrevia(null);

    } catch (error) {
      console.error("Erro ao cadastrar ticket:", error);
      alert("Não foi possível cadastrar o ticket.");
    }
  }

  return (
    <main style={s.container}>
      <div style={s.banner}>
        <img
          src={iconeTicket}
          alt=""
          style={s.bannerIcone}
        />

        <h1 style={s.bannerTitulo}>Criar Ticket</h1>
      </div>

      <form style={s.card} onSubmit={funcEnviar}>
        <div style={s.topo}>

          {/* Foto do problema */}
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
              aria-label="Adicionar foto"
              onClick={() => inputArquivoRef.current?.click()}
            >
              <Camera
                size={18}
                color="#FFFFFF"
                strokeWidth={2}
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

          {/* Campos do ticket */}
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
                <option value="">Selecione o departamento</option>

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

        {/* Descrição */}
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
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </main >
  );
}
