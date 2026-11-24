export const styles = {
    container: {
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F4F8FC",
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        boxSizing: "border-box",
    },

    conteudo: {
        marginLeft: 92,
        marginTop: 64,
        width: "calc(100% - 92px)",
        padding: "32px 24px 20px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
    },

    categoria: {
        width: "80%",
        height: 82,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        gap: 18,
        marginBottom: 32,
        boxShadow: "0 2px 0px #BCC9D8",
        boxSizing: "border-box",
    },

    iconeCategoria: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        backgroundColor: "#DCE7F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#0F1E36",
        boxShadow: "0 2px 3px rgba(0, 0, 0, 0.12)",
        flexShrink: 0,
    },

    nomeCategoria: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#1B3F8B",
        margin: 0,
    },

    lista: {
        backgroundColor: "#FFFFFF",
        border: "1px solid #CFDCEB",
        borderRadius: 8,
        padding: 0,
        width: "80%",
        minHeight: 360,
        boxSizing: "border-box",
        overflow: "hidden",
    },

    ticket: {
        height: 68,
        width: "100%",
        backgroundColor: "#FFFFFF",
        border: "none",
        borderBottom: "1px solid #333333",
        borderRadius: 0,
        boxShadow: "none",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) 145px 175px",
        alignItems: "stretch",
        marginBottom: 0,
        overflow: "hidden",
        boxSizing: "border-box",
    },

    infoTicket: {
        padding: "6px 18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: 0,
    },

    idTicket: {
        margin: "0 0 4px",
        fontSize: 25,
        fontWeight: "600",
        color: "#1B3F8B",
    },

    descricao: {
        margin: 0,
        fontSize: 15,
        color: "#1E293B",
        fontWeight: "500",
    },

    colunaTicket: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        borderLeft: "1px solid #E2E8F0",
        padding: "6px 14px",
        boxSizing: "border-box",
    },

    rotulo: {
        fontSize: 13,
        color: "#0F1E36",
        fontWeight: "500",
    },

    etiqueta: {
        width: "80%",
        padding: "4px 12px",
        borderRadius: 8,
        border: "none",
        textAlign: "center",
        fontSize: 12,
        fontWeight: "semi-bold",
        whiteSpace: "nowrap",
        boxSizing: "border-box",
    },

    prioridadeAlta: {
        backgroundColor: "#C5630A",
        color: "#FFFFFF",
    },

    prioridadeMedia: {
        backgroundColor: "#CEAE00",
        color: "#FFFFFF",
    },

    prioridadeBaixa: {
        backgroundColor: "#00695C",
        color: "#FFFFFF",
    },

    statusAdocao: {
        backgroundColor: "#CEAE00",
        color: "#FFFFFF",
    },

    statusPendente: {
        backgroundColor: "#A80028",
        color: "#FFFFFF",
    },

    statusConcluido: {
        backgroundColor: "#00695C",
        color: "#FFFFFF",
    },
};