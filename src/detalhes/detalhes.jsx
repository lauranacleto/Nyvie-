import detalhesStyles from './detalhesStyles';

import logo from '../../src/assets/logo.svg';
import iconCasa from '../../src/assets/casa.svg';
import iconCreate from '../../src/assets/create.svg';
import iconProfile from '../../src/assets/profile.svg';
import iconHistory from '../../src/assets/history.svg';
import iconExit from '../../src/assets/exit.svg';
import iconNotification from '../../src/assets/notification.svg';
import iconTicket from '../../src/assets/ticket.svg';

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
      {/* Essa parte é a footer  */}
      {/* <footer style={detalhesStyles.footer}>
        <img src={iconCasa} alt="Início" style={detalhesStyles.footerIcon} />
        <img src={iconCreate} alt="Criar" style={detalhesStyles.footerIcon} />
        <img src={iconProfile} alt="Perfil" style={detalhesStyles.footerIcon} />
        <img src={iconHistory} alt="Histórico" style={detalhesStyles.footerIcon} />

        <div style={detalhesStyles.footerSpacer} />

        <img src={iconExit} alt="Sair" style={detalhesStyles.footerIcon} />
      </footer> */}

      <div style={detalhesStyles.main}>
        {/* Essa parte é o header
        <header style={detalhesStyles.header}>
          <img src={logo} alt="Nyvie" style={detalhesStyles.logo} />

          <div style={detalhesStyles.headerMedida}>
            <img src={iconNotification} alt="Notificações" style={detalhesStyles.Sino} />
            <div style={detalhesStyles.perfil} />
          </div>
        </header>

        {/* Aqui ta bglh o conteúdo */}
        <main style={detalhesStyles.content}>
          <h2 style={detalhesStyles.pageTitulo}>Detalhes</h2>

          {/* Esse é o banner colorido */}
          <section style={detalhesStyles.banner}>
            <img src={iconTicket} alt="" style={detalhesStyles.bannerIcon} />
            <div>
              <h3 style={detalhesStyles.TituloBanner}>{ticket.titulo}</h3>
              <p style={detalhesStyles.IdBanner}>{ticket.id}</p>
            </div>
          </section>

          {/* aqui ta o card inteiro tudo */}
          <section style={detalhesStyles.card}>
            <div style={detalhesStyles.topRow}>
              {ticket.imagem ? (
                <img src={ticket.imagem} alt={ticket.titulo} style={detalhesStyles.image} />
              ) : (
                <div style={detalhesStyles.image} />
              )}

              <div style={detalhesStyles.descricaoBox}>
                <h4 style={detalhesStyles.descricaoTitulo}>Descrição</h4>
                <p style={detalhesStyles.descricaoTexto}>{ticket.descricao}</p>
              </div>
            </div>

            <div style={detalhesStyles.infoBox}>
              <h4 style={detalhesStyles.infoTitulo}>Informações do ticket</h4>
              <span style={detalhesStyles.adocao}>{ticket.status}</span>

              <div style={detalhesStyles.infoGrid}>
                <div>
                  <p style={detalhesStyles.label}>Responsavel:</p>
                  <p style={detalhesStyles.valor}>{ticket.responsavel}</p>
                </div>
                <div>
                  <p style={detalhesStyles.label}>Data de entrega:</p>
                  <p style={detalhesStyles.valor}>{ticket.dataEntrega}</p>
                </div>
                <div>
                  <p style={detalhesStyles.label}>Categoria:</p>
                  <p style={detalhesStyles.valor}>{ticket.categoria}</p>
                </div>
                <div>
                  <p style={detalhesStyles.label}>Data de Solicitacao:</p>
                  <p style={detalhesStyles.valor}>{ticket.dataSolicitacao}</p>
                </div>
              </div>
            </div>

            <div style={detalhesStyles.botaoRow}>
              <div style={detalhesStyles.clienteBox}>
                <h4 style={detalhesStyles.clienteTitulo}>Informações do Cliente</h4>

                <p style={detalhesStyles.clienteLabel}>Cliente:</p>
                <p style={detalhesStyles.clienteValor}>{ticket.cliente}</p>

                <p style={detalhesStyles.clienteLabel}>Telefone</p>
                <p style={{ ...detalhesStyles.clienteValor, margin: 0 }}>
                  {ticket.telefone}
                </p>
              </div>

              <button type="button" style={detalhesStyles.botaoVoltar}>
                ← Voltar
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}