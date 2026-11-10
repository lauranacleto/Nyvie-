
import { useState, useEffect } from 'react';

import historicoStyles from '../historicoEquipe/historicoEquipe';

import Header from '../components/header/header';
import Aside from '../components/aside/aside';

import perfilAzul from '../assets/perfil azul.svg';

import api from '../../services/services';

export default function Historico() {

  // Estados
  const [selecionado, setSelecionado] = useState('todos');

  const [funcionarios, setFuncionarios] = useState([]);
  const [historico, setHistorico] = useState([]);

  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  // Buscar funcionários
  async function buscarFuncionarios() {
    try {
      const response = await api.get('/funcionarios');
      setFuncionarios(response.data);
    } catch (error) {
      console.error('Erro ao buscar funcionários:', error);
      setErro('Não foi possível carregar os funcionários.');
    }
  }

  // Buscar histórico
  async function buscarHistorico() {
    try {
      const response = await api.get('/historico');
      setHistorico(response.data);
    } catch (error) {
      console.error('Erro ao buscar histórico:', error);
      setErro('Não foi possível carregar o histórico.');
    }
  }

  // Carregar dados ao abrir a tela
  useEffect(() => {
    async function carregarDados() {
      setCarregando(true);
      setErro('');

      try {
        const [responseFuncionarios, responseHistorico] =
          await Promise.all([
            api.get('/funcionarios'),
            api.get('/historico')
          ]);

        setFuncionarios(responseFuncionarios.data);
        setHistorico(responseHistorico.data);

      } catch (error) {
        console.error('Erro ao carregar dados:', error);
        setErro('Erro ao carregar os dados do histórico.');
      } finally {
        setCarregando(false);
      }
    }

    carregarDados();
  }, []);

  // Encontrar funcionário selecionado
  const funcionarioAtual = funcionarios.find(
    (func) => String(func.id) === String(selecionado)
  );

  // Filtrar eventos
  const eventos = selecionado === 'todos'
    ? historico
    : historico.filter(
        (evento) =>
          String(evento.funcionarioId) === String(selecionado)
      );

  return (
    <div style={historicoStyles.container}>

      <Header />

      <div style={historicoStyles.corpo}>

        <Aside />

        <main style={historicoStyles.content}>

          <h2 style={historicoStyles.pageTitle}>
            ← Histórico da equipe
          </h2>

          <div style={historicoStyles.painel}>

            {/* Lista de funcionários */}
            <section style={historicoStyles.colunaEsquerda}>

              <div
                style={
                  selecionado === 'todos'
                    ? historicoStyles.cardSelecionado
                    : historicoStyles.card
                }
                onClick={() => setSelecionado('todos')}
              >
                <img
                  src={perfilAzul}
                  alt="Todos"
                  style={historicoStyles.foto}
                />

                <p style={historicoStyles.nomeTodos}>
                  Todos
                </p>
              </div>

              {funcionarios.map((func) => (

                <div
                  key={func.id}
                  style={
                    String(selecionado) === String(func.id)
                      ? historicoStyles.cardSelecionado
                      : historicoStyles.card
                  }
                  onClick={() => setSelecionado(func.id)}
                >

                  <div style={historicoStyles.foto}></div>

                  <div>
                    <p style={historicoStyles.nome}>
                      {func.nome}
                    </p>

                    <p style={historicoStyles.cargo}>
                      {func.cargo}
                    </p>
                  </div>

                </div>

              ))}

            </section>

            {/* Histórico do funcionário */}
            <section style={historicoStyles.colunaDireita}>

              <div style={historicoStyles.topoDireita}>

                <div>

                  {funcionarioAtual ? (

                    <div>
                      <p style={historicoStyles.nome}>
                        {funcionarioAtual.nome}
                      </p>

                      <p style={historicoStyles.cargo}>
                        {funcionarioAtual.email}
                      </p>
                    </div>

                  ) : (

                    <div>
                      <p style={historicoStyles.nome}>
                        Todos
                      </p>

                      <p style={historicoStyles.cargo}>
                        Histórico de toda a equipe
                      </p>
                    </div>

                  )}

                </div>

                <div style={historicoStyles.botoes}>

                  <button style={historicoStyles.botao}>
                    Filtrar
                  </button>

                  <button style={historicoStyles.botao}>
                    Data
                  </button>

                </div>

              </div>

              {/* Lista de atividades */}
              <div style={historicoStyles.lista}>

                {carregando ? (

                  <p style={historicoStyles.vazio}>
                    Carregando histórico...
                  </p>

                ) : erro ? (

                  <p style={historicoStyles.vazio}>
                    {erro}
                  </p>

                ) : eventos.length === 0 ? (

                  <p style={historicoStyles.vazio}>
                    Nenhuma atividade encontrada.
                  </p>

                ) : (

                  eventos.map((evento) => (

                    <div
                      key={evento.id}
                      style={
                        evento.tipo === 'atribuido'
                          ? historicoStyles.eventoAtribuido
                          : evento.tipo === 'concluido'
                          ? historicoStyles.eventoConcluido
                          : evento.tipo === 'atualizado'
                          ? historicoStyles.eventoAtualizado
                          : historicoStyles.eventoPrazo
                      }
                    >

                      <div>
                        <p style={historicoStyles.eventoTitulo}>
                          {evento.titulo}
                        </p>

                        <p style={historicoStyles.eventoDetalhe}>
                          {evento.detalhe}
                        </p>
                      </div>

                      <span style={historicoStyles.eventoData}>
                        {evento.data}
                      </span>

                    </div>

                  ))

                )}

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}
