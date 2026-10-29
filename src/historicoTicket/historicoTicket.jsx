import { historicoTicketStyles } from "./historicoTicket";
import { useNavigate } from "react-router-dom";
import ticketIcon from "../assets/ticket.svg"
import perfisIcon from "../assets/perfil azul.svg"
import statusIcon from "../assets/status.svg"
import checkIcon from "../assets/check.svg"
import finalIcon from "../assets/keylock.svg"
import { useState } from "react";

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
                                width: '42px',
                                height: '42px',
                            }} />
                        <span style={{
                            fontSize: '24px',
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
                        width: '100px',
                        height: '28px',
                        borderRadius: '20px',
                        backgroundColor: '#C1EAD7',
                        border: '1px solid #476C64',
                        color: '#4B7068',
                        fontSize: '12px',
                        fontWeight: 'bold',
                    }}>
                        Concluído
                    </span>
                </div>
            </div>
        
        </>
    )
}

