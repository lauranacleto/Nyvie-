import { redirect } from "react-router-dom";

export const editarPerfilStyles = {
    container: {
    
    width: 'calc(100% - 65px)',
    marginLeft: '65px',
    backgroundColor: '#F4F9FC',
    fontFamily: 'Arial, sans-serif',
    color: '#102D55',
     minHeight: '100vh',
    height: '100vh',
    overflow: 'hidden',
    boxSizing: 'border-box',
},

    banner: {
        height: '190px',
        width: '100%',
        backgroundColor: '#204B40',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    logo: {
        
        objectFit: 'contain',
        marginBottom: 60
    },

    conteudo: {
    display: 'flex',
    alignItems: 'stretch',
    gap: '24px',
    padding: '0 32px 16px',
    marginTop: '-38px',
    position: 'relative',
},
perfil: {
    width: '255px',
    minWidth: '220px',
    boxSizing: 'border-box',
    backgroundColor: '#EFF6FD',
    borderRadius: '9px',
    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
    padding: '24px 20px',
    color: '#111111',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
},
    nome: {
    textAlign: 'center',
    fontSize: '17px',
    fontWeight: '700',
    margin: '12px 0 2px',
    color: '#183B6B',
},

    email: {
        textAlign: 'center',
        fontSize: '11px',
        margin: '0 0 32px',
        color: '#333333',
    },

    board: {
    flex: 1,
    minWidth: 0,
    boxSizing: 'border-box',
    backgroundColor: '#EFF6FD',
    borderRadius: '9px',
    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
    padding: '20px 6%',
    marginTop: '0',
    marginBottom: '0',
},

    titulo: {
        fontSize: '26px',
        margin: '0 0 8px',
        color: '#183B6B',
    },

    subtitulo: {
        fontSize: '12px',
        color: '#A0A8B1',
        margin: '0 0 16px',
        lineHeight: 1.5,
        marginTop: 10
    },

    info: {
    display: 'grid',
    gridTemplateColumns: 'minmax(180px, 0.8fr) minmax(240px, 1.2fr)',
    gap: '24px',
    borderRadius: '9px',
    padding: '14px 24px',
    boxShadow: '2px 3px 4px rgba(0, 0, 0, 0.15)',
},

   subtitulofoto: {
    fontSize: '20px',
    margin: '10px 0 14px',
    color: '#183B6B',
    fontWeight: '700',
},
    subtituloinfo: {
    fontSize: '20px',
    margin: '0 0 12px',
    color: '#183B6B',
    fontWeight: '700',
    marginTop: 0,
},


  formulario: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
},

    campoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        minWidth: 0,
        marginBottom: 10,
        color: "#183B6B"
        

    },

    

    label: {
        fontSize: '12px',
        color: '#9299A1',
        marginBottom: 10,
    },

    input: {
        width: '85%',
        height:35,
        boxSizing: 'border-box',
        padding: '10px 12px',
        border: '1px solid #E1E1E1',
        borderRadius: '5px',
        backgroundColor: '#fafafa',
        color: '#555555',
        fontSize: '12px',
        outline: 'none',
        boxShadow: '2px 3px 4px rgba(0, 0, 0, 0.18)',
    },

    botoes: {
    display: 'flex',
    gap: '16px',
    marginTop: '18px',
},

    botaoCancelar:{
        color:"white",
        backgroundColor:"#0A1934",
        width: "50%",
        height: 45,
        borderRadius: 5,
         cursor: 'pointer',
         border: 'none',
        outline: 'none',

    },
     botaoSalvar:{
         width: "50%",
        height: 45,
        backgroundColor:"#1A8052",
        color:"white",
        borderRadius: 5,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',


     },

 fotoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0 15px 10px',
    gap: '10px',
   width:300,
    backgroundColor: '#fafafa',
    height: 300,
    borderRadius: 5,
},

profile: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover',
    alignSelf: 'center',
    marginTop: 0,
    padding: '30px, 0, 30px'
   
},
profileInfo: {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    alignSelf: 'center',
    marginTop: -10,
    
},

botaoAlterarFoto: {
    display: 'inline-block',
    padding: '6px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: "#0A1934",
    color: "white",
    fontSize: '16px',
},

inputFoto: {
    display: 'none',
    fontSize:'10px'
},
    
 
};