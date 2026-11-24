const detalhesStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#F2F7FF',
    width: '100%',
    fontFamily: "'Noto Sans', 'Open Sans', sans-serif",
  },
  corpo: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    minWidth: 0,
    minHeight: 0,
    overflow: 'hidden',
    backgroundColor: '#F2F7FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 65,
  },
  conteudoInterno: {
    marginTop: 60,
    width: '150%',
    maxWidth: 1200,
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(8px, 2vh, 20px)',
  },

  // Banner
  banner: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    padding: 'clamp(8px, 1.5vh, 15px) 25px',
    borderRadius: 8,
    background: 'linear-gradient(90deg, #deebff 0%, #7DB8FF 100%)',
    color: '#1B3A6B',
    flexShrink: 0,
  },
  bannerIcon: {
    width: 44,
    height: 44,
    flexShrink: 0,
  },
  tituloBanner: {
    fontSize: 'clamp(20px, 4vw, 30px)',
    fontWeight: 800,
    margin: 0,
  },
  idBanner: {
    fontSize: 'clamp(16px, 3vw, 22px)',
    fontWeight: 800,
    margin: 0,
  },

  // Linha do meio: imagem + informações
  linhaMeio: {
    display: 'flex',
    gap: 20,
    flexShrink: 0,
  },
  imagem: {
    flex: 1,
    minWidth: 0,
    objectFit: 'cover',
    borderRadius: 4,
    border: '2px solid #24406E',
    backgroundColor: '#B8BEC7',
    boxSizing: 'border-box',
  },
  infoCaixa: {
    flex: 1,
    minWidth: 0,
    border: '2px solid #24406E',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },

  // Faixa azul-escura dos títulos
  faixaTitulo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#24406E',
    padding: '8px 12px',
  },
  faixaTexto: {
    fontSize: 20,
    fontWeight: 700,
    color: '#fff',
    margin: 0,
  },
  status: {
    backgroundColor: '#D9822B',
    color: '#fff',
    borderRadius: 10,
    padding: '2px 8px',
    fontSize: 13,
  },

  // Células de informação
  linhaCelulas: {
    display: 'flex',
    borderBottom: '1px solid #24406E',
  },
  celulaEsquerda: {
    flex: 1,
    padding: '8px 12px',
    borderRight: '1px solid #24406E',
  },
  celulaDireita: {
    flex: 1,
    padding: '8px 12px',
  },
  label: {
    fontSize: 15,
    fontWeight: 700,
    color: '#24406E',
    margin: 0,
  },
  valor: {
    fontSize: 13,
    color: '#24406E',
    margin: '4px 0 0 0',
    overflowWrap: 'anywhere',
  },

  // Descrição
  descricaoCaixa: {
    flex: 1,
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #24406E',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  descricaoCorpo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'clamp(160px, 25vh, 240px)',
    padding: 16,
    overflowY: 'auto',
  },
  descricaoTexto: {
    fontSize: 15,
    color: '#24406E',
    margin: 0,
    flex: 1,
    overflowWrap: 'anywhere',
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
  },
  botaoArea: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  botaoEditar: {
    width: 100,
    height: 30,
    backgroundColor: '#1D63C9',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    fontSize: 18,
    fontWeight: 600,
    cursor: 'pointer',
    marginBottom: 10,
  },
};

export default detalhesStyles;