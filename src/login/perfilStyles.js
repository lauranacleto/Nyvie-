
export const perfilStyles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100vh',
    minHeight: '600px',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
  },

  ladoEsquerdo: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '85px',
    width: '45%',
    flex: '0 0 45%',
    minWidth: 0,
    backgroundColor: '#04224A',
    overflow: 'hidden',
  },

  bolaSE: {
    position: 'absolute',
    width: '230px',
    height: '230px',
    borderRadius: '50%',
    backgroundColor: '#19396D',
    top: '-110px',
    right: '-110px',
  },

  bolaSD: {
    position: 'absolute',
    width: '230px',
    height: '230px',
    borderRadius: '50%',
    backgroundColor: '#071A30',
    top: '-110px',
    right: '-110px',
  },

  bolaIE: {
    position: 'absolute',
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    backgroundColor: '#19396D',
    bottom: '-140px',
    left: '-140px',
  },

  logo: {
    display: 'block',
  
    objectFit: 'contain',
    zIndex: 1,
  },

  boasVindas: {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0 20px',
  transform: 'translateY(-210px)',
},
  titulo: {
    color: '#FFFFFF',
    fontSize: '30px',
    fontWeight: '700',
    margin: '0 0 14px',
  },

  subtitulo: {
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '24px',
    
  },

  ladoDireito: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
    minWidth: 0,
    backgroundColor: '#EFF6FD',
    padding: '40px',
    boxSizing: 'border-box',
  },

  formulario: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '590px',
    
  },

  campoContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '29px',
  },

  label: {
    color: '#0B1B38',
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '10px',
  },

  input: {
    width: '100%',
    height: '48px',
    padding: '0 26px',
    boxSizing: 'border-box',
    border: '1px solid #E5E7EB',
    borderRadius: '6px',
    backgroundColor: '#FFFFFF',
    color: '#0B1B38',
    fontSize: '14px',
    outline: 'none',
  },

  cadastroContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '6px',
    marginTop: '11px',
    marginBottom: '27px',
  },

  textoCadastro: {
    color: '#0B1B38',
    fontSize: '16px',
    margin: 0,
    fontFamily: 'Inter, system-ui, sans-serif',
  },

  linkCadastro: {
    color: '#0066FF',
    fontSize: '16px',
    textDecoration: 'none',
    cursor: 'pointer',
  },

  botaoEntrar: {
    width: '590px',
    alignSelf: 'center',
    height: '54px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#1A7E52',
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: '700',
    cursor: 'pointer',
    fontFamily: "'Oswald', sans-serif",
  },
};
