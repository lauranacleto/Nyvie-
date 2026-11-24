import api from "./services";

const API_KEY = "";

export const gerarResumo = async (listaTickets) => {
  try {
    const resposta = await api.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "openai/gpt-oss-120b",
        temperature: 0.2,
        messages: [
          {
            role: "user",
            content: `
              Defina se o pedido é recorrente com base na descrição dos tickets e se eles se repetem:

              Use como critério o local e a quantidade de tickets com o mesmo problema

              ${JSON.stringify(listaTickets.map(ticket => ticket.descricao, ticket => ticket.idTicket))}

              retorne com apenas os recorrentes em uma lista dos tickets com a descriação e o seu id GUID

              a estrutura json deve manter o mesmo padrão enviado acima, desde a nomenclatura de campos até o tipo de dado de cada um deles
            `,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    const conteudo = resposta.data.choices[0].message.content;

    const json = conteudo.match(/```json\s*([\s\S]*?)\s*```/);

    if (json) {
      const ticketsRecorrentes = JSON.parse(json[1]);

      return ticketsRecorrentes;
    }

    return resposta.data.choices[0].message.content;
  } catch (erro) {
    console.error(erro);
    console.log("Resposta:", erro.response.data);
    console.log("Status:", erro.response.status);
    return "Erro ao gerar resumo.";
  }
};