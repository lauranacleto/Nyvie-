import fundoCadastro from '../../assets/fundoCadastro.jpg';

const cadastroStyles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#77B1FF',
    backgroundImage: `url(${fundoCadastro})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    width: '85%',
    maxWidth: 820,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },

  inputDuo: {
    width: '100%',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },

  inputText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter, system-ui, sans-serif',
  },

  input: {
    backgroundColor: '#fff',
    color: '#4A5A66',
    width: '100%',
    height: 44,
    boxSizing: 'border-box',
    padding: '0 12px',
    border: 'none',
    outline: 'none',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    fontFamily: 'Inter, system-ui, sans-serif',
  },

  botao: {
    backgroundColor: '#1A7E52',
    color: '#fff',
    width: '46%',
    minWidth: 200,
    maxWidth: 380,
    height: 50,
    border: 'none',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 40,
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: 600,
    fontFamily: "'Oswald', sans-serif",
  },

  rodape: {
    marginTop: 30,
    textAlign: 'center',
    color: '#fff',
    fontSize: 13,
    fontWeight: 600,
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  link: {
    color: '#1F5FD6',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};

export default cadastroStyles;