export const telaOverviewStyles = {

    flexgrid: {
        width: "calc(100% - 63px)",
        display: 'flex',
        marginLeft: '63px'
    },

    container: {
        backgroundColor: "#F5FAFE",
        minHeight: "calc(100vh - 70px)",
        height: "auto",
        boxSizing: "border-box",
        paddingTop: "90px",
        paddingBottom: "30px",
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
    },

    banner: {
        backgroundColor: "#E6F8F8",
        width: "90%",
        height: 130,
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
        display: "flex",
        padding: "30px 20px",
    },

    text: {
        height: 100,
        width: "380px",
        display: "flex",
        gap: "15px",
        alignItems: "center",
        justifyContent: "center",
    },

    icone: {

        objectFit: "contain",
        display: "block",
        alignSelf: "center",
    },

    caixaText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

    saudacao: {
        fontSize: '24px',
        fontWeight: '700',
        margin: '0 0 2px',
        color: '#0A1934'
    },

    text: {
        fontSize: '15px',
        color: '#0A1934'
    },

    section: {
        display: "flex",
        alignItems: "center"
    },

    dados: {
        display: "flex",
        gap: "10px",
    },

    numberTt: {
        fontSize: 24,
        color: "#0A1934"
    },
    numberEa: {
        fontSize: 24,
        color: "#87782D",
    },
    numberC: {
        fontSize: 24,
        color: "#2A685F"
    },
    numberP: {
        fontSize: 24,
        color: "#571414"
    },

    subtitulo: {
        width: '90%',
        marginTop: 40,
        display: "flex",
        alignItems: "flex-start"
    },
    mTickets: {
        color: "#0A1934",
        display: "flex",

        fontSize: 32,
        fontWeight: 400,

        marginBottom: 20
    },

    buttons: {
        display: "flex",
        alignItems: "center",
        gap: "15px",
        width: "90%",
        marginTop: "50px",
    },

    todos: {
        width: "110px",
        height: "35px",
        backgroundColor: "#233D6A",
        color: "#E9F1F8",
        border: "none",
        borderRadius: "20px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
    },

    recentes: {
        width: "210px",
        height: "35px",
        backgroundColor: "#E9F1F8",
        color: "#233D6A",
        borderRadius: "20px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
        border: "none"
    },

    recorrentes: {
        width: "210px",
        height: "35px",
        backgroundColor: "#E9F1F8",
        color: "#233D6A",
        borderRadius: "20px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
        border: "none"
    },



    dadosTt: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "12px",
        height: 80,
        width: "145px",
        backgroundColor: "#F4FBFF",
        borderRadius: 5,
        border: "1px solid #0A1934",
        color: "#0A1934",
    },

    dadosEa: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "12px",
        height: 80,
        width: "145px",
        backgroundColor: "#FFFDF3",
        borderRadius: 5,
        border: "1px solid #87782D",
        color: "#87782D",
    },

    dadosC: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "12px",
        height: 80,
        width: "145px",
        backgroundColor: "#EEF9FA",
        border: "1px solid #245543",
        color: "#245543",
        borderRadius: 5,
    },

    dadosP: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "12px",
        height: 80,
        width: "145px",
        backgroundColor: "#FFE0E7",
        borderRadius: 5,
        border: "1px solid #571414",
        color: "#571414",
    },

    titulos: {
        height: 40,
        backgroundColor: "#233D6A",
        color: "#E9F1F8",
        padding: 0,

    },

    cabecalho: {
        height: 40,
        backgroundColor: "#233D6A",
        padding: 0
    },

    tableContainer: {
        width: "90%",
        borderRadius: "15px",
        boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.25)",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
    },

    table: {
        width: "100%",
        borderCollapse: "collapse",
        borderSpacing: 0,
        tableLayout: "fixed",
        border: "none"
    },

    linhas: {
        height: 40,
        borderBottom: "1px solid #f2f2f2",
        color: "#05193D",
    },

    id: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },

    sla: {
        color: "red",
        textAlign: "center"
    },

    tempoExcedido: {
        color: "red",
        textAlign: "center"
    },

    colTicket: {
        width: "15%"
    },

    colDescricao: {
        width: "30%"
    },

    colPrioridade: {
        width: "10%"
    },

    colSLA: {
        width: "7%"
    },

    colExcedido: {
        width: "16%"
    },

    colStatus: {
        width: "22%"
    },

    naoselecionado: {  
        width: "200px",
        height: "40px",
        backgroundColor: "#E9F1F8",
        color: "#233D6A",
        border: "none",
        borderRadius: "20px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
    },

    selecionado: {  
        width: "200px",
        height: "40px",
        backgroundColor: "#233D6A",
        color: "#E9F1F8",
        border: "none",
        borderRadius: "20px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
    }
};