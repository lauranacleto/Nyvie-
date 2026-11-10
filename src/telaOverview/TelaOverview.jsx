import Header from "../components/header/header";
import Aside from "../components/aside/aside";
import { telaOverviewStyles } from './telaOverviewStyles';
import icone from "../assets/clipboard.svg"
import TelaN2 from "../components/telaN2/telaN2"
import { Ticket } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../services/services";

export default function TelaOverview() {


    const [dadosTickets, setDadosTickets] = useState([]);

    const getTickets = async () => {
        try {
            const response = await api.get('/tickets');
            setDadosTickets(response.data);
        } catch (error) {
            console.error("Erro ao buscar tickets:", error);
        }
    };

    useEffect(() => {
        getTickets();
    }, []);

    return (
        <TelaN2/>
    );
}

