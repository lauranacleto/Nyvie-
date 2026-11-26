export const TelaN3Styles = {
    flexgrid: {
        width: "calc(100% - 63px)",
        display: "flex",
        marginLeft: "63px",
        backgroundColor: "#F5FAFE",
        paddingTop: "65px",
        boxSizing: "border-box",
        minHeight: "100vh",
    },

    containerFundo: {
        width: '100%',
        alignItems: 'center',
        display: "flex",
        flexDirection: "column",
        margin: '0 auto',
    },
    container: {
        width: "100%",
        // backgroundColor: "#F0F7FE",
        // borderBottom: "2px solid #DCECFD",

        display: "flex",
        justifyContent: "center",

        paddingBottom: "50px"
    },
    banner: {
        display: "flex",
        flexDirection: "column",
        width: "80%"
    },
    group: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginTop: "40px",
    },

    iconBox: {
        width: "92px",
        height: "92px",
        backgroundColor: "#DCECFD",
        border: "1px solid #4B9DF4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        flexShrink: 0
    },

    imgG: {
        width: "65px",
        height: "65px",
        objectFit: "contain",
        alignItems: "start"
    },

    cText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

    saudacao: {
        fontSize: "30px",
        fontWeight: "700",
        margin: "0 0 2px",
        color: "#0A1934"
    },

    text: {
        fontSize: "24px",
        margin: 0,
        color: "#0A1934"
    },
    filtros: {
        display: "flex",
        gap: "27px",
        marginTop: "40px",
        flexWrap: "wrap",

    },
    filtro: {
        width: "23%",
        height: "45px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #D6E5F8",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        padding: "0 12px",
        boxSizing: "border-box",
        color: "#05193D",
        position: "relative",

    },

    filtroTexto: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        fontSize: "14px",
        lineHeight: "17px",
        gap: "2px",
    },

    select: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        cursor: "pointer",
        zIndex: 1
    },
    areaIndicadores: {
        display: "flex",
        width: "80%",
        gap: "18px",
        margin: "12px auto 0",
        alignItems: "stretch",
        boxSizing: "border-box",

    },
    dados: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gridTemplateAreas: `
        "total dentro"
        "fora recorrentes"
    `,
        gap: "16px",
        flex: 1,
        minWidth: 0,
        marginTop: 0,
        alignContent: "start",
    },
    quadroTaxa: {
        flex: 1,
        minWidth: 0,
        height: "270px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #05193D",
        borderLeft: "8px solid #4942CC",
        borderRadius: "4px",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
    },

    //Total Tickets
    dadosTt: {
        width: "100%",
        height: "125px",
        minWidth: 0,
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #05193D",
        borderRadius: "4px",
        overflow: "hidden",
        gridArea: "total",
    },

    pSecTt: {
        fontSize: "22px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D",
        paddingTop: "5px",
        paddingLeft: "5px"

    },
    h3SecTt: {
        fontSize: "38px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D",

    },
    pDSecTt: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#05193D",
        paddingTop: "5px"

    },
    iconT: {
        display: "flex",
        padding: "1px",
        alignItems: "center",
        gap: "10px",
        marginTop: "3px"

    },
    setaTt: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#05193D",
        padding: "5px"
    },

    //Dentro do SLA

    dadosDSla: {
        width: "100%",
        height: "125px",
        minWidth: 0,
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #05193D",
        borderRadius: "4px",
        overflow: "hidden",
        gridArea: "dentro"
    },

    pSecDSla: {
        fontSize: "22px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D",
        paddingTop: "5px",
        paddingLeft: "5px"
    },
    h3SecDSla: {
        fontSize: "30px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D"
    },
    pDSecDSla: {
        fontSize: "14px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D",


    },
    iconDS: {
        display: "flex",
        padding: "1px",
        alignItems: "center",
        gap: "10px",
        marginTop: "3px"
    },

    setaDS: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px"


    },

    //Fora do SLA
    dadosFSla: {
        width: "100%",
        height: "125px",
        minWidth: 0,
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #05193D",
        borderRadius: "4px",
        overflow: "hidden",
        gridArea: "fora",
    },
    pSecFSla: {
        fontSize: "22px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D",
        paddingTop: "5px",
        paddingLeft: "5px"
    },
    h3SecFSla: {
        fontSize: "30px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D"
    },
    pDSecFSla: {
        fontSize: "14px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D",
        paddingTop: "5px"
    },
    iconTFS: {
        display: "flex",
        padding: "1px",
        alignItems: "center",
        gap: "10px",
        marginTop: "3px"

    },

    setaPFS: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px"
    },


    //Tickets recorrentes
    dadosTR: {
        width: "100%",
        height: "125px",
        minWidth: 0,
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #05193D",
        borderRadius: "4px",
        overflow: "hidden",
        gridArea: "recorrentes",
    },
    pSecTtr: {
        fontSize: "22px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D",
        paddingTop: "5px",
        paddingLeft: "5px"
    },
    h3SecTtr: {
        fontSize: "30px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D"
    },
    pDSecTtr: {
        fontSize: "14px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D",
        paddingTop: "5px"

    },
    iconTTR: {
        display: "flex",
        padding: "1px",
        alignItems: "center",
        gap: "10px",
        marginTop: "3px"
    },
    setaTR: {
        display: "flex",
        alignItems: "center",
    },
    setaTR: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px"

    },
    //TAXA DE conversao
    taxaDC: {
        width: "100%",
        height: "100%",
        minWidth: 0,

        backgroundColor: "#FFFFFF",

        borderRadius: "4px",
        overflow: "hidden",
        gridArea: "recorrentes",
    },
    pSecTdc: {
        fontSize: "22px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D",
        paddingTop: "5px",
        paddingLeft: "5px"
    },
    h3SecTdc: {
        fontSize: "30px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D"
    },
    pDSecTdc: {
        fontSize: "14px",
        fontWeight: "bold",
        margin: "0",
        color: "#05193D",
        paddingTop: "5px"

    },
    iconTDC: {
        display: "flex",
        padding: "1px",
        alignItems: "center",
        gap: "10px",
        marginTop: "3px"
    },
    setaDC: {
        display: "flex",
        alignItems: "center",
    },
    setaDC: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px"

    },

    tituloConversao: {
        textAlign: "center",
        fontSize: "22px",
        fontWeight: "bold",
        color: "#05193D",
        margin: "0 0 15px 0",
    },

    conteudoConversao: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        minHeight: 0,
    },

    graficoConversao: {
        width: "30%",
        height: "180px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "10px",
        borderRight: "1px solid #C8D6E8",
        paddingRight: "15px",
        boxSizing: "border-box",
    },

    indicadoresConversao: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        paddingLeft: "20px",
        gap: "15px",
    },

    indicadorConversao: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },

    valorConversao: {
        fontSize: "36px",
        fontWeight: "bold",
        color: "#000000",
        margin: 0,
        whiteSpace: "nowrap",
    },

    descricaoConversao: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#000000",
        margin: 0,
    },

    quantidadeConversao: {
        fontSize: "12px",
        color: "#000000",
        textAlign: "right",
        margin: "5px 0 0",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minWidth: 0,
        padding: "10px 12px",
        justifyContent: "space-between",
        boxSizing: "border-box",
    },
    cardMain: {
        display: "flex",
        alignItems: "center",
        gap: "14px",
        flex: 1,
        minWidth: 0,
    },
    cardIcon: {
        width: "88px",
        height: "88px",
        borderRight: "1px solid #D1DCEB",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxSizing: "border-box",
    },
    cardInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: 0,
    },
    cardTitle: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: 0,
        color: "#05193D",
        whiteSpace: "nowrap",
    },

    cardValue: {
        fontSize: "42px",
        fontWeight: "bold",
        margin: 0,
        color: "#05193D",
        lineHeight: "46px",
    },

    cardTrend: {
        display: "flex",
        alignItems: "center",
        gap: "5px",
        whiteSpace: "nowrap",
    },
    cardTrendText: {
        fontSize: "13px",
        fontWeight: "bold",
        margin: 0,
        color: "#05193D",
    },
    conteudoTaxa: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minWidth: 0,
        padding: "12px",
        boxSizing: "border-box",
    },

    tituloTaxa: {
        fontSize: "22px",
        fontWeight: "bold",
        color: "#05193D",
        textAlign: "center",
        margin: "0 0 12px",
    },

    dadosTaxa: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        minHeight: 0,
    },

    graficoTaxa: {
        width: "30%",
        height: "180px",
        paddingRight: "12px",
        borderRight: "1px solid #C8D6E8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        flexShrink: 0,
    },

    indicadoresTaxa: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1,
        minWidth: 0,
        paddingLeft: "15px",
        height: "100%",
        boxSizing: "border-box",
    },

    indicadorTaxa: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },

    valorTaxa: {
        fontSize: "40px",
        fontWeight: "bold",
        color: "#000000",
        margin: 0,
        whiteSpace: "nowrap",
    },

    descricaoTaxa: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#000000",
        margin: 0,
    },

    quantidadeTaxa: {
        fontSize: "14px",
        color: "#000000",
        textAlign: "right",
        margin: "2px 0 8px",
        fontWeight: "bold",
    },

    divisorTaxa: {
        width: "100%",
        height: "1px",
        backgroundColor: "#C8D6E8",
        margin: "5px 0 10px",
    },





    // -------------------
    areaTabelas: {
        display: "flex",
        width: "80%",
        gap: "20px",
        margin: "25px auto 40px",
        alignItems: "stretch",
        boxSizing: "border-box",
    },

    caixaDesempenho: {
        width: "65%",
        minWidth: 0,
        minHeight: "300px",
        backgroundColor: "#F5FAFE",
        border: "1px solid #D0D8E2",
        borderRadius: "4px",
        padding: "12px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
    },

    caixaSla: {
        width: "35%",
        minWidth: 0,
        minHeight: "300px",
        backgroundColor: "#F5FAFE",
        border: "1px solid #D0D8E2",
        borderRadius: "4px",
        padding: "12px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
    },

    tituloTabela: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#17449B",
        margin: "0 0 10px 0",
    },

    tabela: {
        width: "100%",
        borderSpacing: 0,
        tableLayout: "fixed",
        fontSize: "12px",
        color: "#233D6A",
        backgroundColor: "#F5FAFE",
        border: "1px solid #D0D8E2",
        borderRadius: "5px",
        overflow: "hidden",
    },

    cabecalho: {
        height: "34px",
        backgroundColor: "#233D6A",
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
    },

    coluna: {
        padding: "8px 5px",
        textAlign: "center",
        border: "none",
        borderBottom: "1px solid #D0D8E2",
        boxSizing: "border-box",
    },

    linhaTabela: {
        height: "35px",
        borderBottom: "1px solid #D0D8E2",
        backgroundColor: "#F5FAFE",
    },

    celulaAtendente: {
        padding: "4px 10px",
        textAlign: "left",
        borderBottom: "1px solid #D0D8E2",
        fontSize: "13px",
        boxSizing: "border-box",
    },

    infoAtendente: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },

    imagemAtendente: {
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        objectFit: "cover",
    },

    avatarFallback: {
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        backgroundColor: "#DCECFD",
        color: "#17449B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        flexShrink: 0,
    },

    departamentos: {
        display: "inline-block",
        width: "75px",
        padding: "2px 5px",
        textAlign: "center",
        backgroundColor: "#E7F2FB",
        border: "1px solid #1C62C2",
        borderRadius: "12px",
        color: "#233D6A",
        fontSize: "13px",
        fontWeight: "semibold",
    },

    colunaDesempenho: {
        padding: "9px 5px",
        textAlign: "center",
        borderBottom: "1px solid #D0D8E2",
        fontSize: "15px",
        boxSizing: "border-box",
    },


}