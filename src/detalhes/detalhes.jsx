import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import detalhesStyles from './detalhesStyles';

import Header from '../components/header/header';
import Aside from '../components/aside/aside';

import api from '../../services/services';
import iconTicket from '../assets/ticket.svg';

// Transforma a data da API (2026-10-28T14:30:00) em 28/10/2026
function formatarData(valor) {
  if (!valor) return 'Não informado';

  const data = new Date(valor);

  if (isNaN(data)) return valor;

  return data.toLocaleDateString('pt-BR');
}

export default function Detalhes() {
  // pega o id que veio na URL: /detalhes/:id
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const getTicket = async () => {
      try {
        setCarregando(true);

        const response = await api.get(`/Ticket/${id}`);
        setTicket(response.data);
      } catch (error) {
        console.error('Erro ao buscar ticket:', error);
        setTicket(null);
      } finally {
        setCarregando(false);
      }
    };

    getTicket();
  }, [id]);

  return (
    <div style={detalhesStyles.container}>
      <Header />

      <div style={detalhesStyles.corpo}>
        <Aside />

        <main style={detalhesStyles.content}>
          <div style={detalhesStyles.conteudoInterno}>
            {carregando ? (
              <p style={detalhesStyles.mensagem}>Carregando ticket...</p>
            ) : !ticket ? (
              <p style={detalhesStyles.mensagem}>Não foi possível carregar o ticket.</p>
            ) : (
              <>
                {/* Banner colorido */}
                <section style={detalhesStyles.banner}>
                  <img src={iconTicket} alt="" style={detalhesStyles.bannerIcon} />
                  <div>
                    <h3 style={detalhesStyles.tituloBanner}>{ticket.nome || 'Sem título'}</h3>
                    <p style={detalhesStyles.idBanner}>
                      #{String(ticket.idTicket).slice(0, 8).toUpperCase()}
                    </p>
                  </div>
                </section>

                {/* Imagem + informações */}
                <div style={detalhesStyles.linhaMeio}>
                  {ticket.imagem ? (
                    <img src={ticket.imagem} alt={ticket.nome} style={detalhesStyles.imagem} />
                  ) : (
                    <div style={detalhesStyles.imagem}></div>
                  )}

                  <div style={detalhesStyles.infoCaixa}>
                    <div style={detalhesStyles.faixaTitulo}>
                      <h4 style={detalhesStyles.faixaTexto}>Info. Cliente</h4>
                      {ticket.idStatusTicketNavigation?.nome && (
                        <span style={detalhesStyles.status}>
                          {ticket.idStatusTicketNavigation.nome}
                        </span>
                      )}
                    </div>

                    <div style={detalhesStyles.linhaCelulas}>
                      <div style={detalhesStyles.celulaEsquerda}>
                        <p style={detalhesStyles.label}>Cliente:</p>
                        <p style={detalhesStyles.valor}>
                          {ticket.idClienteNavigation?.nome || 'Não informado'}
                        </p>
                      </div>
                      <div style={detalhesStyles.celulaDireita}>
                        <p style={detalhesStyles.label}>Telefone:</p>
                        <p style={detalhesStyles.valor}>
                          {ticket.idClienteNavigation?.telefone || 'Não informado'}
                        </p>
                      </div>
                    </div>

                    <div style={detalhesStyles.faixaTitulo}>
                      <h4 style={detalhesStyles.faixaTexto}>Info. ticket</h4>
                    </div>

                    <div style={detalhesStyles.linhaCelulas}>
                      <div style={detalhesStyles.celulaEsquerda}>
                        <p style={detalhesStyles.label}>Responsavel:</p>
                        <p style={detalhesStyles.valor}>
                          {ticket.idUsuarioNavigation?.nome || 'Não informado'}
                        </p>
                      </div>
                      <div style={detalhesStyles.celulaDireita}>
                        <p style={detalhesStyles.label}>Categoria:</p>
                        <p style={detalhesStyles.valor}>
                          {ticket.idDepartamentoNavigation?.nome || 'Não informado'}
                        </p>
                      </div>
                    </div>

                    <div style={detalhesStyles.linhaCelulas}>
                      <div style={detalhesStyles.celulaEsquerda}>
                        <p style={detalhesStyles.label}>Data de entrega:</p>
                        <p style={detalhesStyles.valor}>
                          {ticket.dataEntrega
                            ? formatarData(ticket.dataEntrega)
                            : ticket.sla || 'Não informado'}
                        </p>
                      </div>
                      <div style={detalhesStyles.celulaDireita}>
                        <p style={detalhesStyles.label}>Data Solicitação:</p>
                        <p style={detalhesStyles.valor}>{formatarData(ticket.dataHora)}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Descrição */}
                <section style={detalhesStyles.descricaoCaixa}>
                  <div style={detalhesStyles.faixaTitulo}>
                    <h4 style={detalhesStyles.faixaTexto}>Descrição</h4>
                  </div>

                  <div style={detalhesStyles.descricaoCorpo}>
                    <p style={detalhesStyles.descricaoTexto}>{ticket.descricao}</p>

                    <div style={detalhesStyles.botaoArea}>
                      <button type="button" style={detalhesStyles.botaoEditar}>
                        Editar
                      </button>
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}