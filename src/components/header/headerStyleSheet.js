export const styles = {
    header: {
        height: 65,
        backgroundColor: "#0B1B38",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 64,
        paddingRight: 38,
        color: "#FFFFFF",

        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxSizing: "border-box"
    },
    painelNotificacoes: {
        position: 'absolute',
        top: '40px',
        right: '45px',
        width: '320px',
        maxHeight: '350px',
        overflowY: 'auto',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: 1000,
        padding: '12px',
    },

    tituloNotificacoes: {
        margin: '0 0 12px',
        color: '#19345B',
        fontSize: '16px',
    },

    cardNotificacao: {
        padding: '10px',
        marginBottom: '8px',
        border: '1px solid #DCE5EF',
        borderRadius: '8px',
        backgroundColor: '#FFFFFF',
    },

    mensagemNotificacao: {
        fontSize: '12px',
        margin: '5px 0',
        color: '#555555',
    },
    usuario: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    position: "relative"
},
};