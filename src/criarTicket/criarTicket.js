const fonte = 'Inter, system-ui, sans-serif';

export const criarTicketStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    padding: '22px 24px 24px',
    backgroundColor: '#EFF6FD',
    boxSizing: 'border-box',
    gap: '6px',
    fontFamily: fonte,
  },

  banner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '22px',
    height: '88px',
    padding: '0 16px',
    borderRadius: '10px',
    background: 'linear-gradient(90deg, #DCEBFF 0%, #A9D0FF 50%, #77B1FF 100%)',
    boxSizing: 'border-box',
    marginBottom: '4px',
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
    gap: '16px',
    padding: '12px',
    border: '1px solid #D5E1F0',
    borderRadius: '10px',
    backgroundColor: '#EFF6FD',
    boxSizing: 'border-box',
  },

  topo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '14px',
    flexWrap: 'wrap',
  },

  // foto
  fotoWrapper: {
    position: 'relative',
    width: '218px',
    height: '218px',
    flex: '0 0 218px',
    padding: '4px',
    border: '1px solid #D5E1F0',
    borderRadius: '12px',
    boxSizing: 'border-box',
    backgroundColor: '#FFFFFF',
  },

  foto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    display: 'block',
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
    right: '-6px',
    bottom: '-6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '3px solid #EFF6FD',
    backgroundColor: '#1C63C2',
    cursor: 'pointer',
    padding: 0,
  },

  inputArquivo: {
    display: 'none',
  },

  // campos para digitar
  campos: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minWidth: '280px',
    gap: '14px',
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
    gap: '20px',
    width: '100%',
    flexWrap: 'wrap',
  },

  campoCliente: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: '1 1 260px',
    minWidth: 0,
  },

  campoTelefone: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: '0 0 190px',
    minWidth: '190px',
  },

  label: {
    color: '#0B2A5B',
    fontSize: '15px',
    fontWeight: '700',
  },

  input: {
    width: '100%',
    height: '36px',
    padding: '0 14px',
    boxSizing: 'border-box',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    backgroundColor: '#FFFFFF',
    color: '#0B1B38',
    fontSize: '13px',
    outline: 'none',
    fontFamily: fonte,
  },

  // descricao
  descricaoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '4px 4px 0',
  },

  descricaoBox: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '150px',
    border: '1px solid #D5E1F0',
    borderRadius: '8px',
    backgroundColor: '#F3F8FE',
    boxSizing: 'border-box',
    padding: '14px 14px 12px',
  },

  textarea: {
    flex: 1,
    width: '100%',
    minHeight: '90px',
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
    height: '34px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#1C63C2',
    boxShadow: '0 3px 6px rgba(4, 34, 74, 0.35)',
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    fontFamily: fonte,
  },

  mensagem: {
    margin: 0,
    fontSize: '13px',
    fontWeight: '600',
  },
};
