import { React, useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Container, Section, Section1, Div, Div1, Div2, Div3, Div4, Div5 } from "../../assets/style/StylePageDash";

const data = [
  { name: "Junho", Escala: 21, amt: 2400 },
  { name: "Julho", Escala: 20, amt: 2210 },
  { name: "Agosto", Escala: 30, amt: 2290 },
  { name: "Setembro", Escala: 39, amt: 2000 },
  { name: "Outubro", Escala: 30, amt: 2181 },
  { name: "Novembro", Escala: '', amt: 2181 },
  { name: "Dezembro", Escala: '', amt: 2181 },

];

const Dashboard = () => {
  // MÉTODO GET
  const [usuarios, setUsuarios] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/user")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setUsuarios(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // MÉTODO GET
  const [comunidades, setComunidades] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/community")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setComunidades(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // MÉTODO GET
  const [depoimentos, setDepoimentos] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/brief")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setDepoimentos(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // MÉTODO GET
  const [questionarios, setQuestionarios] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/survey")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setQuestionarios(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var numUsuarios = Object.keys(usuarios).length;
  var numComunidades = Object.keys(comunidades).length;
  var numDepoimentos = Object.keys(depoimentos).length;
  var numQuestionarios = Object.keys(questionarios).length;

  var total = questionarios.reduce(getTotal, 0);

  function getTotal(total, item) {
    return total + item.escala;
  }

  return (
    <>
      <Container>
        <Section>
          <Div5>
            <h2>Dashboard Estatitisca Gerais</h2>
            <p>Moderadores das comunidades orientado com análises preditivas, entendendo as fontes de variabilidade dos dados e identificando relações de causa de efeito para tomada de decisão</p>
          </Div5>
          <Section1> 
            <Div>
              <h1>
                Usuárias registradas {numUsuarios}
              </h1>
            </Div> 
            <Div1>
              <h1>
                Comunidades criadas {numComunidades}
              </h1>
            </Div1>
            
            <Div2>
              <h1>
                Depoimentos postados {numDepoimentos}
              </h1>
            </Div2>

            <Div3>
              <h1>
                A média de depoimentos por comunidades {`${(numDepoimentos / numComunidades).toFixed(1)}`}
              </h1>
            </Div3>

            <Div4>
              <h1>
                Média de escalas {`${(total / numQuestionarios).toFixed(2)}`}
              </h1>
            </Div4>
          </Section1>
          <div>
            <h5>Gráfico com indices baseados na escala mensal das resposta do questionário</h5>
            <LineChart
              width={900}
              height={400}
              data={data}
              margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            >
              <Line
                type="monotone"
                dataKey="Escala"
                stroke="#0d069c"
                activeDot={{ r: 8 }}
              />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <YAxis />
              <XAxis dataKey="name" />
              <Legend />
            </LineChart>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default Dashboard;
