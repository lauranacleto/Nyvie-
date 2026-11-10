
const historicoStyles = {

  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#0A1A3A',
    fontFamily: "'Noto Sans', sans-serif",
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
    boxSizing: 'border-box',
    overflowY: 'auto',
    backgroundColor: '#F2F7FF',
    padding: 20,
  },

  pageTitle: {
    fontSize: 'clamp(20px, 4vw, 28px)',
    color: '#1B4A9C',
    margin: '0 0 15px 0',
  },

  painel: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'flex-start',
  },

  // Coluna esquerda
  colunaEsquerda: {
    width: 250,
    maxWidth: '100%',
    backgroundColor: '#EAF3FF',
    border: '1px solid #D6E2F2',
    borderRadius: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    boxSizing: 'border-box',
  },

  card: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#FFFFFF',
    border: '1px solid #D6E2F2',
    borderRadius: 8,
    padding: 10,
    cursor: 'pointer',
  },

  cardSelecionado: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#FFFFFF',
    border: '1px solid #4FA58A',
    borderRadius: 8,
    padding: 10,
    cursor: 'pointer',
  },

  foto: {
    width: 44,
    height: 44,
    flexShrink: 0,
    borderRadius: '50%',
    backgroundColor: '#5C7AA8',
  },

  nomeTodos: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B4A9C',
    margin: 0,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B4A9C',
    margin: 0,
  },

  cargo: {
    fontSize: 17,
    color: '#24406E',
    margin: 0,
  },

  // Coluna direita
  colunaDireita: {
    flex: '1 1 400px',
    minWidth: 0,
    backgroundColor: '#EAF3FF',
    border: '1px solid #D6E2F2',
    borderRadius: 8,
  },

  topoDireita: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottom: '1px solid #D6E2F2',
  },

  botoes: {
    display: 'flex',
    gap: 10,
  },

  botao: {
    backgroundColor: '#1B4A9C',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: 20,
    padding: '6px 20px',
    cursor: 'pointer',
  },

  // Lista de eventos
  lista: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 12,
  },

  eventoAtribuido: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    border: '1px solid #8DB8F0',
    backgroundColor: '#D6E9FF',
  },

  eventoConcluido: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    border: '1px solid #86CFA6',
    backgroundColor: '#BFEBD3',
  },

  eventoAtualizado: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    border: '1px solid #B48CEB',
    backgroundColor: '#E9D8FF',
  },

  eventoPrazo: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    border: '1px solid #E8CC62',
    backgroundColor: '#FFF2BF',
  },

  eventoTitulo: {
    fontSize: 17,
    margin: 0,
  },

  eventoDetalhe: {
    fontSize: 14,
    margin: 0,
  },

  eventoData: {
    fontSize: 13,
    color: '#24406E',
  },

  vazio: {
    textAlign: 'center',
    color: '#24406E',
  },

};

export default historicoStyles;
