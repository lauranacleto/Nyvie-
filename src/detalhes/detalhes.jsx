import detalhesStyles from './detalhesStyles';

import Header from '../components/header/header';
import Aside from '../components/aside/aside';

import iconTicket from '../assets/ticket.svg';

export default function Detalhes() {
  const ticket = {
    id: '#00123',
    titulo: 'Ar-Condicionado',
    descricao:
      'Ar-condicionado apresenta falha na refrigeração. Cliente relata que o aparelho não está gelando como deveria.',
    responsavel: 'Lorenzo Mangile',
    dataEntrega: '30/10/2025',
    categoria: 'Suporte Tecnico',
    dataSolicitacao: '28/10/2026',
    status: 'Em adoção',
    cliente: 'Gabriel Figueira',
    telefone: '(XX) 99999-9999',
    imagem: '',
  };

  return (
    <div style={detalhesStyles.container}>
      <Header />

      <div style={detalhesStyles.corpo}>
      <Aside />

        <main style={detalhesStyles.content}>
          <div style={detalhesStyles.conteudoInterno}>
            {/* Banner colorido */}
            <section style={detalhesStyles.banner}>
              <img src={iconTicket} alt="" style={detalhesStyles.bannerIcon} />
              <div>
                <h3 style={detalhesStyles.tituloBanner}>{ticket.titulo}</h3>
                <p style={detalhesStyles.idBanner}>{ticket.id}</p>
              </div>
            </section>

            {/* Imagem + informações */}
            <div style={detalhesStyles.linhaMeio}>
              {ticket.imagem ? (
                <img src={ticket.imagem} alt={ticket.titulo} style={detalhesStyles.imagem} />
              ) : (
                <div style={detalhesStyles.imagem}></div>
              )}

              <div style={detalhesStyles.infoCaixa}>
                <div style={detalhesStyles.faixaTitulo}>
                  <h4 style={detalhesStyles.faixaTexto}>Info. Cliente</h4>
                  <span style={detalhesStyles.status}>{ticket.status}</span>
                </div>

                <div style={detalhesStyles.linhaCelulas}>
                  <div style={detalhesStyles.celulaEsquerda}>
                    <p style={detalhesStyles.label}>Cliente:</p>
                    <p style={detalhesStyles.valor}>{ticket.cliente}</p>
                  </div>
                  <div style={detalhesStyles.celulaDireita}>
                    <p style={detalhesStyles.label}>Telefone:</p>
                    <p style={detalhesStyles.valor}>{ticket.telefone}</p>
                  </div>
                </div>

                <div style={detalhesStyles.faixaTitulo}>
                  <h4 style={detalhesStyles.faixaTexto}>Info. ticket</h4>
                </div>

                <div style={detalhesStyles.linhaCelulas}>
                  <div style={detalhesStyles.celulaEsquerda}>
                    <p style={detalhesStyles.label}>Responsavel:</p>
                    <p style={detalhesStyles.valor}>{ticket.responsavel}</p>
                  </div>
                  <div style={detalhesStyles.celulaDireita}>
                    <p style={detalhesStyles.label}>Categoria:</p>
                    <p style={detalhesStyles.valor}>{ticket.categoria}</p>
                  </div>
                </div>

                <div style={detalhesStyles.linhaCelulas}>
                  <div style={detalhesStyles.celulaEsquerda}>
                    <p style={detalhesStyles.label}>Data de entrega:</p>
                    <p style={detalhesStyles.valor}>{ticket.dataEntrega}</p>
                  </div>
                  <div style={detalhesStyles.celulaDireita}>
                    <p style={detalhesStyles.label}>Data Solicitação:</p>
                    <p style={detalhesStyles.valor}>{ticket.dataSolicitacao}</p>
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
          </div>
        </main>
      </div>
    </div>
  );
}