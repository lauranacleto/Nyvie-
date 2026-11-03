const detalhesStyles = {
  container: {
    display: 'flex',
    minHeight: '99vh',
    width: '100%',
    backgroundColor: '#0A1A3A',
    fontFamily: "'Noto Sans', 'Open Sans', sans-serif",
  },

  // A footer
  footer: {
    width: 60,
    backgroundColor: '#0A1A3A',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 30,
    gap: 28,
  },
  footerIcon: {
    width: 22,
    height: 22,
  },
  footerSpacer: {
    flex: 1,
  },

  // Tela
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  // header
  header: {
    height: 55,
    backgroundColor: '#0A1A3A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    color: '#fff',
  },
  logo: {
    height: 80,
  },
  headerMedida: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  Sino: {
    width: 22,
    height: 22,
  },
  perfil: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: '#5C7AA8',
  },

  // Conteúdo
  content: {
    flex: 1,
    backgroundColor: '#F2F7FF',
    padding: '20px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  pageTitulo: {
    fontSize: 22,
    fontWeight: 700,
    color: '#24406E',
    margin: '0 0 0 10px',
  },

  // Banner do ticket
  banner: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    padding: '13px 20px',
    borderRadius: 8,
    background: 'linear-gradient(90deg, #BFD9FF 0%, #7DB8FF 100%)',
    color: '#1B3A6B',
  },
  bannerIcon: {
    width: 40,
    height: 40,
  },
  TituloBanner: {
    fontSize: 28,
    fontWeight: 800,
    margin: 0,
  },
  IdBanner: {
    fontSize: 22,
    fontWeight: 800,
    margin: 0,
  },

  // Card td
  card: {
    backgroundColor: '#F5F9FF',
    border: '1px solid #D6E2F2',
    borderRadius: 8,
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  topRow: {
    display: 'flex',
    gap: 12,
  },
  image: {
    width: 178,
    height: 145,
    objectFit: 'cover',
    borderRadius: 8,
    backgroundColor: '#B8BEC7',
  },
  descricaoBox: {
    flex: 1,
    border: '1px solid #D6E2F2',
    borderRadius: 8,
    padding: '10px 12px',
    backgroundColor: '#F5F9FF',
  },
  descricaoTitulo: {
    fontSize: 25,
    fontWeight: 700,
    color: '#24406E',
    margin: 0,
  },
  descricaoTexto: {
    fontSize: 15,
    color: '#24406E',
    margin: '4px 0 0 0',
    maxWidth: 360,
  },

  // Informações do ticket
  infoBox: {
    position: 'relative',
    border: '2px solid #D6E2F2',
    borderRadius: 8,
    padding: '10px 12px',
  },
  infoTitulo: {
    fontSize: 22,
    fontWeight: 500,
    color: '#24406E',
    margin: 0,
  },
  adocao: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFE9B8',
    border: '1px solid #E6B94D',
    borderRadius: 20,
    padding: '1px 8px',
    fontSize: 14,
    color: '#7A5A10',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: '185px 1fr',
    rowGap: 14,
    marginTop: 8,
  },
  label: {
    fontSize: 17,
    fontWeight: 700,
    color: '#24406E',
    margin: 0,
  },
  valor: {
    fontSize: 15,
    color: '#24406E',
    margin: 0,
  },

  // Cliente mais o botão de sair
  botaoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  clienteBox: {
    width: 260,
    border: '2px solid #D6E2F2',
    borderRadius: 8,
    padding: '10px 12px',
  },
  clienteTitulo: {
    fontSize: 20,
    fontWeight: 500,
    color: '#24406E',
    margin: '0 0 14px 0',
  },
  clienteLabel: {
    fontSize: 18,
    fontWeight: 700,
    color: '#24406E',
    margin: 0,
  },
  clienteValor: {
    fontSize: 15,
    color: '#24406E',
    margin: '0 0 18px 0',
  },
  botaoVoltar: {
    width: 130,
    height: 30,
    backgroundColor: '#1D63C9',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default detalhesStyles;