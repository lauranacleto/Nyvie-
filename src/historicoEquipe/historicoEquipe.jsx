import { useState } from 'react';

import historicoStyles from '../historicoEquipe/historicoEquipe';

import Header from '../components/header/header';
import Aside from '../components/aside/aside';

import perfilAzul from '../assets/perfil azul.svg';

const funcionarios = [
  { id: 1, nome: 'Lorenzo Mangile', email: 'mangile@gmail.com' },
  { id: 2, nome: 'Lucas Souza Marinho', email: 'lucas@gmail.com' },
  { id: 3, nome: 'Laura Kauany', email: 'laura@gmail.com' },
  { id: 4, nome: 'Walyson Menezes', email: 'walyson@gmail.com' },
  { id: 5, nome: 'Matheus Felix', email: 'matheus@gmail.com' },
  { id: 6, nome: 'Gabriel Figueira', email: 'gabriel@gmail.com' },
];

// tipo pode ser: atribuido, concluido, atualizado ou prazo
const historico = [
  {
    id: 1,
  funcionarioId: 3,
  tipo: 'atribuido',
  titulo: 'Laura Kauany atribuiu o ticket #00128 para você',
  detalhe: 'Agora você é responsável por este atendimento.',
  data: 'Atribuído em: 28/10/2026',
  },
  {
    id: 2,
    funcionarioId: 1,
    tipo: 'concluido',
    titulo: 'Lorenzo Mangile concluiu o ticket #00117',
    detalhe: 'O ticket #00117 foi concluído e finalizado com sucesso.',
    data: 'Concluído em: 28/10/2026',
  },
  {
    id: 3,
    funcionarioId: 3,
    tipo: 'atualizado',
    titulo: 'Laura Kauany atualizou o ticket #00129 para Em Andamento',
    detalhe: 'O ticket #00129 foi atualizado para o status "Em Andamento".',
    data: 'Alterado: 28/10/2026',
  },
  {
    id: 4,
    funcionarioId: 1,
    tipo: 'atualizado',
    titulo: 'Você atualizou o ticket #00127 para Em Andamento',
    detalhe: 'O ticket #00127 foi atualizado para o status "Em Andamento".',
    data: 'Alterado: 28/10/2026',
  },
  {
    id: 5,
    funcionarioId: 2,
    tipo: 'prazo',
    titulo: 'O prazo do ticket #00118 está próximo ao vencimento.',
    detalhe: 'Faltam 3 horas para o vencimento.',
    data: 'Vence em: 28/10/2026',
  },
  {
    id: 6,
    funcionarioId: 4,
    tipo: 'atribuido',
    titulo: 'Walyson Menezes atribuiu o ticket #00127 para você',
    detalhe: 'Agora você é responsável por este atendimento.',
    data: 'Atribuído em: 18/10/2026',
  },
  {
    id: 7,
    funcionarioId: 5,
    tipo: 'concluido',
    titulo: 'Matheus Felix concluiu o ticket #00128',
    detalhe: 'O ticket #00128 foi concluído e finalizado com sucesso.',
    data: 'Concluído em: 18/10/2026',
  },
  {
    id: 8,
    funcionarioId: 6,
    tipo: 'prazo',
    titulo: 'O prazo do ticket #00115 está próximo ao vencimento.',
    detalhe: 'Faltam 3 horas para o vencimento.',
    data: 'Vence em: 18/10/2026',
  },
];

export default function Historico() {
  // guarda quem está selecionado: 'todos' ou o id do funcionário
  const [selecionado, setSelecionado] = useState('todos');

  // procura o funcionário selecionado (em "todos" fica undefined)
  const funcionarioAtual = funcionarios.find((f) => f.id === selecionado);

  // se for "todos" mostra tudo, senão mostra só os do funcionário
  let eventos = historico;
  if (selecionado !== 'todos') {
    eventos = historico.filter((e) => e.funcionarioId === selecionado);
  }

 return (
    <div style={historicoStyles.container}>
      <Header />

      <div style={historicoStyles.corpo}>
        <Aside />

        <main style={historicoStyles.content}>
          <h2 style={historicoStyles.pageTitle}>← Histórico da equipe</h2>

          <div style={historicoStyles.painel}>
            {/* Lado esquerdo: lista de funcionários */}
            <section style={historicoStyles.colunaEsquerda}>
              <div
                style={selecionado === 'todos' ? historicoStyles.cardSelecionado : historicoStyles.card}
                onClick={() => setSelecionado('todos')}
              >
                <img src={perfilAzul} alt="Todos" style={historicoStyles.foto} />
                <p style={historicoStyles.nomeTodos}>Todos</p>
              </div>

              {funcionarios.map((func) => (
                <div
                  key={func.id}
                  style={selecionado === func.id ? historicoStyles.cardSelecionado : historicoStyles.card}
                  onClick={() => setSelecionado(func.id)}
                >
                  <div style={historicoStyles.foto}></div>
                  <div>
                    <p style={historicoStyles.nome}>{func.nome}</p>
                    <p style={historicoStyles.cargo}>Atendente</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Lado direito: histórico */}
            <section style={historicoStyles.colunaDireita}>
              <div style={historicoStyles.topoDireita}>
                <div>
                  {funcionarioAtual ? (
                    <div>
                      <p style={historicoStyles.nome}>{funcionarioAtual.nome}</p>
                      <p style={historicoStyles.cargo}>{funcionarioAtual.email}</p>
                    </div>
                  ) : (
                    <div>
                      <p style={historicoStyles.nome}>Todos</p>
                      <p style={historicoStyles.cargo}>Histórico de toda a equipe</p>
                    </div>
                  )}
                </div>

                <div style={historicoStyles.botoes}>
                  <button style={historicoStyles.botao}>Filtrar</button>
                  <button style={historicoStyles.botao}>Data</button>
                </div>
              </div>

              <div style={historicoStyles.lista}>
                {eventos.length === 0 && (
                  <p style={historicoStyles.vazio}>Nenhuma atividade encontrada.</p>
                )}

                {eventos.map((evento) => (
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
                      <p style={historicoStyles.eventoTitulo}>{evento.titulo}</p>
                      <p style={historicoStyles.eventoDetalhe}>{evento.detalhe}</p>
                    </div>
                    <span style={historicoStyles.eventoData}>{evento.data}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}