
const fonte = 'Inter, system-ui, sans-serif';

export const criarTicketStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100% - 65px)',
    minHeight: 'calc(100vh - 65px)',
    marginLeft: '65px',
    marginTop: '65px',
    padding: '28px 40px 32px',
    backgroundColor: '#EFF6FD',
    boxSizing: 'border-box',
    gap: '14px',
    fontFamily: fonte,
  },

  banner: {
    display: 'flex',
    alignItems: 'center',
    gap: '22px',
    height: '88px',
    minHeight: '88px',
    padding: '0 28px',
    borderRadius: '16px',
    background: 'linear-gradient(90deg, #DCEBFF 0%, #A9D0FF 50%, #77B1FF 100%)',
    boxSizing: 'border-box',
  },

  bannerIcone: {
    width: '48px',
    height: '48px',
  },

  bannerTitulo: {
    margin: 0,
    color: '#1C3F7A',
    fontSize: '30px',
    fontWeight: '700',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '22px',
    flex: 1,
    padding: '24px 28px',
    border: '1px solid #D5E1F0',
    borderRadius: '16px',
    backgroundColor: '#EFF6FD',
    boxSizing: 'border-box',
  },

  topo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '28px',
    flexWrap: 'wrap',
  },

  // Foto
  fotoWrapper: {
    position: 'relative',
    width: '260px',
    height: '260px',
    flex: '0 0 260px',
    padding: '5px',
    border: '1px solid #D5E1F0',
    borderRadius: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#FFFFFF',
  },

  foto: {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
  borderRadius: '15px',
  display: 'block',
  backgroundColor: '#FFFFFF',
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
    borderRadius: '15px',
    backgroundColor: '#E3EEFB',
    color: '#4A5A66',
    fontSize: '13px',
    fontWeight: '600',
  },

  botaoCamera: {
    position: 'absolute',
    right: '-6px',
    bottom: '-6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    border: '3px solid #EFF6FD',
    backgroundColor: '#1C63C2',
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
    gap: '18px',
  },

  campoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
  },

  linhaCampos: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    gap: '24px',
    width: '100%',
  },

  campoCliente: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: '1 1 0',
    minWidth: 0,
  },

  campoTelefone: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: '1 1 0',
    minWidth: 0,
  },

  label: {
    color: '#0B2A5B',
    fontSize: '23px',
    fontWeight: '700',
  },

  input: {
    width: '100%',
    height: '40px',
    padding: '0 14px',
    boxSizing: 'border-box',
    border: '1px solid #E5E7EB',
    borderRadius: '12px',
    backgroundColor: '#FFFFFF',
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
    alignItems: 'flex-start',
    gap: '10px',
    padding: '4px 4px 0',
    width: '100%',
  },

  descricaoBox: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    height: '220px',
    minHeight: '220px',
    flex: '0 0 220px',
    border: '1px solid #D5E1F0',
    borderRadius: '14px',
    backgroundColor: '#F3F8FE',
    boxSizing: 'border-box',
    padding: '18px 20px 16px',
  },

  textarea: {
    flex: 1,
    width: '100%',
    minHeight: 0,
    border: 'none',
    outline: 'none',
    resize: 'none',
    backgroundColor: 'transparent',
    color: '#0B2A5B',
    fontSize: '13px',
    lineHeight: '20px',
    fontFamily: fonte,
  },

  botaoEnviar: {
    alignSelf: 'flex-end',
    width: '148px',
    height: '40px',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#1C63C2',
    boxShadow: '0 3px 6px rgba(4, 34, 74, 0.35)',
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    fontFamily: fonte,
  },
};
