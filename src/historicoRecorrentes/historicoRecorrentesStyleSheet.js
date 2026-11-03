

export const styles = {
    container: {
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#EDF5FC",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
    },

    logo: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#FFFFFF",
        margin: 0,
    },

    usuario: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 28,
    },

    sino: {
        fontSize: 24,
        color: "#FFFFFF",
    },

    avatar: {
        width: 46,
        height: 46,
        borderRadius: 50,
        backgroundColor: "#D9E5F3",
        color: "#204C9B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 20,
    },

    menu: {
        position: "absolute",
        top: 65,
        left: 0,
        bottom: 0,
        width: 65,
        backgroundColor: "#0B1B38",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 45,
        gap: 28,
        color: "#FFFFFF",
    },

    iconeMenu: {
        fontSize: 29,
        color: "#FFFFFF",
        textAlign: "center",
    },

    menuSair: {
        position: "absolute",
        bottom: 30,
        fontSize: 32,
        color: "#FFFFFF",
    },

    conteudo: {
        marginLeft: 90,
        padding: "10px 12px 20px",
        minHeight: "34px",
        boxSizing: "border-box",
    },

    titulo: {
        margin: "0 0 12px",
        fontSize: 22,
        fontWeight: "semi-bold",
        color: "#204C9B",
    },

    categoria: {
        minHeight: 74,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: " 14px",
        gap: 10,
        marginBottom: 11,
        boxShadow: "0 10px 10px #CBD8E7",
    },

    iconeWifi: {
        width: 44,
        height: 44,
    },

    nomeCategoria: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#204C9B",
        margin: 0,
    },

    lista: {
        backgroundColor: "#FFFFFF",
        border: "1px solid #DCE8F5",
        borderRadius: 7,
        padding: 11,
        width: "100%",
        minHeight: 480,
        boxSizing: "border-box",
    },

    ticket: {
        minHeight: 78,
        width: "100%",
        backgroundColor: "#EFF6FD",
        border: "1px solid #DCE7F1",
        borderRadius: 7,
        boxShadow: "0 1px 2px #C2CBD4",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) 122px 108px",
        alignItems: "stretch",
        marginBottom: 7,
        overflow: "hidden",
        boxSizing: "border-box",
    },

    infoTicket: {
        padding: "7px 9px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    idTicket: {
        margin: "0 0 5px",
        fontSize: 19,
        color: "#204C9B",
    },

    descricao: {
        margin: 0,
        fontSize: 15,
        color: "#0B1B38",
    },

    colunaTicket: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
        borderLeft: "1px solid #DCE5EF",
        padding: 5,
    },

    rotulo: {
        fontSize: 13,
        color: "#0B1B38",
    },

    etiqueta: {
        minWidth: 67,
        padding: "3px 4px",
        borderRadius: 15,
        border: "1px solid",
        textAlign: "center",
        fontSize: 13,
        whiteSpace: "nowrap",
    },

    prioridadeAlta: {
        backgroundColor: "#FFF0E4",
        borderColor: "#F4B88D",
        color: "#BD7138",
    },

    prioridadeMedia: {
        backgroundColor: "#E0EBFF",
        borderColor: "#8AA9F4",
        color: "#4168C5",
    },

    prioridadeBaixa: {
        backgroundColor: "#D9F2E9",
        borderColor: "#83C9B5",
        color: "#36856F",
    },

    statusAdocao: {
        backgroundColor: "#FFF0B9",
        borderColor: "#D6B957",
        color: "#89743A",
    },

    statusPendente: {
        backgroundColor: "#FFDDDD",
        borderColor: "#D99B9B",
        color: "#9B5555",
    },

    statusConcluido: {
        backgroundColor: "#C6EBDC",
        borderColor: "#83C8AD",
        color: "#437B66",
    },
};
