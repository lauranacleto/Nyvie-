const historicoStyles = {

  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#0A1A3A',
    fontFamily: "'Segoe UI', 'Noto Sans', Roboto, sans-serif",
    marginLeft: 0,
    overflowX: 'hidden',
  },

  corpo: {
    flex: 1,
    display: 'flex',
    minWidth: 0,
  },

  content: {
    flex: 1,
    minWidth: 0,
    marginLeft: 65,
    marginTop: 64,
    width: 'calc(100% - 65px)',
    boxSizing: 'border-box',
    overflowY: 'auto',
    backgroundColor: '#F4F8FC',
    padding: '24px 28px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  pageTitle: {
    width: '80%',
    fontSize: 'clamp(20px, 4vw, 28px)',
    color: '#1B4A9C',
    margin: '0 0 15px 0',
  },

  painel: {
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    alignItems: 'flex-start',
  },

  colunaEsquerda: {
    width: 270,
    maxWidth: '100%',
    backgroundColor: '#FFFFFF',
    border: '1px solid #D6E2F2',
    borderRadius: 10,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(15, 30, 54, 0.04)',
    boxSizing: 'border-box',
  },

  card: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#FFFFFF',
    border: 'none',
    borderBottom: '1px solid #E2E8F0',
    borderRadius: 0,
    padding: '14px 18px',
    cursor: 'pointer',
  },

  cardSelecionado: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#FFFFFF',
    border: 'none',
    borderBottom: '1px solid #E2E8F0',
    borderRadius: 0,
    padding: '14px 18px',
    cursor: 'pointer',
  },

  foto: {
    width: 48,
    height: 48,
    flexShrink: 0,
    borderRadius: '50%',
    backgroundColor: '#DCE7F5',
    objectFit: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nomeTodos: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F1E36',
    margin: 0,
  },

  nome: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F1E36',
    margin: '0 0 2px 0',
  },

  cargo: {
    fontSize: 12,
    color: '#334155',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },

  colunaDireita: {
    flex: '1 1 400px',
    minWidth: 0,
    backgroundColor: '#FFFFFF',
    border: '1px solid #D6E2F2',
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(15, 30, 54, 0.04)',
  },

  topoDireita: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 22px',
    backgroundColor: '#FFFFFF',
    borderBottom: '1.5px solid #222222',
  },

  botoes: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },

  botao: {
    backgroundColor: '#184394',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: 20,
    padding: '7px 18px',
    fontSize: 13,
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(24, 67, 148, 0.25)',
  },

  lista: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
    padding: 0,
    backgroundColor: '#FFFFFF',
  },

  eventoAtribuido: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 0,
    padding: '16px 22px',
    border: 'none',
    borderBottom: '1px solid #CBD5E1',
    backgroundColor: '#FFFFFF',
  },

  eventoConcluido: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 0,
    padding: '16px 22px',
    border: 'none',
    borderBottom: '1px solid #CBD5E1',
    backgroundColor: '#FFFFFF',
  },

  eventoAtualizado: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 0,
    padding: '16px 22px',
    border: 'none',
    borderBottom: '1px solid #CBD5E1',
    backgroundColor: '#FFFFFF',
  },

  eventoPrazo: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 0,
    padding: '16px 22px',
    border: 'none',
    borderBottom: '1px solid #CBD5E1',
    backgroundColor: '#FFFFFF',
  },

  eventoTitulo: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0F1E36',
    margin: '0 0 2px 0',
  },

  eventoDetalhe: {
    fontSize: 13,
    color: '#334155',
    margin: 0,
  },

  eventoData: {
    fontSize: 11,
    color: '#475569',
    alignSelf: 'flex-end',
    whiteSpace: 'nowrap',
  },

  vazio: {
    textAlign: 'center',
    color: '#24406E',
    padding: 32,
  },

};

export default historicoStyles;