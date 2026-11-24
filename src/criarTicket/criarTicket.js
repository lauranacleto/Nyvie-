
const fonte = "'Open Sans', 'Noto Sans', Inter, system-ui, sans-serif";

const azulEscuro = '#1F3A6E';
const azulBotao = '#1C63C2';
const bordaClara = '#D8E4F2';

export const criarTicketStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100% - 70px)',
    minHeight: 'calc(100vh - 65px)',
    marginLeft: '65px',
    marginTop: '65px',
    padding: '14px 8% 32px',
    backgroundColor: '#F4F9FE',
    boxSizing: 'border-box',
    gap: '14px',
    fontFamily: fonte,
  },

  // Banner
  banner: {
    display: 'flex',
    alignItems: 'center',
    gap: '22px',
    height: '104px',
    minHeight: '104px',
    padding: '0 48px',
    borderRadius: '12px',
    background: 'linear-gradient(90deg, #E6F0FD 0%, #B5D5FE 55%, #7DB8FF 100%)',
    boxSizing: 'border-box',
  },

  bannerIcone: {
    width: '52px',
    height: '52px',
  },

  bannerTitulo: {
    margin: 0,
    color: azulEscuro,
    fontSize: '34px',
    fontWeight: '700',
  },

  // Card
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    flex: 1,
    padding: '20px 16px 24px',
    border: `1px solid ${bordaClara}`,
    borderRadius: '12px',
    backgroundColor: '#EEF5FD',
    boxSizing: 'border-box',
  },

  topo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '22px',
    flexWrap: 'wrap',
  },

  // Foto
  fotoWrapper: {
  position: "relative",
  width: "420px",
  height: "280px",
  flexShrink: 0,
},

foto: {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  backgroundColor: "#F5F8FC",
  borderRadius: "12px",
  display: "block",
},

  fotoVazia: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    padding: '12px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    backgroundColor: '#E3EEFB',
    color: '#4A5A66',
    fontSize: '13px',
    fontWeight: '600',
  },

  botaoCamera: {
    position: 'absolute',
    right: '-8px',
    bottom: '-10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '3px solid #EEF5FD',
    backgroundColor: azulBotao,
    cursor: 'pointer',
    padding: 0,
  },

  inputArquivo: {
    display: 'none',
  },

  // Campos
  campos: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minWidth: '280px',
    gap: '10px',
  },

  campoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    width: '100%',
  },

  linhaCampos: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-end',
    gap: '24px',
    width: '100%',
  },

  campoCliente: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: '1.8 1 0',
    minWidth: 0,
  },

  campoTelefone: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: '1 1 0',
    minWidth: 0,
  },

  label: {
    color: azulEscuro,
    fontSize: '22px',
    fontWeight: '700',
    lineHeight: '1.2',
  },

  labelMenor: {
    color: azulEscuro,
    fontSize: '17px',
    fontWeight: '700',
    lineHeight: '1.2',
  },

  input: {
    width: '100%',
    height: '38px',
    padding: '0 12px',
    boxSizing: 'border-box',
    border: '1px solid #E3EAF3',
    borderRadius: '6px',
    backgroundColor: '#FAFCFF',
    color: '#0B1B38',
    fontSize: '13px',
    outline: 'none',
    fontFamily: fonte,
  },

  // Descrição
  descricaoContainer: {
  display: 'flex',
  flexDirection: 'column',
  flex: 'none',
  alignItems: 'stretch',   // era 'flex-start'
  width: '100%',
  padding: '0 6px',
  boxSizing: 'border-box',
},

descricaoBox: {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',           // era '90%'
  minWidth: '320px',
  height: '230px',
  minHeight: '230px',
  flex: '0 0 230px',
  border: `2px solid ${azulEscuro}`,
  borderRadius: '4px',
  backgroundColor: '#FFFFFF',
  boxSizing: 'border-box',
  overflow: 'hidden',
},

  descricaoCabecalho: {
    display: 'block',
    padding: '4px 20px',
    backgroundColor: azulEscuro,
    color: '#FFFFFF',
    fontSize: '22px',
    fontWeight: '700',
    lineHeight: '1.3',
  },

  descricaoCorpo: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0,
    padding: '8px 28px 10px',
    boxSizing: 'border-box',
  },

  textarea: {
    flex: 1,
    width: '100%',
    minHeight: 0,
    border: 'none',
    outline: 'none',
    resize: 'none',
    backgroundColor: 'transparent',
    color: azulEscuro,
    fontSize: '13px',
    lineHeight: '20px',
    fontFamily: fonte,
  },

  botaoEnviar: {
    alignSelf: 'flex-end',
    minWidth: '120px',
    height: '34px',
    padding: '0 18px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: azulBotao,
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
    fontFamily: fonte,
  },
};
