export const TelaN4Styles = {
    pagina: {
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#F4F9FD",
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        color: "#0B1B38",
    },

    areaPrincipal: {
        flex: 1,
        minWidth: 0,
        marginLeft: 65,
        marginTop: 64,
    },

    conteudo: {
        padding: "28px 28px 36px",
        maxWidth: 1120,
        margin: "0 auto",
        boxSizing: "border-box",
    },

    banner: {
        display: "flex",
        alignItems: "center",
        gap: 20,
        marginBottom: 26,
        paddingLeft: 4,
    },

    bannerIcone: {
        color: "#0A1934",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },

    bannerImagem: {
        width: 58,
        height: 58,
        objectFit: "contain",
        display: "block",
    },

    bannerTexto: {
        borderLeft: "1.5px solid #CBD5E1",
        paddingLeft: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },

    saudacao: {
        fontSize: 32,
        fontWeight: "700",
        margin: 0,
        color: "#0A1934",
        lineHeight: 1.15,
    },

    subtitulo: {
        fontSize: 20,
        color: "#0A1934",
        margin: "2px 0 0",
        fontWeight: "400",
    },

    filtros: {
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 24,
        marginBottom: 22,
    },

    filtro: {
        position: "relative",
        height: 48,
        border: "1px solid #C9D8E9",
        borderRadius: 2,
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "0 14px",
        color: "#204C9B",
        minWidth: 0,
        boxSizing: "border-box",
        cursor: "pointer",
    },

    filtroTexto: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        paddingTop: 6,
        flex: 1,
        minWidth: 0,
        fontSize: 12,
        color: "#0B1B38",
        pointerEvents: "none",
        boxSizing: "border-box",
    },

    selectFiltro: {
        position: "absolute",
        inset: 0,
        zIndex: 2,
        width: "100%",
        height: "100%",
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        fontSize: 13,
        fontWeight: "700",
        color: "#0B1B38",
        padding: "18px 36px 0 44px",
        cursor: "pointer",
    },

    cards: {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: 18,
        marginBottom: 22,
    },

    card: {
        display: "flex",
        minWidth: 0,
        backgroundColor: "#FFFFFF",
        border: "1px solid #475569",
        borderRadius: 2,
        height: 112,
        overflow: "hidden",
        boxSizing: "border-box",
    },

    cardBarra: {
        width: 5,
        flexShrink: 0,
    },

    cardConteudo: {
        padding: "10px 14px",
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },

    cardTopo: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flex: 1,
    },

    cardIcone: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        paddingRight: 12,
        borderRight: "1.5px solid #CBD5E1",
        height: 56,
    },

    cardTitulo: {
        fontSize: 13,
        fontWeight: "700",
        margin: "0 0 2px",
        color: "#0A1934",
    },

    cardValor: {
        fontSize: 32,
        fontWeight: "800",
        margin: 0,
        color: "#0A1934",
        lineHeight: 1.05,
    },

    cardDetalhe: {
        fontSize: 10,
        fontWeight: "600",
        margin: "4px 0 0",
        color: "#0A1934",
        whiteSpace: "nowrap",
    },

    cardConversaoDados: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minWidth: 0,
        gap: 4,
    },

    cardConversaoLinha: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
    },

    cardConversaoPerc: {
        fontSize: 16,
        fontWeight: "800",
        color: "#0A1934",
    },

    cardConversaoTexto: {
        fontSize: 8.5,
        fontWeight: "600",
        color: "#0A1934",
        lineHeight: 1.15,
        textAlign: "right",
    },

    cardConversaoDivisor: {
        height: 1,
        backgroundColor: "#CBD5E1",
        width: "100%",
    },

    // --- Gráficos Superiores ---
    graficosTopo: {
        display: "grid",
        gridTemplateColumns: "minmax(0, 2.15fr) minmax(270px, 0.85fr)",
        gap: 18,
        marginBottom: 18,
        alignItems: "stretch",
    },

    graficosEsquerda: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
        minWidth: 0,
    },

    painel: {
        backgroundColor: "#F8FBFE",
        border: "1px solid #64748B",
        borderRadius: 5,
        padding: "16px 20px",
        marginBottom: 0,
        boxSizing: "border-box",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },

    painelTitulo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 15,
        fontWeight: "700",
        color: "#1B3B7B",
        marginBottom: 12,
        gap: 8,
    },

    tituloPainel: {
        display: "block",
        fontSize: 15,
        fontWeight: "700",
        color: "#1B3B7B",
        marginBottom: 12,
    },

    legenda: {
        display: "flex",
        gap: 18,
        fontSize: 12,
        fontWeight: "700",
        color: "#1B3B7B",
    },

    soc: {
        display: "inline-block",
        width: 14,
        height: 14,
        borderRadius: "50%",
        backgroundColor: "#35B2A7",
        flexShrink: 0,
    },

    noc: {
        display: "inline-block",
        width: 14,
        height: 14,
        borderRadius: "50%",
        backgroundColor: "#1A5BB8",
        flexShrink: 0,
    },

    // Gráfico Volume de Chamada por Departamento
    volumeWrapper: {
        display: "flex",
        alignItems: "stretch",
        gap: 10,
    },

    eixoYVolume: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 118,
        paddingTop: 14,
        paddingBottom: 2,
        fontSize: 10,
        fontWeight: "700",
        color: "#1B3B7B",
        textAlign: "right",
        boxSizing: "border-box",
    },

    areaBarrasVolume: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },

    barras: {
        position: "relative",
        height: 118,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-around",
        borderLeft: "1px solid #DCE5EF",
        borderBottom: "1px solid #DCE5EF",
        padding: "0 12px",
        boxSizing: "border-box",
    },

    linhasGradeVolume: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: 18,
        pointerEvents: "none",
        zIndex: 0,
    },

    linhaGrade: {
        width: "100%",
        height: 1,
        backgroundColor: "#DCE5EF",
    },

    grupoBarras: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        flex: 1,
        minWidth: 0,
        position: "relative",
        zIndex: 1,
    },

    barrasColunas: {
        display: "flex",
        alignItems: "flex-end",
        gap: 8,
        height: 100,
    },

    barra: {
        width: 28,
        minHeight: 3,
        maxHeight: "100%",
        borderRadius: "4px 4px 0 0",
    },

    valorBarra: {
        fontSize: 10,
        fontWeight: "700",
        marginBottom: 3,
        color: "#0B1B38",
    },

    linhaNomesVolume: {
        display: "flex",
        justifyContent: "space-around",
        padding: "8px 12px 0",
    },

    nomeBarra: {
        flex: 1,
        fontSize: 10.5,
        fontWeight: "700",
        textAlign: "center",
        whiteSpace: "nowrap",
        color: "#0B1B38",
    },

    // Donut Comparativo SOC x NOC
    donutArea: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 0",
        flex: 1,
    },

    donut: {
        width: 195,
        height: 195,
        borderRadius: "50%",
        background: "conic-gradient(#1A5BB8 0% 32%, #35B2A7 32% 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    donutCentro: {
        width: "70%",
        height: "70%",
        backgroundColor: "#F8FBFE",
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#1B3B7B",
        fontWeight: "bold",
        textAlign: "center",
        padding: 8,
        boxSizing: "border-box",
    },

    donutLegenda: {
        fontSize: 13,
        fontWeight: "700",
        color: "#1B3B7B",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "10px 8px 6px",
    },

    // Evolução Mensal
    graficoLinha: {
        width: "100%",
        height: 135,
        display: "block",
    },

    // --- Seção Taxa de Conversão ---
    filtrosPequenos: {
        display: "flex",
        gap: 12,
        marginBottom: 18,
    },

    filtroPequenoBox: {
        position: "relative",
        width: 175,
        height: 44,
        border: "1px solid #4A6FA5",
        borderRadius: 4,
        backgroundColor: "#F8FBFE",
        padding: "5px 12px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        cursor: "pointer",
    },

    filtroPequenoLabel: {
        fontSize: 11,
        color: "#1B3B7B",
        fontWeight: "500",
        pointerEvents: "none",
    },

    selectPequeno: {
        position: "absolute",
        inset: 0,
        zIndex: 2,
        width: "100%",
        height: "100%",
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        fontSize: 12,
        fontWeight: "700",
        color: "#1B3B7B",
        padding: "18px 28px 0 12px",
        cursor: "pointer",
    },

    conversao: {
        display: "grid",
        gridTemplateColumns: "minmax(0, 2.25fr) minmax(230px, 0.75fr)",
        gap: 24,
        alignItems: "center",
    },

    graficoConversaoWrapper: {
        display: "flex",
        alignItems: "stretch",
        gap: 10,
    },

    eixoY: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 185,
        paddingTop: 32,
        paddingBottom: 2,
        fontSize: 11,
        fontWeight: "700",
        color: "#1B3B7B",
        textAlign: "right",
        boxSizing: "border-box",
    },

    areaBarrasConversao: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },

    graficoConversao: {
        position: "relative",
        height: 185,
        display: "flex",
        alignItems: "flex-end",
        borderTop: "1px solid #DCE5EF",
        borderLeft: "1px solid #DCE5EF",
        borderRight: "1px solid #DCE5EF",
        borderBottom: "1px solid #DCE5EF",
        backgroundColor: "#F8FBFE",
        justifyContent: "space-around",
        padding: "0 14px",
        boxSizing: "border-box",
    },

    linhasGrade: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: 36,
        pointerEvents: "none",
        zIndex: 0,
    },

    linhaBadgesConversao: {
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 14px 0",
    },

    badgePrioridade: {
        display: "inline-block",
        fontSize: 9.5,
        fontWeight: "700",
        padding: "2px 10px",
        borderRadius: 10,
        whiteSpace: "nowrap",
    },

    conversaoResumo: {
        fontSize: 11,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
    },

    donutPequeno: {
        width: 170,
        height: 170,
        borderRadius: "50%",
        background: "conic-gradient(#35B2A7 0% 34%, #1A5BB8 34% 48%, #35B2A7 48% 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
    },

    legendaConversaoLista: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 12,
    },

    legendaConversaoItem: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 11,
        fontWeight: "700",
        color: "#1B3B7B",
    },

    legendaTraco: {
        width: 24,
        height: 1.5,
        backgroundColor: "#4A6FA5",
        flexShrink: 0,
    },
};