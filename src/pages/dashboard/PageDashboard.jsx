import { React, useState, useEffect } from "react";
import { Area, AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart } from "recharts";
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

  // MÉTODO GET
  const [dashboard, setDashboard] = useState([])

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/dash").then((resp) => {
      return resp.json()
    }).then((resp) => {
      setDashboard(resp)
      console.log(resp)
    }).catch(error => {
      console.log(error)
    })
  }, [])

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
            <h5>Média de Escala das Usuárias</h5>
            <LineChart
              width={1000}
              height={400}
              data={dashboard}
              margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
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

            <AreaChart width={1000} height={400} data={dashboard}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="sentimentoPositivo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2218ec" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#5b1af5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="sentimentoNegativo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f11810" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f32922" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="data" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="sentimentoPositivo" stroke="#281df0" fillOpacity={1} fill="url(#sentimentoPositivo)" />
              <Area type="monotone" dataKey="sentimentoNegativo" stroke="#ee3b1b" fillOpacity={1} fill="url(#sentimentoNegativo)" />
            </AreaChart>
          </div>
          <div>
            <h5>Interesses das Usuárias</h5>

            <BarChart width={1000} height={400} data={interesses}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="nome" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="qtdUsuarios" fill="#82ca9d" />
            </BarChart>
          </div>

        </Section>
      </Container>
    </>
  );
};

export default Dashboard;
