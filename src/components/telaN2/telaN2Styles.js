import { AlignCenter } from "lucide-react";

export const TelaN2Styles ={
     flexgrid: {
        width: "calc(100% - 63px)",
        display: 'flex',
        marginLeft: '63px'
    },

    container: {
        backgroundColor: "#F5FAFE",
        minHeight: '100vh',
        height: '99vh',
        alignItems: 'center',
        display: "flex",
        flexDirection: "column",

    },
    banner: {
    backgroundColor: "#F0F7FE",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderBottom: "2px solid #DCECFD"
},
  group: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginTop: "40px",
    marginLeft: "60px"
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
    objectFit: "contain"
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
    marginLeft: "60px",
    marginTop: "40px",
    flexWrap: "wrap"
},
filtro: {
    width: "350px",
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
    position: "relative"
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
    justifyContent: "center",
    

},








//Total Tickets
dadosTt:{
    width:"270px",
    height:"120px",
    backgroundColor:"#EDF6FD",
    border: "1px solid #0A3882",
    borderRadius: "5px",
    paddingLeft:"10px",
    paddingTop:"10px"

},
pSecTt: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "0",
    color:"#0A3882"
},
h3SecTt:{
     fontSize: "30px",
    fontWeight: "bold",
    margin: "0",
    color:"#0A3882",
    
},
pDSecTt:{
     fontSize: "14px",
    fontWeight: "bold",
    margin: "0",
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

//Dentro do SLA

dadosDSla:{
    width:"270px",
    height:"120px",
    backgroundColor:"#EEF9FA",
    border: "1px solid #026C60",
    borderRadius: "5px",
    paddingLeft:"10px",
    paddingTop:"10px"

},
pSecDSla:{
     fontSize: "18px",
    fontWeight: "bold",
    margin: "0",
    color:"#026C60"
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
        paddingTop:"5px"

},
iconDS:{
display:"flex",
padding:"1px",
alignItems:"center",
gap:"10px",
    marginTop:"3px"

},

//Fora do SLA
dadosFSla:{
    width:"270px",
    height:"120px",
    backgroundColor:"#FFE0E7",
    border: "1px solid #6C2626",
    borderRadius: "5px",
    paddingLeft:"10px",
    paddingTop:"10px"

},
pSecFSla:{
     fontSize: "18px",
    fontWeight: "bold",
    margin: "0",
    color:"#AB2642"
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

// Tempo Médio de resposta
dadosTMR:{
    width:"270px",
    height:"120px",
    backgroundColor:"#E0E0F6",
    border: "1px solid #4142C0",
    borderRadius: "5px",
    paddingLeft:"10px",
    paddingTop:"10px"

},
pSecTMR:{
     fontSize: "18px",
    fontWeight: "bold",
    margin: "0",
    color:"#4142C0"
},
h3SecTMR:{
     fontSize: "30px",
    fontWeight: "bold",
    margin: "0",
    color:"#4142C0"
},
pDSecTMR:{
     fontSize: "14px",
    fontWeight: "bold",
    margin: "0",
    color:"#4142C0",
        paddingTop:"5px"

},
iconTTMR:{
display:"flex",
padding:"1px",
alignItems:"center",
gap:"10px",
    marginTop:"3px"

},

//Tickets recorrentes
dadosTR:{
    width:"270px",
    height:"120px",
    backgroundColor:"#FFFDF3",
    border: "1px solid #87782D",
    borderRadius: "5px",
    paddingLeft:"10px",
    paddingTop:"10px",

},

pSecTtr:{
     fontSize: "18px",
    fontWeight: "bold",
    margin: "0",
    color:"#87782D"
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



}