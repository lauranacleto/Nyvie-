import { historicoTicketStyles } from "./historicoTicket";
import { useNavigate } from "react-router-dom";
import ticketIcon from "../assets/ticket.svg"
import perfisIcon from "../assets/perfil azul.svg"
import statusIcon from "../assets/status.svg"
import checkIcon from "../assets/check.svg"
import finalIcon from "../assets/keylock.svg"
import { useState } from "react";
import Header from "../components/header/header.jsx";
import Aside from "../components/aside/aside.jsx";

const iconesTela = {
    "Ticket": ticketIcon,
    "Ticket atribuído": perfisIcon,
    "Status alterado": statusIcon,
    "Ticket concluído": checkIcon,
    "Ticket finalizado": finalIcon,
}

export default function HistoricoTicket() {
    const navigate = useNavigate();

    const [ticket, setTicket] = useState(null);
    const [usuarios, setUsuarios] = useState([]);
    const [historico, setHistorico] = useState([]);
    const [departamento, setDepartamento] = useState("");
    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);

    return (
        <>
            <Aside />
            <Header />
            <div style={historicoTicketStyles.container}>

                <div style={historicoTicketStyles.title}>

                    <span style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#1C4691',
                    }}>

                        Historico do Ticket
                    </span>
                </div>
                <div style={historicoTicketStyles.caixaCima}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '12px',
                    }}>
                        <img
                            src={ticketIcon}
                            alt="Ticket"
                            style={{
                                width: '72px',
                                height: '72px',
                            }} />
                        <span style={{
                            fontSize: '40px',
                            fontWeight: 'bold',
                            color: '#1C4691',
                        }}>
                            #{'00128'}
                        </span>
                    </div>

                    <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '164px',
                        height: '44px',
                        borderRadius: '20px',
                        backgroundColor: '#C1EAD7',
                        border: '1px solid #476C64',
                        color: '#4B7068',
                        fontSize: '18px',
                        fontWeight: 'bold',
                    }}>
                        Concluído
                    </span>
                </div>
                <div style={historicoTicketStyles.areaInferior}>



                    <div style={historicoTicketStyles.caixaBaixo}>

                        <div style={historicoTicketStyles.espaco}>

                            {[
                                {
                                    titulo: 'Ticket aberto',
                                    descricao: 'O Ticket foi aberto por Laura Kauany.',
                                    icone: ticketIcon,
                                    usuario: 'Laura Kauany',
                                    data: '10/05/2026 10:45',
                                },
                                {
                                    titulo: 'Atribuído a Lorenzo Mangile',
                                    descricao: 'O ticket foi atribuído a Lorenzo Mangile.',
                                    icone: perfisIcon,
                                    usuario: 'Lorenzo Mangile',
                                    data: '10/05/2026 11:45',
                                },
                                {
                                    titulo: 'Status alterado',
                                    descricao: 'O status foi alterado para em andamento.',
                                    icone: statusIcon,
                                    usuario: 'Lorenzo Mangile',
                                    data: '10/05/2026 11:50',
                                },
                                {
                                    titulo: 'Ticket concluído',
                                    descricao: 'O ticket foi marcado como Concluído por Lorenzo Mangile.',
                                    icone: checkIcon,
                                    usuario: 'Lorenzo Mangile',
                                    data: '11/05/2026 14:45',
                                },
                                {
                                    titulo: 'Ticket finalizado',
                                    descricao: 'O ticket foi encerrado por Lorenzo Mangile.',
                                    icone: finalIcon,
                                    usuario: 'Lorenzo Mangile',
                                    data: '11/05/2026 14:45',
                                },
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    style={historicoTicketStyles.linhaHistorico}
                                >


                                    <div style={historicoTicketStyles.cardTicket}>

                                        <img
                                            src={item.icone}
                                            alt=""
                                            style={{
                                                width: '45px',
                                                height: '45px',
                                                objectFit: 'contain',

                                            }}
                                        />

                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '3px',
                                        }}>
                                            <span style={{
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                                color: '#1C4691',
                                            }}>
                                                {item.titulo}
                                            </span>

                                            <span style={{
                                                fontSize: '14px',
                                                color: '#1C4691',
                                            }}>
                                                {item.descricao}
                                            </span>
                                        </div>

                                    </div>

                                    {/* Caixa do usuário */}
                                    <div style={historicoTicketStyles.cardUsuario}>

                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: '#DCEAF5',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>

                                        </div>

                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '4px',
                                        }}>
                                            <span style={{
                                                fontSize: '14px',
                                                fontWeight: '530',
                                                color: '#1C4691',
                                            }}>
                                                {item.usuario}
                                            </span>

                                            <span style={{
                                                fontSize: '9px',
                                                color: '#1C4691',
                                            }}>
                                                {item.data}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>




                    <div style={historicoTicketStyles.caixaDetalhes}>

                        <span style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#1C4691',
                            paddingBottom: '12px',
                            borderBottom: '1px solid #D6E8FA',
                            width: '100%',
                        }}>
                            Detalhes do Ticket
                        </span>

                        <div style={historicoTicketStyles.dados}>

                            <div style={historicoTicketStyles.linhaDetalhe}>
                                <img
                                    src={ticketIcon}
                                    alt="Ticket"
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        objectFit: 'contain',
                                    }}
                                />

                                <span style={{
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    color: '#4B71B4',
                                }}>
                                    Data de criação
                                </span>

                                 <span style={{
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    color: '#1C4691',
                                }}>
                                    10/05/2026 10:45
                                </span>
                               
                            </div>

                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

