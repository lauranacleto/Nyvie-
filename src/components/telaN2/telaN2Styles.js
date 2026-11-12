
export const TelaN2Styles ={
     flexgrid: {
        width: "calc(100% )",
        display: 'flex',
        marginLeft: '63px',
        backgroundColor: "#F5FAFE",
    },

    containerFundo: {
        width: '100%',
        alignItems: 'center',
        display: "flex",
        flexDirection: "column",
        margin:'0 auto',
    },
    container: { 
      width: "100%",
      backgroundColor: "#F0F7FE",
      borderBottom: "2px solid #DCECFD",

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
    alignItems:"start"
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
    justifyContent: "space-between"
},
filtro: {
    width: "30%",
    height: "45px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #D6E5F8",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "0 12px",
    boxSizing: "border-box",
    color: "#17449B",
    position: "relative",
    
},

filtroTexto: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    fontSize: "16px",
    lineHeight: "17px"
},

select: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer"
},
dados:{
    marginTop:"30px",
    display:"flex",
    gap:"10px",
    justifyContent: "space-between",
    width: "80%",
},








//Total Tickets
dadosTt:{
    width:"24%",
    height:"150px",
    backgroundColor:"#EDF6FD",
    border: "1px solid #0A3882",
    borderRadius: "5px",
    

},
pSecTt: {
    fontSize: "22px",
    fontWeight: "bold",
    margin: "0",
    color:"#0A3882",
    paddingTop:"5px",
    paddingLeft:"5px"

},
h3SecTt:{
     fontSize: "38px",
    fontWeight: "bold",
    margin: "0",
    color:"#0A3882",
    
},
pDSecTt:{
     fontSize: "14px",
    fontWeight: "bold",
    color:"#0A3882",
    paddingTop:"5px"

},
iconT:{
display:"flex",
padding:"1px",
alignItems:"center",
gap:"10px",
    marginTop:"3px"

},
setaTt: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0A3882",
    padding:"5px"
},

//Dentro do SLA

dadosDSla:{
    width:"24%",
    height:"150px",
    backgroundColor:"#EEF9FA",
    border: "1px solid #026C60",
    borderRadius: "5px",
},
pSecDSla:{
     fontSize: "22px",
    fontWeight: "bold",
    margin: "0",
    color:"#026C60",
    paddingTop:"5px",
    paddingLeft:"5px"
},
h3SecDSla:{
     fontSize: "30px",
    fontWeight: "bold",
    margin: "0",
    color:"#026C60"
},
pDSecDSla:{
     fontSize: "14px",
    fontWeight: "bold",
    margin: "0",
    color:"#026C60",
    
  
},
iconDS:{
display:"flex",
padding:"1px",
alignItems:"center",
gap:"10px",
    marginTop:"3px"
},

setaDS: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"10px"
    
    
},

//Fora do SLA
dadosFSla:{
    width:"24%",
    height:"150px",
    backgroundColor:"#FFE0E7",
    border: "1px solid #6C2626",
    borderRadius: "5px",
},
pSecFSla:{
     fontSize: "22px",
    fontWeight: "bold",
    margin: "0",
    color:"#AB2642",
    paddingTop:"5px",
    paddingLeft:"5px"
},
h3SecFSla:{
     fontSize: "30px",
    fontWeight: "bold",
    margin: "0",
    color:"#AB2642"
},
pDSecFSla:{
     fontSize: "14px",
    fontWeight: "bold",
    margin: "0",
    color:"#AB2642",
        paddingTop:"5px"
},
iconTFS:{
display:"flex",
padding:"1px",
alignItems:"center",
gap:"10px",
    marginTop:"3px"

},

setaPFS: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"5px"
},


//Tickets recorrentes
dadosTR:{
    width:"24%",
    height:"150px",
    backgroundColor:"#FFFDF3",
    border: "1px solid #87782D",
    borderRadius: "5px",
},

pSecTtr:{
     fontSize: "22px",
    fontWeight: "bold",
    margin: "0",
    color:"#87782D",
    paddingTop:"5px",
    paddingLeft:"5px"
},
h3SecTtr:{
     fontSize: "30px",
    fontWeight: "bold",
    margin: "0",
    color:"#87782D"
},
pDSecTtr:{
     fontSize: "14px",
    fontWeight: "bold",
    margin: "0",
    color:"#87782D",
        paddingTop:"5px"

},
iconTTR:{
display:"flex",
padding:"1px",
alignItems:"center",
gap:"10px",
    marginTop:"3px"
},
setaTR:{
display:"flex",
alignItems:"center",
},
setaTR: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"5px"
    
},


//buttons

buttons: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "90%",
    marginTop: "40px",

},
todos: {
    width: "200px",
    height: "35px",
    backgroundColor: "#E9F1F8",
    color: "#233D6A",
    border: "none",
    borderRadius: "20px",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
},

recentes: {
    width: "300px",
    height: "35px",
    backgroundColor: "#E9F1F8",
    color: "#233D6A",
    borderRadius: "20px",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none"
},

recorrentes: {
    width: "300px",
    height: "35px",
    backgroundColor: "#E9F1F8",
    color: "#233D6A",
    borderRadius: "20px",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none"
},
naoAtribuidos: {
    width: "300px",
    height: "35px",
    backgroundColor: "#233D6A",
    color: "#E9F1F8",
    borderRadius: "20px",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none"
},


//tabela

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
        marginTop:"50px",
        marginBottom:"20px"
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
    }


}