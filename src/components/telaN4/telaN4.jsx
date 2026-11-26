import Vect from "../../assets/Vect.png";
import Group from "../../assets/Group.svg";
import tor from "../../assets/tor.png";
import Fra from "../../assets/Fra.png";
import game from "../../assets/game.png";
import Header from "../header/header.jsx";
import Aside from "../aside/aside.jsx";
import { TelaN4Styles } from "./telaN4Styles.js";

import {
    CalendarDays,
    UserRound,
    TriangleAlert,
    ChevronDown,
} from "lucide-react";

export default function TelaN4() {

    const dadosVolume = [
        { nome: "Abertos", soc: 420, noc: 510 },
        { nome: "Resolvidos", soc: 774, noc: 856 },
        { nome: "Pendentes", soc: 27, noc: 61 },
        { nome: "SLA excedido", soc: 22, noc: 23 },
    ];

    const dadosConversao = [
        {
            nome: "P1 .Baixo",
            resolvidos: 112,
            transferidos: 595,
            badgeStyle: { backgroundColor: "#E6F4EA", color: "#137333", border: "1px solid #34A853" },
        },
        {
            nome: "P2 .Médio",
            resolvidos: 75,
            transferidos: 479,
            badgeStyle: { backgroundColor: "#E8F0FE", color: "#1967D2", border: "1px solid #4285F4" },
        },
        {
            nome: "P3 .Alto",
            resolvidos: 28,
            transferidos: 186,
            badgeStyle: { backgroundColor: "#FEF7E0", color: "#B06000", border: "1px solid #FBBC04" },
        },
        {
            nome: "P4 .Crítico",
            resolvidos: 0,
            transferidos: 2,
            badgeStyle: { backgroundColor: "#FCE8E6", color: "#C5221F", border: "1px solid #EA4335" },
        },
    ];

    const pontosNoc = [
        { mes: "Abr", x: 55, y: 92 },
        { mes: "Mai", x: 132, y: 92 },
        { mes: "Jun", x: 215, y: 74 },
        { mes: "Jul", x: 298, y: 60 },
        { mes: "Ago", x: 382, y: 44 },
        { mes: "Set", x: 465, y: 46 },
        { mes: "Out", x: 565, y: 24 },
    ];

    const pontosSoc = [
        { x: 55, y: 104 },
        { x: 132, y: 104 },
        { x: 215, y: 84 },
        { x: 298, y: 74 },
        { x: 382, y: 62 },
        { x: 465, y: 68 },
        { x: 568, y: 52 },
    ];

    const card = (titulo, valor, icone, cor, detalhe) => (
        <div style={TelaN4Styles.card}>
            <div
                style={{
                    ...TelaN4Styles.cardBarra,
                    backgroundColor: cor,
                }}
            />

            <div style={TelaN4Styles.cardConteudo}>
                <div style={TelaN4Styles.cardTopo}>
                    <div
                        style={{
                            ...TelaN4Styles.cardIcone,
                            color: cor,
                        }}
                    >
                        {icone}
                    </div>

                    <div>
                        <p style={TelaN4Styles.cardTitulo}>{titulo}</p>
                        <h3 style={TelaN4Styles.cardValor}>{valor}</h3>
                    </div>
                </div>

                <p style={TelaN4Styles.cardDetalhe}>{detalhe}</p>
            </div>
        </div>
    );

    return (
        <div style={TelaN4Styles.pagina}>
            <Aside />

            <div style={TelaN4Styles.areaPrincipal}>
                <Header />

                <main style={TelaN4Styles.conteudo}>

                    <section style={TelaN4Styles.banner}>
                        <div style={TelaN4Styles.bannerIcone}>
                            <img src={Group} alt="Banner" style={TelaN4Styles.bannerImagem} />
                        </div>

                        <div style={TelaN4Styles.bannerTexto}>
                            <h2 style={TelaN4Styles.saudacao}>
                                Olá, Laura!
                            </h2>

                            <p style={TelaN4Styles.subtitulo}>
                                Visão Gerencial
                            </p>
                        </div>
                    </section>

                   
                    <div style={TelaN4Styles.filtros}>

                        <div style={TelaN4Styles.filtro}>
                            <CalendarDays size={18} style={{ pointerEvents: "none" }} />

                            <div style={TelaN4Styles.filtroTexto}>
                                <span>Período</span>
                            </div>

                            <select defaultValue="7" style={TelaN4Styles.selectFiltro}>
                                <option value="7">Últimos 7 dias</option>
                                <option value="15">Últimos 15 dias</option>
                                <option value="30">Últimos 30 dias</option>
                                <option value="90">Últimos 90 dias</option>
                            </select>

                            <ChevronDown size={15} color="#204C9B" style={{ pointerEvents: "none" }} />
                        </div>

                        <div style={TelaN4Styles.filtro}>
                            <TriangleAlert size={18} style={{ pointerEvents: "none" }} />

                            <div style={TelaN4Styles.filtroTexto}>
                                <span>Departamento</span>
                            </div>

                            <select defaultValue="" style={TelaN4Styles.selectFiltro}>
                                <option value="">Todas</option>
                                <option value="SOC">SOC</option>
                                <option value="NOC">NOC</option>
                            </select>

                            <ChevronDown size={15} color="#204C9B" style={{ pointerEvents: "none" }} />
                        </div>

                        <div style={TelaN4Styles.filtro}>
                            <UserRound size={18} style={{ pointerEvents: "none" }} />

                            <div style={TelaN4Styles.filtroTexto}>
                                <span>Equipe</span>
                            </div>

                            <select defaultValue="" style={TelaN4Styles.selectFiltro}>
                                <option value="">Todos</option>
                                <option value="SOC">SOC</option>
                                <option value="NOC">NOC</option>
                            </select>

                            <ChevronDown size={15} color="#204C9B" style={{ pointerEvents: "none" }} />
                        </div>

                    </div>

                    <section style={TelaN4Styles.cards}>
                        {card(
                            "Total de tickets",
                            "248",
                            <img src={tor} alt="Total de tickets" style={{ width: 46, height: 46, objectFit: "contain" }} />,
                            "#204C9B",
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                                <img src={Vect} alt="Seta" style={{ width: 12, height: 12 }} />
                                15% em relação ao período anterior
                            </span>
                        )}

                        {card(
                            "Dentro do SLA",
                            "92%",
                            <img src={Fra} alt="Ícone de SLA" style={{ width: 46, height: 46, objectFit: "contain" }} />,
                            "#008577",
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                                <img src={Vect} alt="Seta" style={{ width: 12, height: 12 }} />
                                5% em relação ao período anterior
                            </span>
                        )}

                        {card(
                            "Pendentes",
                            "86",
                            <TriangleAlert size={46} strokeWidth={1.8} />,
                            "#B00032",
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                                <img
                                    src={Vect}
                                    alt="Seta"
                                    style={{ width: 12, height: 12, transform: "rotate(180deg)" }}
                                />
                                18% em relação ao período anterior
                            </span>
                        )}

                        <div style={TelaN4Styles.card}>
                            <div
                                style={{
                                    ...TelaN4Styles.cardBarra,
                                    backgroundColor: "#5145C8",
                                }}
                            />
                            <div style={TelaN4Styles.cardConteudo}>
                                <div style={TelaN4Styles.cardTopo}>
                                    <div style={{ ...TelaN4Styles.cardIcone, height: 68 }}>
                                        <img src={game} alt="Ícone de conversão" style={{ width: 46, height: 46, objectFit: "contain" }} />
                                    </div>

                                    <div style={TelaN4Styles.cardConversaoDados}>
                                        <p style={{ ...TelaN4Styles.cardTitulo, textAlign: "center", marginBottom: 2 }}>
                                            Taxa de conversão
                                        </p>

                                        <div style={TelaN4Styles.cardConversaoLinha}>
                                            <span style={TelaN4Styles.cardConversaoPerc}>19%</span>
                                            <span style={TelaN4Styles.cardConversaoTexto}>
                                                Transferidos para o próximo mês (210 / 1.470)
                                            </span>
                                        </div>

                                        <div style={TelaN4Styles.cardConversaoDivisor} />

                                        <div style={TelaN4Styles.cardConversaoLinha}>
                                            <span style={TelaN4Styles.cardConversaoPerc}>81%</span>
                                            <span style={TelaN4Styles.cardConversaoTexto}>
                                                Resolvidos no mesmo mês (1.260 / 1.470)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>


                    <section style={TelaN4Styles.graficosTopo}>


                        <div style={TelaN4Styles.graficosEsquerda}>


                            <div style={TelaN4Styles.painel}>
                                <div style={TelaN4Styles.painelTitulo}>
                                    <strong>
                                        Volume de chamada por departamento
                                    </strong>

                                    <div style={TelaN4Styles.legenda}>
                                        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                            <i style={TelaN4Styles.soc} /> SOC
                                        </span>

                                        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                            <i style={TelaN4Styles.noc} /> NOC
                                        </span>
                                    </div>
                                </div>

                                <div style={TelaN4Styles.volumeWrapper}>
                                    <div style={TelaN4Styles.eixoYVolume}>
                                        <span>1000</span>
                                        <span>650</span>
                                        <span>300</span>
                                        <span>0</span>
                                    </div>

                                    <div style={TelaN4Styles.areaBarrasVolume}>
                                        <div style={TelaN4Styles.barras}>
                                            <div style={TelaN4Styles.linhasGradeVolume}>
                                                <div style={TelaN4Styles.linhaGrade} />
                                                <div style={TelaN4Styles.linhaGrade} />
                                                <div style={TelaN4Styles.linhaGrade} />
                                                <div style={{ ...TelaN4Styles.linhaGrade, backgroundColor: "transparent" }} />
                                            </div>

                                            {dadosVolume.map((item) => (
                                                <div
                                                    style={TelaN4Styles.grupoBarras}
                                                    key={item.nome}
                                                >
                                                    <div style={TelaN4Styles.barrasColunas}>
                                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                            <span style={TelaN4Styles.valorBarra}>{item.soc}</span>
                                                            <div
                                                                style={{
                                                                    ...TelaN4Styles.barra,
                                                                    height: `${(item.soc / 1000) * 92}px`,
                                                                    backgroundColor: "#1A5BB8",
                                                                }}
                                                            />
                                                        </div>

                                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                            <span style={TelaN4Styles.valorBarra}>{item.noc}</span>
                                                            <div
                                                                style={{
                                                                    ...TelaN4Styles.barra,
                                                                    height: `${(item.noc / 1000) * 92}px`,
                                                                    backgroundColor: "#35B2A7",
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={TelaN4Styles.linhaNomesVolume}>
                                            {dadosVolume.map((item) => (
                                                <span key={item.nome} style={TelaN4Styles.nomeBarra}>
                                                    {item.nome}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div style={TelaN4Styles.painel}>
                                <strong style={TelaN4Styles.tituloPainel}>
                                    Evolução mensal (total de tickets)
                                </strong>

                                <svg
                                    viewBox="0 0 600 155"
                                    style={TelaN4Styles.graficoLinha}
                                    preserveAspectRatio="none"
                                >

                                    <line x1="45" y1="12" x2="45" y2="122" stroke="#DCE5EF" strokeWidth="1" />


                                    {[
                                        { y: 24, label: "2.000" },
                                        { y: 52, label: "1.500" },
                                        { y: 80, label: "1.000" },
                                        { y: 106, label: "500" },
                                        { y: 122, label: "" },
                                    ].map((item, idx) => (
                                        <g key={idx}>
                                            <line
                                                x1="45"
                                                y1={item.y}
                                                x2="585"
                                                y2={item.y}
                                                stroke="#DCE5EF"
                                                strokeWidth="1"
                                            />
                                            {item.label && (
                                                <text
                                                    x="38"
                                                    y={item.y + 3}
                                                    fontSize="10"
                                                    fontWeight="700"
                                                    fill="#1B3B7B"
                                                    textAnchor="end"
                                                >
                                                    {item.label}
                                                </text>
                                            )}
                                        </g>
                                    ))}


                                    {pontosNoc.map((p) => (
                                        <line
                                            key={p.mes}
                                            x1={p.x}
                                            y1="32"
                                            x2={p.x}
                                            y2="122"
                                            stroke="#DCE5EF"
                                            strokeWidth="1"
                                        />
                                    ))}


                                    <path
                                        d="M 55,92 C 95,88 110,96 132,92 C 165,86 185,78 215,74 C 250,68 270,64 298,60 C 335,52 355,46 382,44 C 415,42 435,48 465,46 C 505,42 535,32 565,24"
                                        fill="none"
                                        stroke="#1A5BB8"
                                        strokeWidth="2.5"
                                    />


                                    <path
                                        d="M 55,104 C 95,100 110,108 132,104 C 165,98 185,88 215,84 C 250,78 270,76 298,74 C 335,66 355,62 382,62 C 415,62 435,68 465,68 C 505,64 535,58 568,52"
                                        fill="none"
                                        stroke="#35B2A7"
                                        strokeWidth="2.5"
                                    />


                                    {pontosNoc.map((p, i) => (
                                        <circle key={`noc-${i}`} cx={p.x} cy={p.y} r="3.5" fill="#1A5BB8" />
                                    ))}


                                    {pontosSoc.map((p, i) => (
                                        <circle key={`soc-${i}`} cx={p.x} cy={p.y} r="3.5" fill="#35B2A7" />
                                    ))}


                                    {pontosNoc.map((p) => (
                                        <text
                                            key={`label-${p.mes}`}
                                            x={p.x}
                                            y="142"
                                            fontSize="11"
                                            fontWeight="700"
                                            fill="#0B1B38"
                                            textAnchor="middle"
                                        >
                                            {p.mes}
                                        </text>
                                    ))}
                                </svg>
                            </div>

                        </div>

                        {/* COLUNA DIREITA: COMPARATIVO SOC X NOC */}
                        <div style={TelaN4Styles.painel}>
                            <strong style={{ ...TelaN4Styles.tituloPainel, fontSize: 18 }}>
                                Comparativo SOC x NOC
                            </strong>

                            <div style={TelaN4Styles.donutArea}>
                                <div style={TelaN4Styles.donut}>
                                    <div style={TelaN4Styles.donutCentro}>
                                        <strong style={{ fontSize: 22, color: "#1A5BB8" }}>1.840</strong>
                                        <span style={{ fontSize: 13, fontWeight: "600", color: "#1A5BB8" }}>Total</span>
                                    </div>
                                </div>
                            </div>

                            <div style={TelaN4Styles.donutLegenda}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <div style={{ ...TelaN4Styles.soc, width: 18, height: 18 }} /> SOC
                                    </span>
                                    <span style={{ flex: 1, height: 1, backgroundColor: "#4A6FA5" }} />
                                    <span>68%</span>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <div style={{ ...TelaN4Styles.noc, width: 18, height: 18 }} /> NOC
                                    </span>
                                    <span style={{ flex: 1, height: 1, backgroundColor: "#4A6FA5" }} />
                                    <span>32%</span>
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* TAXA DE CONVERSÃO */}
                    <section style={TelaN4Styles.painel}>
                        <strong style={TelaN4Styles.tituloPainel}>
                            Taxa de conversão
                        </strong>

                        <div style={TelaN4Styles.filtrosPequenos}>
                            <div style={TelaN4Styles.filtroPequenoBox}>
                                <span style={TelaN4Styles.filtroPequenoLabel}>Prioridade</span>

                                <select style={TelaN4Styles.selectPequeno}>
                                    <option>Todas</option>
                                    <option>P1 Baixo</option>
                                    <option>P2 Médio</option>
                                    <option>P3 Alto</option>
                                    <option>P4 Crítico</option>
                                </select>

                                <ChevronDown size={14} color="#1B3B7B" style={{ pointerEvents: "none", marginTop: 2 }} />
                            </div>

                            <div style={TelaN4Styles.filtroPequenoBox}>
                                <span style={TelaN4Styles.filtroPequenoLabel}>Data</span>

                                <select style={TelaN4Styles.selectPequeno} defaultValue="atual">
                                    <option value="atual">Atual</option>
                                    <option value="7">Últimos 7 dias</option>
                                    <option value="30">Últimos 30 dias</option>
                                    <option value="90">Últimos 90 dias</option>
                                </select>

                                <ChevronDown size={14} color="#1B3B7B" style={{ pointerEvents: "none", marginTop: 2 }} />
                            </div>
                        </div>

                        <div style={TelaN4Styles.conversao}>

                            <div style={TelaN4Styles.graficoConversaoWrapper}>
                                <div style={TelaN4Styles.eixoY}>
                                    <span>1000</span>
                                    <span>750</span>
                                    <span>500</span>
                                    <span>250</span>
                                    <span>0</span>
                                </div>

                                <div style={TelaN4Styles.areaBarrasConversao}>
                                    <div style={TelaN4Styles.graficoConversao}>
                                        <div style={TelaN4Styles.linhasGrade}>
                                            <div style={TelaN4Styles.linhaGrade} />
                                            <div style={TelaN4Styles.linhaGrade} />
                                            <div style={TelaN4Styles.linhaGrade} />
                                            <div style={{ ...TelaN4Styles.linhaGrade, backgroundColor: "transparent" }} />
                                        </div>

                                        {dadosConversao.map((item) => (
                                            <div style={TelaN4Styles.grupoBarras} key={item.nome}>
                                                <div style={{ ...TelaN4Styles.barrasColunas, height: 140, gap: 10 }}>
                                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                        <span style={TelaN4Styles.valorBarra}>{item.resolvidos}</span>
                                                        <div
                                                            style={{
                                                                ...TelaN4Styles.barra,
                                                                width: 34,
                                                                height: `${(item.resolvidos / 1000) * 145}px`,
                                                                backgroundColor: "#1A5BB8",
                                                            }}
                                                        />
                                                    </div>

                                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                        <span style={TelaN4Styles.valorBarra}>{item.transferidos}</span>
                                                        <div
                                                            style={{
                                                                ...TelaN4Styles.barra,
                                                                width: 34,
                                                                height: `${(item.transferidos / 1000) * 145}px`,
                                                                backgroundColor: "#35B2A7",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div style={TelaN4Styles.linhaBadgesConversao}>
                                        {dadosConversao.map((item) => (
                                            <div key={item.nome} style={{ flex: 1, textAlign: "center" }}>
                                                <span style={{ ...TelaN4Styles.badgePrioridade, ...item.badgeStyle }}>
                                                    {item.nome}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div style={TelaN4Styles.conversaoResumo}>
                                <div style={TelaN4Styles.donutPequeno}>
                                    <div style={TelaN4Styles.donutCentro}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                                            <img
                                                src={game}
                                                alt="Ícone Taxa de conversão"
                                                style={{ width: 22, height: 22, objectFit: "contain" }}
                                            />
                                            <strong style={{ fontSize: 19, color: "#0A1934" }}>19%</strong>
                                        </div>
                                        <span style={{ fontSize: 9.5, fontWeight: "700", color: "#1B3B7B", lineHeight: 1.2 }}>
                                            Transferidos para o proximo mês
                                        </span>
                                    </div>
                                </div>

                                <div style={TelaN4Styles.legendaConversaoLista}>
                                    <div style={TelaN4Styles.legendaConversaoItem}>
                                        <i style={TelaN4Styles.soc} />
                                        <span style={TelaN4Styles.legendaTraco} />
                                        <span>Resolvidos no mesmo mês</span>
                                    </div>

                                    <div style={TelaN4Styles.legendaConversaoItem}>
                                        <i style={TelaN4Styles.noc} />
                                        <span style={TelaN4Styles.legendaTraco} />
                                        <span>Transferidos para o proximo mês</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}