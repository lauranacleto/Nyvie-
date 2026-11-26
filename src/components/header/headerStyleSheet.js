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
        color: "#000000",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        boxSizing: "border-box",
        zIndex: 1000,
    },

    painelNotificacoes: {
        position: "fixed",
        top: "65px",
        right: "0px",
        width: "320px",
        maxHeight: "320px",
        overflowY: "auto",
        backgroundColor: "#F5FAFE",
        borderRadius: "5px",
        boxShadow: '0 1px 2px #00000020',
        overlay: 998,
        zIndex: 1000,
        padding: "0 0 10px",
        boxSizing: "border-box"
    },

    tituloNotificacoes: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        gap: "8px",
        margin: 0,
        padding: "12px 14px",
        color: "#0A1934",
        fontSize: "24px",
        fontWeight: "bold",
        backgroundColor: "#FFFFFF",
        borderBottom: "2px solid #1C4691",
    },


    cardNotificacao: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        padding: "9px 10px",
        margin: "8px 10px 0",
        border: "1px solid #A6BBDE",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",

        textAlign: "left",
        boxSizing: "border-box"
    },

    conteudoNotificacao: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1,
        minWidth: 0,
        textAlign: "right"
    },

    tituloCard: {
        fontSize: "12px",
        color: "#0A1934",
        fontWeight: "bold",
        margin: "0 0 4px 0",
        textAlign: "left",
        display: "block",
        width: "100%"
    },

    mensagemNotificacao: {
        fontSize: "10px",
        margin: 0,
        color: "#0A1934",
        lineHeight: "14px",
        textAlign: "left",
        width: "100%"
    },


    usuario: {
        display: "flex",
        alignItems: "center",
        gap: 20,
        position: "relative"
    },
};