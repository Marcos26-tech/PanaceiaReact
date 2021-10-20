import { React, useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import {
  Area,
  AreaChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";
import {
  Container,
  Section,
  Section1,
  Div,
  Div1,
  Div2,
  Div3,
  Div4,
  Div5,
  Section2,
} from "../../assets/style/StylePageDash";

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

  // MÉTODO GET
  const [dashboard, setDashboard] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/dash")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setDashboard(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // MÉTODO GET
  const [interesses, setInteresses] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/interest")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setInteresses(resp);
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
            <p>
              Moderadores das comunidades orientado com análises preditivas,
              entendendo as fontes de variabilidade dos dados e identificando
              relações de causa de efeito para melhor tomada de decisão.
            </p>
          </Div5>
          <Section1>
            <Div>
              <h1>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Usuárias Registradas", numUsuarios)
                      .start(20);
                  }}
                />
              </h1>
            </Div>
            <Div1>
              <h1>Comunidades Criadas {numComunidades}</h1>
            </Div1>

            <Div2>
              <h1>Depoimentos Postados {numDepoimentos}</h1>
            </Div2>

            <Div3>
              <h2>
                Média dos Depoimentos por Comunidade{" "}
                {`${(numDepoimentos / numComunidades).toFixed(1)}`}
              </h2>
            </Div3>

            <Div4>
              <h1>
                Média das Escalas {`${(total / numQuestionarios).toFixed(2)}`}
              </h1>
            </Div4>
          </Section1>
          <Section2>
            <div>
              <h5>Média de Escala das Usuárias</h5>
              <LineChart
                width={950}
                height={400}
                data={dashboard}
                margin={{ top: 15, right: 30, left: 50, bottom: 5 }}
              >
                <Line
                  type="monotone"
                  dataKey="mediaEscala"
                  stroke="#0d069c"
                  activeDot={{ r: 8 }}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <YAxis />
                <XAxis dataKey="data" />
                <Legend />
              </LineChart>
            </div>
            <div>
              <h5>Sentimentos percebido dos Depoimentos das Usuárias</h5>

              <AreaChart
                width={950}
                height={400}
                data={dashboard}
                margin={{ top: 10, right: 30, left: 50, bottom: 5 }}
              >
                <defs>
                  <linearGradient
                    id="sentimentoPositivo"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#2218ec" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#5b1af5" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="sentimentoNegativo"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#f11810" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f32922" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="data" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sentimentoPositivo"
                  stroke="#281df0"
                  fillOpacity={1}
                  fill="url(#sentimentoPositivo)"
                />
                <Area
                  type="monotone"
                  dataKey="sentimentoNegativo"
                  stroke="#ee3b1b"
                  fillOpacity={1}
                  fill="url(#sentimentoNegativo)"
                />
              </AreaChart>
            </div>
            <div>
              <h5>Interesses das Usuárias</h5>

              <BarChart
                width={1000}
                height={400}
                data={interesses}
                margin={{ top: 15, right: 75, left: 50, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nome" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="qtdUsuarios" fill="#82ca9d" />
              </BarChart>
            </div>
          </Section2>
        </Section>
      </Container>
    </>
  );
};

export default Dashboard;
