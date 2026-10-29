export const editarPerfilStyles = {
    container: {
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#F4F9FC',
        fontFamily: 'Arial, sans-serif',
        color: '#102D55',
        margin: 0,
    },

    banner: {
        height: '280px',
        width: '100%',
        backgroundColor: '#204B40',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        
        objectFit: 'contain',
    },

    conteudo: {
        display: 'flex',
        alignItems: 'stretch',
        gap: '24px',
        padding: '0 32px 32px',
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
    },

    nome: {
        textAlign: 'center',
        fontSize: '17px',
        fontWeight: 'bold',
        margin: '12px 0 2px',
        color: '#111111',
        marginTop: 130,
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
        padding: '24px 6%',
        marginTop: '22px',
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
    },

    info: {
        display: 'grid',
        gridTemplateColumns: 'minmax(180px, 0.8fr) minmax(240px, 1.2fr)',
        gap: '28px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #D5DCE3',
        borderRadius: '9px',
        padding: '20px 24px',
        boxShadow: '2px 3px 4px rgba(0, 0, 0, 0.15)',
    },

    subtitulofoto: {
        fontSize: '16px',
        margin: '0 0 14px',
        color: '#183B6B',
    },

    subtituloinfo: {
        fontSize: '16px',
        margin: '0 0 14px',
        color: '#183B6B',
    },

    formulario: {
        display: 'flex',
        flexDirection: 'column',
        gap: '13px',
    },

    campoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        minWidth: 0,
        marginBottom: 10,
    },

    label: {
        fontSize: '12px',
        color: '#9299A1',
        marginBottom: 10,
    },

    input: {
        width: '100%',
        boxSizing: 'border-box',
        padding: '10px 12px',
        border: '1px solid #E1E1E1',
        borderRadius: '5px',
        backgroundColor: '#E9E7E7',
        color: '#555555',
        fontSize: '12px',
        outline: 'none',
        boxShadow: '2px 3px 4px rgba(0, 0, 0, 0.18)',
    },

    botoes: {
        display: 'flex',
        gap: '16px',
        marginTop: '30px',
    },
};