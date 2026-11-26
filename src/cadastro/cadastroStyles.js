import fundoCadastro from "../assets/fundocadastro.svg"

const cadastroStyles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100vh',
    minHeight: '600px',
    overflow: 'hidden',
  },
  ladoE:{
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '85px',
    width: '280px',
    flex: '0 0 35%',
    minWidth: 0,
    backgroundColor: '#04224A',
    overflow: 'hidden',
  },
  ladoD: {
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


 setaE: {
  position: 'absolute',
  top: '30px',
  left: '30px',
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
boasVindas: {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0 20px',
  // transform: 'translateY(-210px)',
},
  titulo: {
    color: '#FFFFFF',
    fontSize: '56px',
    fontWeight: '700',
    margin: '0 0 14px',
  },

  subtitulo: {
    marginTop:"20px",
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '24px',
    
  },

  subtitulo1: {
    
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: '200',
    lineHeight: '24px',
    
  },

  



  inputContainer: {
    width: '80%',
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
    color: '#04224A',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Inter, system-ui, sans-serif',
    padding: 5
  },

  input: {
    backgroundColor: '#fff',
    color: '#afafaf',
    width: '100%',
    height: 45,
    boxSizing: 'border-box',
    padding: '0 12px',
    border: '1px solid #d2d2d2',
    outline: 'none',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 400,
    

  },
  inputSelect:{
      backgroundColor: '#fff',
    color: '#454545',
    width: '100%',
    height: 45,
    boxSizing: 'border-box',
    padding: '0 12px',
    border: '1px solid #d2d2d2',
    outline: 'none',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 400,
  },
 
// IMAGEM

inputImagemContainer: {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '45px',
  padding: '8px 15px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #D1D5DB',
  borderRadius: '10px',
  boxSizing: 'border-box',
  gap: '12px',
},

campoImagem: {
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  minWidth: 0,
  height: '100%',
  cursor: 'pointer',
},

nomeArquivo: {
  color: '#9CA3AF',
  fontSize: '16px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
},

botaoVisualizar: {
  padding: '9px 14px',
  backgroundColor: '#F8FAFC',
  border: '1px solid #082653',
  borderRadius: '9px',
  color: '#082653',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
},

previewImagem: {
  width: 85,
  height: 85,
  objectFit: 'cover',
  borderRadius: 8,
  border: '1px solid #d2d2d2',
  marginTop: 10,
},

// MODAL DA IMAGEM

modalImagem: {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
},

conteudoModal: {
  position: 'relative',
  backgroundColor: '#fff',
  padding: 30,
  borderRadius: 12,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 15,
  maxWidth: '90%',
  maxHeight: '90%',
  boxSizing: 'border-box',
},

imagemModal: {
  maxWidth: '100%',
  maxHeight: '65vh',
  objectFit: 'contain',
  borderRadius: 8,
},

fecharModal: {
  position: 'absolute',
  top: 10,
  right: 12,
  backgroundColor: 'transparent',
  border: 'none',
  color: '#04224A',
  fontSize: 22,
  cursor: 'pointer',
},

botaoFechar: {
  backgroundColor: '#04224A',
  color: '#fff',
  border: 'none',
  padding: '10px 25px',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 14,
  fontWeight: 600,
},
//




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
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "'Oswald', sans-serif",
  },

  rodape: {
    marginTop: 30,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 500,
    fontFamily: 'Inter, system-ui, sans-serif',
  },
 
};

export default cadastroStyles;