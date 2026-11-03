import { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';
import { criarTicketStyles } from './criarTicket.js';

import iconeTicket from '../assets/ticket.svg';

const DEPARTAMENTOS = [];
const CLIENTES = [];

export default function CriarTicket() {
  const inputArquivoRef = useRef(null);

  const [titulo, setTitulo] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [cliente, setCliente] = useState('');
  const [telefone, setTelefone] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [previa, setPrevia] = useState(null);
  const [mensagem, setMensagem] = useState(null);

  const s = criarTicketStyles;

  useEffect(() => {
    return () => {
      if (previa) {
        URL.revokeObjectURL(previa);
      }
    };
  }, [previa]);




  // Imagem
  function escolherImagem(e) {
    const arquivo = e.target.files?.[0];

    if (!arquivo) {
      return;
    }

    if (!arquivo.type.startsWith('image/')) {
      setMensagem({
        tipo: 'erro',
        texto: 'Selecione um arquivo de imagem válido.',
      });

      e.target.value = '';
      return;
    }

    if (arquivo.size > 5 * 1024 * 1024) {
      setMensagem({
        tipo: 'erro',
        texto: 'A imagem deve ter no máximo 5 MB.',
      });

      e.target.value = '';
      return;
    }

    setImagem(arquivo);
    setPrevia(URL.createObjectURL(arquivo));
    setMensagem(null);
  }



  // Barras
  function funcEnviar(e) {
    e.preventDefault();
    setMensagem(null);

    if (!titulo.trim()) {
      setMensagem({
        tipo: 'erro',
        texto: 'Digite o título do ticket.',
      });
      return;
    }

    if (!cliente.trim()) {
      setMensagem({
        tipo: 'erro',
        texto: 'Informe o nome do cliente.',
      });
      return;
    }

    if (numeroTelefone.length < 10) {
      setMensagem({
        tipo: 'erro',
        texto: 'Informe um telefone com DDD.',
      });
      return;
    }

    if (!descricao.trim()) {
      setMensagem({
        tipo: 'erro',
        texto: 'Descreva o problema relatado pelo cliente.',
      });
      return;
    }

    const dadosTicket = {
      titulo: titulo.trim(),
      departamento,
      cliente: cliente.trim(),
      telefone: numeroTelefone,
      descricao: descricao.trim(),
      imagem,
    };

    console.log('Dados do ticket:', dadosTicket);

    setMensagem({
      tipo: 'sucesso',
      texto:
        'Dados validados! Para cadastrar o ticket, conecte o formulário à API.',
    });
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
                alt="Prévia da foto do problema"
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
                name="titulo"
                type="text"
                placeholder="Digite o título do ticket"
                style={s.input}
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>

            <div style={s.campoContainer}>
              <label htmlFor="departamento" style={s.label}>
                Departamento:
              </label>

              <select
                id="departamento"
                name="departamento"
                style={s.input}
                value={departamento}
                onChange={(e) => setDepartamento(e.target.value)}
              >
                <option value="">
                  Selecione o departamento
                </option>

                {DEPARTAMENTOS.map((d) => (
                  <option
                    key={d.IdDepartamento}
                    value={d.IdDepartamento}
                  >
                    {d.Nome}
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
                  name="cliente"
                  type="text"
                  list="lista-clientes"
                  placeholder="Selecione ou digite o cliente"
                  style={s.input}
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  required
                />

                <datalist id="lista-clientes">
                  {CLIENTES.map((c) => (
                    <option
                      key={c.IdCliente}
                      value={c.Nome}
                    />
                  ))}
                </datalist>
              </div>

              <div style={s.campoTelefone}>
                <label htmlFor="telefone" style={s.label}>
                  Telefone:
                </label>

                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  style={s.input}
                  value={telefone}
                  onChange={(e) =>
                    setTelefone(formatarTelefone(e.target.value))
                  }
                  required
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
              name="descricao"
              style={s.textarea}
              maxLength={512}
              placeholder="Descreva o problema relatado pelo cliente"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />

            <button
              type="submit"
              style={s.botaoEnviar}
            >
              Enviar
            </button>
          </div>

          {mensagem && (
            <p
              role="status"
              style={{
                ...s.mensagem,
                color:
                  mensagem.tipo === 'erro'
                    ? '#B42318'
                    : '#1A7E52',
              }}
            >
              {mensagem.texto}
            </p>
          )}
        </div>
      </form>
    </main>
  );
}